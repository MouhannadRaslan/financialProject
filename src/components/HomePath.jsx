import img1 from '../assets/contact1.jpg';
import img2 from '../assets/contact2.jpg';
import service from '../assets/service.png';

function HomePath(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={img1} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className='p-5'>
                            <h1 className='fw-light display-6 mb-5'>Your Path to Business <br />  Excellence</h1>
                            <p className='lead mt-5'>From cloud computing to cybersecurity, our services are designed to meet the unique needs of your business, ensuring seamless integration and maximum ROI.</p>
                            <a href="" className='btn btn-dark rounded-5 p-2 mt-4 ps-5 pe-5'>OUR CONTACT</a>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className='p-5'>
                            <h1 className='fw-light display-6 mb-5'>Innovate. Transform. Succeed.</h1>
                            <p className='lead mt-5'>From cloud computing to cybersecurity, our services are designed to meet the unique needs of your business, ensuring seamless integration and maximum ROI.</p>
                            <a href="" className='btn btn-dark rounded-5 p-2 mt-4 ps-5 pe-5'>OUR CONTACT</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={img2} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-12">
                        <img src={service} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePath;