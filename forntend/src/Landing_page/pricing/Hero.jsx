import React from 'react';

function Hero() {
    return (
        <div className="container ">
            <div className="row  p-5 mt-5 border-bottom text-center">
                <h1 style={{ fontSize: "3.4rem" }}>Charges</h1>
                <h3 className='text-muted  mt-3'>List of all charges and taxes</h3>
            </div>

            <div className="row mt-5  text-center   " style={{ lineHeight: "1.8", fontSize: "1.2rem" }} >
                <div className="col-4 ">
                    <img  src="media/images/pricingEquity.svg" alt="" />
                    <h1 className='fs-2 mb-3' >Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 ">
                    <img src="media/images/intradayTrades.svg" alt="" />
                    <h1 className='fs-2 mb-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 ">
                       <img src="media/images/pricing0.svg" alt="" />
                    <h1 className='fs-2 mb-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                </div>
            </div>
        </div>
    );
}

export default Hero;