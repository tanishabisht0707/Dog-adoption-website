import React from "react";

const Shushi = () => {
  return (
    <div>
   
      <div className="Aboutnimo">
        <div className="NimoImg">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/close-up-portrait-of-a-happy-female-golden-royalty-free-image-902035988-1549986029.jpg"
            alt=""
          />
        </div>
        <div className="NimoInfo">
          <h1>Hii Iam Shushi</h1>
          <p className="aboutme">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nemo laboriosam ipsa, autem, quae quaerat perspiciatis animi fuga
            placeat tenetur harum mollitia atque quos! Quos voluptates ab
            tenetur soluta vitae dolor. Voluptate maiores dicta libero
            accusamus! A debitis, tempora eveniet aperiam ea laboriosam possimus
            dolorem rem nisi fugiat modi suscipit.
          </p>
          <div className="moreinfo">
            <button className="Gender"> Gender : female</button>
            <button className="color">Color : Brown</button>
            <button className="age"> Age : 1 year</button>
          </div>
          <button>Adopt Now</button>
        </div>
      </div>
  
    </div>
  );
};

export default Shushi;
