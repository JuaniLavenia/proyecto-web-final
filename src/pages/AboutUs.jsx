import "./About.css";

function AboutUs() {
  return (
    <>
      <div className="allContent">
        <div className="card border border-warning bg-dark text-light">
          <img
            src="https://blog.advesa.com/wp-content/uploads/2019/11/about-us-page.png"
            className="card-img-top imgAbout w-50 d-flex align-self-center mt-4"
            alt="..."
          />
          <div className=" tituloAb bg-dark text-light mt-3">
            <h3 className="text-center">Integrantes de Rolling-Detailing</h3>
            <p className="text-center w-50 d-flex align-self-center">
              Inicia sus actividades en el año 2023 cómo una empresa
              especializada en la venta y asesoramiento de productos de limpieza
              para vehiculos, tanto para consumidores particulares, empresas o
              revendedores, brindando soluciones a la medida de cada necesidad.
            </p>
          </div>
        </div>

        <div className="card-group row m-auto bg-dark text-light">
          <div className="card border border-warning p-3 bg-dark text-light">
            <img
              src="https://ca.slack-edge.com/THQU1MGPN-U03Q9HH12RZ-4dbc2382e13c-512"
              className="rounded-circle w-30 p-3 border border-warning card-img-top imgCard"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title text-center">Juan Ignacio Lavenia</h5>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">Scrum Master</small>
            </div>
          </div>

          <div className="card border border-warning p-3 bg-dark text-light">
            <img
              src="https://ca.slack-edge.com/THQU1MGPN-U03PRCPB9FV-9d578752aec1-512"
              className="rounded-circle w-30 p-3 border border-warning card-img-top imgCard"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title text-center">Nicolas Fernandez</h5>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">Integrante</small>
            </div>
          </div>

          <div className="card border border-warning p-3 bg-dark text-light">
            <img
              src="https://ca.slack-edge.com/THQU1MGPN-U03N3DC1WCC-b0a574a511e2-512"
              className="rounded-circle w-30 p-3 border border-warning card-img-top imgCard"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title text-center">Marcos Coronel</h5>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">Integrante</small>
            </div>
          </div>

          <div className="card border border-warning p-3 bg-dark text-light">
            <img
              src="https://ca.slack-edge.com/THQU1MGPN-U046N12M1A7-g799cff9e206-512"
              className="rounded-circle w-30 p-3 border border-warning card-img-top imgCard"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title text-center">Marcos Coronel</h5>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">Integrante</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
