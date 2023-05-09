import "./Carrito.css";
import { useState, useEffect } from "react";
import Formcarrito from "../components/Formcarrito";
import { Button, Modal } from "react-bootstrap";
import Envio from "../components/EnvioForm";

function Carrito() {
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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

  // const handleAddToCart = (producto) => {
  //   setCartItems([...cartItems, producto]);
  //   localStorage.setItem("cartItems", JSON.stringify([...cartItems, producto]));
  // };

  const handleRemoveFromCart = (producto) => {
    const newCartItems = cartItems.filter((item) => item.id !== producto.id);
    if (newCartItems.length !== cartItems.length) {
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const handlePayment = () => {
    const valKey = localStorage.getItem("validation");
    const valKeyTwo = localStorage.getItem("validation2");
    if (valKey && valKeyTwo) {
      alert(
        "¡Compra realizada con exito, se enviara su factura al correo electronico!"
      );
      handleCloseModal();
      setCartItems([]);
      localStorage.removeItem("cartItems");
      localStorage.removeItem("validation");
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
                  className="card cardCart bg-dark text-light carritoItems w-100"
                  key={index}
                >
                  <div className="card-image">
                    <img src={item.image} alt={item.name} />
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
                        Ver más productos
                      </button>
                      <Button variant="warning" onClick={handleShowModal}>
                        Comprar Ahora
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
                Comprar Todo ({cartItems.length})
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
            <Modal.Header closeButton>
              <Modal.Title>Información del pago</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formcarrito />
              <Envio />
            </Modal.Body>
            <Modal.Footer>
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
