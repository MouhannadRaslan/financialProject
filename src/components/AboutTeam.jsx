import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

function AboutTeam() {
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row p-5 ms-3">
          <div className="col-md-12 ms-5">
            <div className="p-5 ms-5">
              <h1 className="fw-bold display-4">OUR TEAM</h1>
              <p className="lead">
                Ut enim ad minim veniam, quis nostrud exercitation <br />{" "}
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5 p-5">
          <div className="col-md-3">
            <img src={team1} alt="" className="img-fluid w-75" />
            <h4 className="fw-light mt-3">Bob Brown</h4>
            <h5 className="fw-bold mt-3">creative leader</h5>
            <p className="lead">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
          </div>
          <div className="col-md-3">
            <img src={team2} alt="" className="img-fluid w-75" />
            <h4 className="fw-light mt-3">Bob Brown</h4>
            <h5 className="fw-bold mt-3">creative leader</h5>
            <p className="lead">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
          </div>
          <div className="col-md-3">
            <img src={team3} alt="" className="img-fluid w-75" />
            <h4 className="fw-light mt-3">Bob Brown</h4>
            <h5 className="fw-bold mt-3">creative leader</h5>
            <p className="lead">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTeam;
