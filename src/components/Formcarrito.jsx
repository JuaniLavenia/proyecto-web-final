import { useState } from "react";

function Formcarrito(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [shippingName, setShippingName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar la información de pago y envío a un servidor para procesar el pago y envío
    // ...
    // Luego redirige al usuario a una página de confirmación de pedido
    props.history.push("/confirmacion-pedido");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Información de pago</h2>
      <label htmlFor="cardNumber">Número de tarjeta de crédito</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />

      <label htmlFor="cardExpiration">Fecha de vencimiento (MM/AA)</label>
      <input
        type="text"
        id="cardExpiration"
        value={cardExpiration}
        onChange={(e) => setCardExpiration(e.target.value)}
        required
      />

      <label htmlFor="cardCvv">Código de seguridad (CVV)</label>
      <input
        type="text"
        id="cardCvv"
        value={cardCvv}
        onChange={(e) => setCardCvv(e.target.value)}
        required
      />

      <h2>Información de envío</h2>
      <label htmlFor="shippingName">Nombre completo</label>
      <input
        type="text"
        id="shippingName"
        value={shippingName}
        onChange={(e) => setShippingName(e.target.value)}
        required
      />

      <label htmlFor="shippingAddress">Dirección de envío</label>
      <textarea
        id="shippingAddress"
        value={shippingAddress}
        onChange={(e) => setShippingAddress(e.target.value)}
        required
      />

      <button type="submit">Pagar y enviar</button>
    </form>
  );
}

export default Formcarrito;
