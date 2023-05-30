import img404 from "../assets/img/error-404.jpg";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <div className="d-flex justify-content-center bg-dark notF">
        <img src={img404} className="img-fluid" />
      </div>
    </>
  );
}

export default NotFound;
