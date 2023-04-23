import "./Carrito.css";
import { useState, useEffect } from "react";
import Formcarrito from "../components/Formcarrito";
import { useNavigate } from "react-router";

function Carrito() {
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [formValid, setFormValid] = useState(false);
  const valKey = localStorage.getItem("validation");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) {
      setCartItems(items);
    }
  }, []);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
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

  const handleAddToCart = (producto) => {
    setCartItems([...cartItems, producto]);
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, producto]));
  };

  const handleRemoveFromCart = (producto) => {
    const newCartItems = cartItems.filter((item) => item.id !== producto.id);
    if (newCartItems.length !== cartItems.length) {
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  return (
    <div className="main bg-dark text-light">
      <div className="table-responsive ">
        {cartItems.length > 0 ? (
          <>
            <table
              className="table table-sm text-center align-middle bg-dark text-light"
              id="table"
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Productos</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody className="tbody " id="cartTable">
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>1</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="col total-comprar">
              <h3 className="itemCardTotal" id="itemTotal">
                Total ${calculateTotal()}
              </h3>

              <button
                className="btn btn-success"
                onClick={handleShowModal}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                COMPRAR ({cartItems.length})
              </button>
            </div>
          </>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>

      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" id="exampleModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title">Información de la compra</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Formcarrito />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    if (valKey) {
                      alert("¡Compra realizada correctamente!");
                      handleCloseModal();
                      setCartItems([]);
                      localStorage.removeItem("cartItems");
                      localStorage.removeItem("validation");
                    }
                  }}
                >
                  Pagar y enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;
