import FooterLogo from '../assets/footerLogo.png';

function Footer(){
    return(
        <>
            <div className="container-fluid bg-dark">
                <div className="row p-5">
                    <div className="col-md-1">
                        <div className=''>
                        <img src={FooterLogo} alt="" className="img-fluid ms-5" />
                        </div>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-md-4">
                        <div className='ms-5'>
                            <h4 className='text-uppercase text-light fw-light'>address</h4>
                            <p className='lead text-light mt-4'>123 Business Street, Suite 456, City, State, ZIP Code</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='ms-5'>
                            <h4 className='text-uppercase text-light fw-light'>contact us</h4>
                            <p className='lead text-light mt-4'>Phone: (123) 456-7890 <br />
                            Email: contact@yourcompany.com</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='ms-5'>
                            <h4 className='text-uppercase text-light fw-light'>Financial Wellness Center, resources for Support and Guidance</h4>
                            <p className='lead text-light mt-4'>Image from Freepik</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer ;