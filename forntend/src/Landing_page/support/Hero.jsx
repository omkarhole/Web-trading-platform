import React from 'react';

function Hero() {
    return (
        <section className="container-fluid " id='supportHero'>
            <div className=" p-5 " id="supportWrapper">
                <h3>Support Portal</h3>
                <a style={{ textDecoration: "white underline", color: "white", fontSize: "25px" }} href="">Track tickets</a>
            </div>
            <div className=" row m-4 p-3 ">
                <div className="col-1 "></div>
                <div id="supportCol" className="col-5 mb-5 pb-5 ">
                    <h2>Search for an answer or browse help topics to create a ticket</h2>
                    <input id="search-text" type="text" className="form-control typeahead" autocomplete="off" placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..." />

                    <a className='fs-4  p-2 ' href="">Track account opening</a>
                    <a className='fs-4  p-3' href="" >Track segment activation</a>
                    <a className='fs-4  pl-2 pr-4' href="">Intraday margins</a>
                    <a className='fs-4  p-3' href="">kite user manual</a>

                </div>
                <div style={{ lineHeight: "2", paddingLeft: "79px",paddingTop:"25px" }} id="supportCol" className="col-6   ">
                    <h2 className='p-3' >Featured</h2>

                    <li><a className=' fs-4' href="">Surveillance measure on scrips-June 2025</a><br />
                    </li>
                    <li> <a className=' fs-4' href="">Rights Entitlements listing in June 2025</a>
                    </li>
                </div>
            </div>
        </section>
    );
}

export default Hero;