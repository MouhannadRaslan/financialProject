import unlock from '../assets/unlock.jpg';

function AboutUnlock(){
    return(
        <>
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-12">
                        <h1 className="text-uppercase fw-bolder display-6">Unlock Your <br /> Business Potential</h1>
                    </div>
                    <div className="col-md-6">
                        <img src={unlock} alt="" className="img-fluid mt-4" />
                    </div>
                    <div className="col-md-6">
                        <div className='p-5'>
                            <h5 className='fw-bold mt-5'>Your Path to Business Excellence</h5>
                            <p className='lead mt-2'>Sample text. Click to select the Text Element.</p>
                            <h5 className='fw-bold mt-5'>Empowering Business Growth</h5>
                            <p className='lead mt-2'>Sample text. Click to select the Text Element.</p>
                            <h5 className='fw-bold mt-5'>Solutions for a Brighter Future</h5>
                            <p className='lead mt-2'>Sample text. Click to select the Text Element.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUnlock;