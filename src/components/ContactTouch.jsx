function ContactTouch() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-6 border-end border-dark">
            <div className="p-5">
              <h1 className="fw-bolder display-4 text-uppercase">
                lets get in touch
              </h1>
              <p className="lead">
                Our efficiency and morale have never been higher.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5">
              <p className="lead">Got a question or query? Contact us today!</p>
              <h5 className="fw-bold">Address:</h5>
              <p className="lead">
                123 Business Street, Suite 456, City, State, ZIP Code
              </p>
              <h5 className="fw-bold">
                Address:{" "}
                <span className="lead">
                  123 Business Street, Suite 456, City, State, ZIP Code Phone:
                  (123) 456-7890
                </span>
              </h5>
              <h5 className="fw-bold">
                Email: <span className="lead">contact@yourcompany.com</span>
              </h5>
              <h5 className="fw-bold">
                Website: <span className="lead">www.yourcompany.com</span>
              </h5>
              <h5 className="fw-bold">
                Business Hours:{" "}
                <span className="lead">
                  Monday to Friday, 9:00 AM - 6:00 PM
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-md-12">
            <div className="p-5">
              <h1 className="fw-bolder display-4 text-center">
                Build a great bond with us together!
              </h1>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <form action="">
                    <div className="row mt-5 justify-content-center">
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Enter Your First Name"
                          className="rounded-0 form-control border-0 border-bottom border-dark"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Enter Your Last Email"
                          className="rounded-0 form-control border-0 border-bottom border-dark"
                        />
                      </div>
                      <div className="col-md-12">
                        <input type="email" placeholder="Enter Your Email" className="rounded-0 form-control border-0 border-bottom border-dark mt-5" />
                      </div>
                      <div className="col-md-12">
                        <textarea rows={10} placeholder="Enter Your Message" name="" className="rounded-0 form-control border-0 border-bottom border-dark mt-5" id=""></textarea>
                      </div>
                      <div className="col-md-4">
                        <a href="" className="btn btn-dark p-2 ps-4 pe-4 rounded-5 mt-5 w-100">SUBMIT</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactTouch;
