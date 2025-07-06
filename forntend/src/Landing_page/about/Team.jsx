function Team() {
    return (
        <div className="container p-5 ">
            <div className="row   mt-3 mb-5 ">
                <h1 className="text-center">People</h1>
            </div>


            <div className="row   " style={{ lineHeight: "1.8", fontSize: "1.2rem" }} >
                <div className="col-6  text-center ">
                    <img src="media/images/nithinKamath.jpg" alt="image of nitin kamath" style={{ borderRadius: "100%", width: "60%" }} />

                    <h4 className="mt-5" >Nithin Kamath</h4>
                    <h6 className="text-muted ">Founder, CEO</h6>
                </div>
                <div className="col-6 text-muted  " style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="" style={{ textDecoration: "none" }}>Homepage</a>  / <a href="" style={{ textDecoration: "none" }}>TradingQnA </a>/ <a href="" style={{ textDecoration: "none" }}>Twitter</a></p>

                </div>
            </div>
        </div>
    );
}

export default Team;