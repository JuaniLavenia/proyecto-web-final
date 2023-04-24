import { useState } from "react";

function Formcarrito(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpirationMonth, setCardExpMonth] = useState("");
  const [cardExpirationYear, setCardExpYear] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [shippingName, setShippingName] = useState("");
  const [DniNumber, setDniNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar la información de pago y envío a un servidor para procesar el pago y envío
    // ...
    // Luego redirige al usuario a una página de confirmación de pedido
    props.history.push("/confirmacion-pedido");
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
    localStorage.setItem("validation", isValid);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container formcarrito">
      <div className="form-group">
        <h2 className="form-label">Información de pago</h2>
        <div>
          <label htmlFor="cardNumber" className="form-label">
            Tipo de tarjeta
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            required
          >
            <option>Seleccione la entidad</option>
            <option value="1">Visa</option>
            <option value="2">MasterCard</option>
          </select>
          <div className="invalid-feedback">
            Por favor, completa este campo.
          </div>
        </div>

        <div>
          <label htmlFor="cardNumber" className="form-label"></label>
          <input
            className="form-control"
            placeholder="Número de la tarjeta"
            min={0}
            minLength={13}
            maxLength={18}
            type="number"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 18) {
                setCardNumber(value);
                validateForm();
              }
            }}
            required
          />
          <div className="invalid-feedback">
            Por favor, completa este campo.
          </div>
        </div>

        <div className="row">
          <label htmlFor="cardExpiration" className="form-label mt-3">
            Fecha de caducidad
          </label>

          <div className="form-group d-flex">
            <input
              className="form-control w-50"
              placeholder="MM"
              type="number"
              min={1}
              max={12}
              id="cardExpiration"
              value={cardExpirationMonth}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 2) {
                  setCardExpMonth(value);
                  validateForm();
                }
              }}
              required
            />
            <strong className="align-self-center mx-2">/</strong>
            <input
              className="form-control w-50"
              placeholder="AA"
              type="number"
              min={23}
              max={99}
              id="cardExpirationYear"
              value={cardExpirationYear}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 2) {
                  setCardExpYear(value);
                  validateForm();
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Por favor, completa este campo.
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="cardCvv" className="form-label"></label>
          <input
            className="form-control"
            placeholder="Código de seguridad (CVV)"
            min={0}
            max={999}
            maxLength={3}
            minLength={3}
            type="number"
            id="cardCvv"
            value={cardCvv}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 3) {
                setCardCvv(value);
                validateForm();
              }
            }}
            required
          />

          <div className="invalid-feedback">
            Por favor, completa este campo.
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <h2 className="form-label">Información de envío</h2>
        <div>
          <label htmlFor="shippingName" className="form-label"></label>
          <input
            className="form-control"
            placeholder="Nombre completo (de la persona que va a recibir el pedido)"
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
            placeholder="DNI (de la persona que va a recibir el pedido)"
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
    </form>
  );
}

export default Formcarrito;
