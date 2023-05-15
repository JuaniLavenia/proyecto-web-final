import { useState } from "react";
import "../pages/Carrito.css";

function Envio() {
  const [shippingName, setShippingName] = useState("");
  const [DniNumber, setDniNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedo enviar la información de pago y envío a un servidor para procesarlo
    // ...
    // Luego redirijo al usuario a una página de confirmación de pedido
  };

  const validateForm = () => {
    const form = document.querySelector(".formcarrito");
    const inputs = form.querySelectorAll("input");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value) {
        isValid = false;
      }
    });

    setFormValid(isValid);
    localStorage.setItem("validation2", isValid);
  };

  return (
    <>
      <div className="form-group formcarrito mt-3">
        <h2 className="form-label">Información de envío</h2>
        <p>
          Los datos proporcionados deben ser de la persona que va a recibir el
          pedido
        </p>
        <div>
          <label htmlFor="shippingName" className="form-label"></label>
          <input
            className="form-control"
            placeholder="Nombre completo"
            maxLength={40}
            type="text"
            id="shippingName"
            value={shippingName}
            onChange={(e) => {
              setShippingName(e.target.value);
              validateForm();
            }}
            required
          />
          <div className="invalid-feedback">
            Por favor, completa este campo.
          </div>
        </div>

        <div>
          <label htmlFor="shippingDNI" className="form-label"></label>
          <input
            className="form-control dni"
            placeholder="DNI"
            min={0}
            minLength={7}
            maxLength={8}
            type="number"
            id="DniNumber"
            value={DniNumber}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 8) {
                setDniNumber(value);
                validateForm();
              }
            }}
            required
          />
          <div className="invalid-feedback">
            Por favor, completa este campo.
          </div>
        </div>

        <div>
          <label htmlFor="shippingAddress" className="form-label"></label>
          <input
            className="form-control"
            placeholder="Dirección de envío"
            type="text"
            maxLength={140}
            id="shippingAddress"
            value={shippingAddress}
            onChange={(e) => {
              setShippingAddress(e.target.value);
              validateForm();
            }}
            required
          />
          <div className="invalid-feedback">
            Por favor, completa este campo.
          </div>
        </div>
      </div>
    </>
  );
}

export default Envio;
