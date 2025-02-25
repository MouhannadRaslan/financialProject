import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';


function HomeSupport(){
    return(
        <>
            <div className="container">
                <div className="row bg-light p-5 border-0 border-bottom border-top border-dark mb-5">
                    <div className="col-md-12">
                        <div className="row p-5 justify-content-center">
                            <div className="col-md-4">
                                <div className='w-75'>
                                    <img src={icon1} alt="" className="img-fluid w-25" />
                                    <h4 className='fw-bold text-dark h5 mt-4'>Financial Support</h4>
                                    <p className="lead text-dark">Effective communication within an organization is a cornerstone of business success.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='w-75'>
                                    <img src={icon2} alt="" className="img-fluid w-25" />
                                    <h4 className='fw-bold text-dark h5 mt-4'>Your Guide to Support</h4>
                                    <p className="lead text-dark">Effective communication within an organization is a cornerstone of business success.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='w-75'>
                                    <img src={icon3} alt="" className="img-fluid w-25" />
                                    <h4 className='fw-bold text-dark h5 mt-4'>Track your refund</h4>
                                    <p className="lead text-dark">Effective communication within an organization is a cornerstone of business success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSupport;