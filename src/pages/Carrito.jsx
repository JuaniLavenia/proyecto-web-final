import { Link } from "react-router-dom";
import "./Carrito.css";
import { useState } from "react";
import Formcarrito from "../components/Formcarrito";

function Carrito() {
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleShowModal = (e) => {
    e.preventDefault();

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="main">
      <div className="table-responsive">
        {cartItems.length > 0 ? (
          <>
            <table
              className="table table-sm text-center align-middle"
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
              <tbody className="tbody" id="cartTable"></tbody>
            </table>

            <div className="col total-comprar">
              <h3 className="itemCardTotal" id="itemTotal">
                Total $
              </h3>

              <Link to="">
                <button
                  className="btn btn-success"
                  onClick={handleShowModal}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  COMPRAR
                </button>
              </Link>
            </div>
          </>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>

      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" id="exampleModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Información de pago y envío</h5>
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
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCloseModal}
                >
                  Enviar
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
