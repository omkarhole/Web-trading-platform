function Universe() {
    return (
        <div className="container pt-5 mt-5">

            <div className="row text-center ">

                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3 mt-5">
                    <img style={{height:"55px"}} src='media/images/zerodhaFundhouse.png' />
                    <p className="text-small text-muted">Our asset management venture</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img style={{height:"40px"}} src='media/images/sensibullLogo.svg' />
                    <p className="text-small text-muted">Options trading platform 
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img style={{height:"55px"}} src='https://zerodha.com/static/images/partners/tijori.svg' />
                    <p className="text-small text-muted">Investment research platform</p>
                </div>
                


                    <div className="col-4 p-3 mt-5">
                    <img style={{height:"55px"}} src='media/images/streakLogo.png' />
                    <p className="text-small text-muted">Our asset management venture</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img style={{height:"55px"}} src='media/images/smallcaseLogo.png' />
                    <p className="text-small text-muted">Options trading platform 
                    </p>
                </div>

                <div className="col-4 p-3 mt-5 ">
                    <img style={{height:"55px"}} src='media/images/dittoLogo.png' />
                    <p className="text-small text-muted">Investment research platform</p>
                    
                </div>
                <div className="text-center mt-5"> 
                    <button className='mt-3 p-2 btn btn-primary fs-5 mb-5' style={{width:"17%"}}>Sign up for free</button>
                 </div>

            </div>


        </div>





    );
}

export default Universe;