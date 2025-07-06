import React from 'react';
function Stats() {
    return ( 
      <div className="container mt-5">
        <div className="row">
            <div className="col-6">
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                <h2 className='fs-4 mb-3'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores <br />of equity investments and contribute to 15% of daily retail exchange <br />volumes in India.</p>

                <h2 className='fs-4 mb-3'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications.<br /> High quality apps that you use at your pace, the way you like. <br />Our philosophies.</p>

                <h2 className='fs-4 mb-3'>The Zerodha universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech<br /> startups offer you tailored services specific to your needs.</p>

                <h2 className='fs-4 mb-3'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate<br /> transactions, but actively help you do better with your money.</p>
            </div>
            <div className="col-6 p-5">
                <img src="media\images\ecosystem.png" alt="ecosystem img" style={{width:"95%"}} />
                <div className='text-center p-5'>
                    <a className='mx-5' style={{textDecoration:"none"}} href="">Explore our products &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                    <a href="" style={{textDecoration:"none"}}>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
      </div>
     );
}

export default Stats;