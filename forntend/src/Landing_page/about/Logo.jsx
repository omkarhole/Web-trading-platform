
//build by me basic but rop down feature is not present .

// function Logo() {
//     return (
//         <div className="container  p-5 mt-5  ">
//             <div className="row text-center ">
//                 <div className="col-4  ">
//                     <img src="https://zerodha.com/static/images/Nikhil.jpg" style={{borderRadius:"100%",width:"70%"}} alt="nikhil" />
//                      <h3 className="mt-5" >Nikhil Kamath</h3>
//                     <h5 className="text-muted ">Founder, CEO</h5>
                    
//                 </div>
//                 <div className="col-4">
//                     <img src="https://zerodha.com/static/images/Kailash.jpg" style={{borderRadius:"100%",width:"70%"}} alt="" />
//                  <h3 className="mt-5" >Dr. Kailash Nadh</h3>
//                     <h5 className="text-muted ">CTO</h5>
//                 </div>
//                 <div className="col-4">
//                     <img src="https://zerodha.com/static/images/Venu.jpg" style={{borderRadius:"100%",width:"70%"}} alt="" />
//                   <h3 className="mt-5" >Venu Madhav</h3>
//                     <h5 className="text-muted ">COO</h5>
//                 </div>
//             </div>
//         <div className="row text-center mt-5 pt-5 ">
//                 <div className="col-4  ">
//                     <img src="https://zerodha.com/static/images/Hanan.jpg" style={{borderRadius:"100%",width:"70%"}} alt="nikhil" />
//                       <h3 className="mt-5" >Hanan Delvi</h3>
//                     <h5 className="text-muted ">CCO</h5>
//                 </div>
//                 <div className="col-4">
//                     <img src="https://zerodha.com/static/images/Seema.jpg" style={{borderRadius:"100%",width:"70%"}} alt="" />
//                   <h3 className="mt-5" >Seema Patil</h3>
//                     <h5 className="text-muted ">Director</h5>
//                 </div>
//                 <div className="col-4">
//                     <img src="https://zerodha.com/static/images/karthik.jpg" style={{borderRadius:"100%",width:"70%"}} alt="" />
//                   <h3 className="mt-5" >Karthik Rangappa</h3>
//                     <h5 className="text-muted ">Chief of Education</h5>
//                 </div>
//             </div>
//              <div className="row text-center mt-5 pt-5 ">
//                 <div className="col-4  ">
//                     <img src="https://zerodha.com/static/images/Austin.jpg" style={{borderRadius:"100%",width:"70%"}} alt="nikhil" />
//                       <h3 className="mt-5" >Austin Prakesh</h3>
//                     <h5 className="text-muted ">Director Strategy</h5>
//                 </div>
              
//             </div>
//         </div>
//       );
// }
// export default Logo; 




//-----------------------------------------------------------------------------------------------------------------------------


//taken from chat gpt to use drop down feature it is  easy .
import React, { useState } from 'react';

const teamMembers = [
  {
    name: "Nikhil Kamath",
    title: "Founder, CEO",
    image: "https://zerodha.com/static/images/Nikhil.jpg",
    bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
  },
  {
    name: "Dr. Kailash Nadh",
    title: "CTO",
    image: "https://zerodha.com/static/images/Kailash.jpg",
    bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
  },
  {
    name: "Venu Madhav",
    title: "COO",
    image: "https://zerodha.com/static/images/Venu.jpg",
    bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."
  },
  {
    name: "Hanan Delvi",
    title: "CCO",
    image: "https://zerodha.com/static/images/Hanan.jpg",
    bio: "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time."
  },
  {
    name: "Seema Patil",
    title: "Director",
    image: "https://zerodha.com/static/images/Seema.jpg",
    bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."
  },
  {
    name: "Karthik Rangappa",
    title: "Chief of Education",
    image: "https://zerodha.com/static/images/karthik.jpg",
    bio: "Karthik Guru Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
  },
  {
    name: "Austin Prakesh",
    title: "Director Strategy",
    image: "https://zerodha.com/static/images/Austin.jpg",
    bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."
  }
];

function MemberCard({ name, title, image, bio }) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="col-md-4 text-center mb-5">
      <img
        src={image}
        alt={name}
        style={{ borderRadius: "100%", width: "70%" }}
        className="mb-3"
      />
      <h3 className="mt-3">{name}</h3>
      <h5 className="text-muted">{title}</h5>
      <button
        className="btn  text-decoration-none mt-2" onClick={() => setShowBio(!showBio)}>Bio {showBio ? "▲" : "▼"}
      </button>
      {showBio && ( <p className=" mt-2 "  style={{ lineHeight:"1.4", fontSize:"1.2rem"}} >{bio}</p>)}
    </div>
  );
}

function Logo() {
  return (
    <div className="container mt-5">
      <div className="row">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Logo;
