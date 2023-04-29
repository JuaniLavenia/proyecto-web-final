import React from "react";
import "./Banner.css";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.jpg";
import banner3 from "../assets/img/banner3.jpg";
import banner4 from "../assets/img/banner5.png";

const Banner = ({ image, title, category }) => {
  return (
    <section className="conteinerBanner">
      <a href={`/${category}`} className="banner">
        <div className="card-banner bg-dark text-dark">
          <img src={image} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </a>
    </section>
  );
};

const Banners = () => {
  return (
    <div>
      <Banner
        image={banner1}
        title="Productos Lavado de Autos"
        category="categoria1"
      />
      <Banner image={banner2} title="Perfumes" category="categoria2" />
      <Banner
        image={banner3}
        title="Productos Interior/Tapizados"
        category="categoria3"
      />
      <Banner image={banner4} title="Ceras Liquidas" category="categoria4" />
    </div>
  );
};

export default Banners;
