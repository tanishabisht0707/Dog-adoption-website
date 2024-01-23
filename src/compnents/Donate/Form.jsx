import React from "react";

const Form = () => {
  return (
    <div>
      
      <div className="donateform">
        <h1>Donate and give a life a warm shelter</h1>
        <div className="price">
          <div className="forms">
            <h2>Rs.500</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
              sequi illum illo quia nobis?
            </p>
            <button>$ Donate</button>
          </div>
          <div className="forms">
            <h2>Rs.300</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
              sequi illum illo quia nobis?
            </p>
            <button>$ Donate</button>
          </div>
          <div className="forms">
            <h2>Rs.900</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
              sequi illum illo quia nobis?
            </p>
            <button>$ Donate</button>
          </div>
        </div>
      </div>
      
      <div className="ContactBanner">

        <img src="https://media.istockphoto.com/id/1147987137/photo/cat-and-dog-over-white-banner.jpg?s=612x612&w=0&k=20&c=E3Mtq3p0spfM5FabPoEkd0TAOa5pvKIpZGMXWKuaz18=" alt="" />
        <div className="elements">
          <p className="heading">Get In Touch With US</p>
          <p className="moreinfo">Want to get latest update on WramShelter <br /> then Join Our Platform.</p>
          <div className="singnupInput">
            <input type="Email" placeholder="Enter Email Address"  />
            <button type="submit">SingUp</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Form;
