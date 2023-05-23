import { useState } from "react";
import chip from "../assets/img/chip.png";
import "./Form.css";

function Formcarrito(props) {
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const validateForm = () => {
    const form = document.querySelector(".formpay");
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

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberInput = (e) => {
    document.querySelector(".card-number-box").innerText = cardNumber;
  };

  const handleCardHolderInput = (e) => {
    setCardHolder(e.target.value.toUpperCase());
    document.querySelector(".card-holder-name").innerText = cardHolder;
  };

  const handleMonthInput = (e) => {
    document.querySelector(".exp-month").innerText = expMonth;
  };

  const handleYearInput = (e) => {
    document.querySelector(".exp-year").innerText = expYear;
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCvvChange = (event) => {
    document.querySelector(".cvv-box").innerText = cvv;
  };

  const handleCVVFocus = () => {
    setIsFlipped(true);
  };

  return (
    <>
      <div
        className={`creditcard-container ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardFlip}
      >
        <div className="front">
          <div className="image">
            <img src={chip} alt="" />
          </div>
          <div className="card-number-box">################</div>
          <div className="flexbox">
            <div className="box">
              <span>TITULAR</span>
              <div className="card-holder-name">################</div>
            </div>
            <div className="box">
              <span>VENCIMIENTO</span>
              <div className="expiration form-group d-flex">
                <div className="exp-month w-50">MM</div>
                <strong className="align-self-center mx-2">/</strong>
                <div className="exp-year w-50">AA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="stripe"></div>
          <div className="box">
            <span>cvv</span>
            <div className="cvv-box">###</div>
          </div>
        </div>
      </div>

      <div className="container bg-dark text-light formpay">
        <form onSubmit={handleSubmit} className="formCard bg-dark text-light">
          <div className="inputBox">
            <label htmlFor="card-number-input">Numero de la Tarjeta</label>
            <input
              id="card-number-input"
              className="card-number-input"
              placeholder="################"
              min={0}
              minLength={8}
              maxLength={30}
              type="number"
              value={cardNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 18) {
                  setCardNumber(value);
                  handleCardNumberInput();
                  validateForm();
                }
              }}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="card-holder-input">Titular de la Tarjeta</label>
            <input
              id="card-holder-input"
              className="card-holder-input"
              type="text"
              maxLength={36}
              placeholder="################"
              onChange={handleCardHolderInput}
              value={cardHolder}
              required
            />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <label htmlFor="month-input">Mes de expiracion</label>
              <select
                id="month-input"
                className="month-input"
                placeholder="MM"
                type="number"
                value={expMonth}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 2) {
                    setExpMonth(value);
                    handleMonthInput();
                  }
                }}
                required
              >
                <option value="" disabled>
                  MM
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="inputBox">
              <label htmlFor="year-input">Año de expiracion</label>
              <select
                id="year-input"
                placeholder="AA"
                type="number"
                value={expYear}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 2) {
                    setExpYear(value);
                    handleYearInput();
                  }
                }}
                required
              >
                <option value="" disabled>
                  AA
                </option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <div className="inputBox ">
            <label htmlFor="cvv-input">CVV</label>
            <input
              className="cvv-input"
              onFocus={handleCVVFocus}
              onBlur={handleCardFlip}
              placeholder="###"
              min={0}
              max={999}
              maxLength={3}
              minLength={3}
              type="number"
              id="cardCvv"
              value={cvv}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 3) {
                  setCvv(value);
                  handleCvvChange();
                  validateForm();
                }
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Formcarrito;
