import React from 'react';

function Pricing() {
    return ( 
        <div className="container mb-5 ">
            <div className="row ">
                <div className="col-4">
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted' >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}} >See pricing&nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="p-4 col border">
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and <br />direct mutual funds</p>
                        </div>
                        <div className="p-4 col border">
                             <h1 className='mb-4'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;