function RightSection({imageUrl, productName, productDescription, learnMore}) {
    return ( 
      <div className="container pt-5 mt-5">
        
        <div className="row ">
               <div className="col-6 pt-5 mt-5 ">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                     <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            
            
                <div className="col-6 ">
                     <img src={imageUrl}  />
                 </div>
           
          
         </div>
        
       
      </div>
     );
}

export default RightSection;