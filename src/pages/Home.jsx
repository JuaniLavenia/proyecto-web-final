import "./Home.css";
import Ternnova from "../assets/img/ternnova-carr.png";
import Fullcar from "../assets/img/fullcar-carr.png";
import Toxic from "../assets/img/toxic-carr.png";
import Drop from "../assets/img/drop-carr.png";
import Dream from "../assets/img/dream-carr.png";
import Megui from "../assets/img/meguiars-carr.png";
import Menzerna from "../assets/img/menzerna-carr.png";


function HomePage() {
  return (
    <div className="home-page text-light">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Toxic} alt="" />
          </div>
          <div className="carousel-item">
            <img src={Megui} alt="" />
          </div>
          <div className="carousel-item">
            <img src={Fullcar} alt="" />
          </div>
          <div className="carousel-item">
            <img src={Dream} alt="" />
          </div>
          <div className="carousel-item">
            <img src={Ternnova} alt="" />
          </div>
          <div className="carousel-item">
            <img src={Drop} alt="" />
          </div>

          <div className="carousel-item">
            <img src={Menzerna} alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  );
}

export default HomePage;
