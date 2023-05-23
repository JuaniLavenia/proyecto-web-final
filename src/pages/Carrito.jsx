import "./Carrito.css";
import { useState, useEffect, useContext } from "react";
import Formcarrito from "../components/Formcarrito";
import { Button, Modal } from "react-bootstrap";
import Envio from "../components/EnvioForm";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ContextProvider";

function Carrito() {
  const { setCartCount } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const cartCount = cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );

    setCartCount(cartCount);
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) {
      setCartItems(items);
    }
  }, []);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRemoveFromCart = (producto) => {
    Swal.fire({
      title: "Eliminar producto",
      text: `¿Estás seguro que deseas eliminar ${producto.name} del carrito?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const newCartItems = cartItems.filter(
          (item) => item._id !== producto._id
        );
        if (newCartItems.length !== cartItems.length) {
          setCartItems(newCartItems);
          localStorage.setItem("cartItems", JSON.stringify(newCartItems));
          const count = newCartItems.reduce(
            (count, item) => count + item.quantity,
            0
          );
          setCartCount(count);
        }
      }
    });
  };

  const handlePayment = () => {
    const valKey = localStorage.getItem("validation");
    const valKeyTwo = localStorage.getItem("validation2");
    if (valKey && valKeyTwo) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title:
          "¡Compra realizada con exito, se enviara su factura al correo electronico!",
        showConfirmButton: false,
        timer: 1500,
      });

      handleCloseModal();
      setCartItems([]);
      localStorage.removeItem("cartItems");
      localStorage.removeItem("validation");
      localStorage.removeItem("validation2");
      window.location.reload();
    }
  };

  return (
    <div className="main bg-dark text-light">
      <div className="table-responsive">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <div className="card-container" key={index}>
                <div
                  className=" cardCart bg-dark text-light carritoItems w-100"
                  key={index}
                >
                  <div className="card-image">
                    <img
                      src={`https://proyecto-web-final-backend--juan-ignacio245.repl.co/img/productos/${item.image}`}
                      alt={item.name}
                    />
                  </div>
                  <div className="card-details">
                    <div className="card-name">
                      {item.name} x({item.quantity})
                    </div>
                    <div className="card-buttons buttonsCart d-flex">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        Eliminar
                      </button>
                      <button className="btn btn-primary">
                        <Link
                          to="/productos"
                          className="text-light text-decoration-none"
                        >
                          Ver más productos
                        </Link>
                      </button>
                      <Button variant="warning" onClick={handleShowModal}>
                        Comprar Ahora ({item.quantity})
                      </Button>
                    </div>
                  </div>
                  <div className="card-price">$ {item.price}</div>
                </div>
              </div>
            ))}

            <div className="col total-comprar">
              <h3 className="itemCardTotal" id="itemTotal">
                Total ${calculateTotal()}
              </h3>

              <Button variant="success" onClick={handleShowModal}>
                Comprar Todo
              </Button>
            </div>
          </>
        ) : (
          <p className="text-center">No hay productos en el carrito.</p>
        )}
      </div>

      {showModal && (
        <>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton className="bg-dark text-light">
              <Modal.Title>Información del pago</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-light">
              <Formcarrito />
              <Envio />
            </Modal.Body>
            <Modal.Footer className="bg-dark text-light">
              <Button variant="danger" onClick={handleCloseModal}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handlePayment}>
                Pagar y enviar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Carrito;
