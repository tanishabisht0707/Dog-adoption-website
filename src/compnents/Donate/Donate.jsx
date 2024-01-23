import React from "react";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <>
  
      <div className="Donate-info">
        <div className="content">
          <h1>Donate To Our Animal Shelter</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo illo
            dicta tenetur doloremque dolore. Culpa et aperiam eius itaque
            nostrum laudantium quae debitis numquam. Aliquid ab accusantium.
          </p>
          <button className="Donatebtn">
            <Link to="/Form">Donate</Link>{" "}
          </button>
        </div>
        <div className="img-area">
          <img
            className="puppy-img"
            src="https://www.vhv.rs/file/max/36/361329_cute-dog-png.png"
            alt=""
          />
          <img
            className="puppy-back-img"
            src="https://live.templately.com/wp-content/uploads/2020/12/a0cabb5c-kitty-bg-600x585.png"
            alt=""
          />
        </div>
      </div>
      <div className="ContactBanner">
        <img
          src="https://media.istockphoto.com/id/1147987137/photo/cat-and-dog-over-white-banner.jpg?s=612x612&w=0&k=20&c=E3Mtq3p0spfM5FabPoEkd0TAOa5pvKIpZGMXWKuaz18="
          alt=""
        />
        <div className="elements">
          <p className="heading">Get In Touch With US</p>
          <p className="moreinfo">
            Want to get latest update on WramShelter <br /> then Join Our
            Platform.
          </p>
          <div className="singnupInput">
            <input type="Email" placeholder="Enter Email Address" />
            <button type="submit">SingUp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
