import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="foot-logo">
        <span className=" foot-pow material-symbols-outlined">pets</span>
        <Link className=""> WarmShelter</Link>
      </div>

      <p>WarmShelter@2023.All Right Reserved</p>
      <div className="icons">
        <a href="https://instagram.com" target="blank">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
            alt=""
          />
        </a>
        <a href="https://Facbook.com" target="blank">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
            alt=""
          />
        </a>
        <a href="https://twitter.com" target="blank">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png"
            alt=""
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
