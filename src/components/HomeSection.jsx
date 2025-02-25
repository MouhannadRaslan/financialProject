import SectionImg from '../assets/section.jpg';
import img from '../assets/img.png';

function HomeSection(){
    return(
        <>
            <div className="container">
                <div className="row bg-light p-3 mb-3 border-0 border-bottom border-dark">
                    <div className="col-md-4">
                        <h4 className="fw-light text-center">Business Advisory</h4>
                    </div>
                    <div className="col-md-4">
                        <h4 className="fw-light text-center">Financial Consulting</h4>
                    </div>
                    <div className="col-md-4">
                        <h4 className="fw-light text-center">Strategic Advisory</h4>
                    </div>
                </div>
                <div className="row bg-light">
                    <div className="col-md-12">
                        <div>
                            <div className="row p-5">
                                <div className="col-md-4">
                                <img src={SectionImg} className='img-fluid' alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div>
                                        <h1 className='fw-bolder display-1 text-dark'>44k</h1>
                                        <h4 className='fw-normal'>Transform Your Business with Cutting-Edge Solutions</h4>
                                        <p className='lead'>With our expert team and cutting-edge technology, we provide the tools you need to thrive in a dynamic business environment.</p>
                                        <a href="" className='btn fw-bolder' style={{letterSpacing:"2px"}}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-12">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSection;