function HomeBanner() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner1 d-flex align-items-center p-5">
                            <div className="p-5">
                                <h1 className="fw-bolder text-light display-1">Your Trusted Partner <br /> in Financial Success</h1>
                                <p className="lead text-light">With our expert team and cutting-edge technology, we provide <br /> the tools you need to thrive in a dynamic business environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner2 d-flex align-items-center p-5">
                            <div className="p-5">
                                <h1 className="fw-bolder text-light display-1">Your Trusted Partner <br /> in Financial Success</h1>
                                <p className="lead text-light">With our expert team and cutting-edge technology, we provide <br /> the tools you need to thrive in a dynamic business environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner3 d-flex align-items-center p-5">
                            <div className="p-5">
                                <h1 className="fw-bolder text-light display-1">Your Trusted Partner <br /> in Financial Success</h1>
                                <p className="lead text-light">With our expert team and cutting-edge technology, we provide <br /> the tools you need to thrive in a dynamic business environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{height:"150px"}}></div>
    </>
  );
}

export default HomeBanner;
