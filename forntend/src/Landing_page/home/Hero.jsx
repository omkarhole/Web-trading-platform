import React from 'react';
function Hero() {
    return ( 
        <div className='Container p-5 mb-5'>
            <div className="row text-center">
                <div className="col ">
                    <img src='media/images/homeHero.png' alt='Home image'  style={{ width:"65%"}} className='mb-5' />
                    <h1 className='mt-5 mb-3'>Invest in everything</h1>
                    <p className='fs-5 mt-2.5 text-muted' >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
                    <button className='mt-3 p-2 btn btn-primary fs-5 mb-5' style={{width:"15%"}}>Sign up for free</button>
                </div>
            </div>

        </div>
     );
}

export default Hero;