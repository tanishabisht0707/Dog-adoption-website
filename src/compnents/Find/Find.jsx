import React from "react";
import { Link } from "react-router-dom";
const FindDogs = () => {
  const array = [
    {
      key: 1,
      img: "https://wallpapers.com/images/hd/beautiful-dog-pictures-1920-x-1440-1tsk6mwwtypax458.jpg",
      Name: "Nimo",
      About: "1 Year Old",
      Gender: "female",
      link: "/Nimo",
    },
    {
      key: 2,
      img: "https://pikwizard.com/pw/small/a0a6295ec72c6d4f246c95b1a24c79a0.jpg",
      Name: "Gucci",
      About: "1 Year Old",
      Gender: "female",
      link: "/Gucci",
    },
    {
      key: 3,
      img: "https://pikwizard.com/pw/small/c530d2f2a8bb15c02b9083a91aa9297c.jpg",
      Name: "Google",
      About: "1 Year Old",
      Gender: "female",
      link: "/Google",
    },
    {
      key: 4,
      img: "https://burst.shopifycdn.com/photos/wise-pug-thinking-about-the-world.jpg?width=1000&format=pjpg&exif=0&iptc=0",
      Name: "Oreo",
      About: "1 Year Old",
      Gender: "female",
      link: "/Oreo",
    },
    {
      key: 5,
      img: "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*",
      Name: "Lui",
      About: "1 Year Old",
      Gender: "female",
      link: "/Lui",
    },
    {
      key: 6,
      img: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/62192599/1/?bust=1680725999",
      Name: "Bella",
      About: "1 Year Old",
      Gender: "female",
      link: "/Bella",
    },
    {
      key: 7,
      img: "https://hips.hearstapps.com/hmg-prod/images/close-up-portrait-of-a-happy-female-golden-royalty-free-image-902035988-1549986029.jpg",
      Name: "Shushi",
      About: "1 Year Old",
      Gender: "female",
      link: "/Shushi",
    },
    {
      key: 8,
      img: "https://images.squarespace-cdn.com/content/v1/5f48759535baa45c767263f5/cee5bbff-8766-4d82-9db6-b277542ab982/Guide_Dogs_Australia_Antony%27s_Guide_Dog_Ladrador_Brett_in_Victoria_looking_at_camera.jpg",
      Name: "Sheero",
      About: "1 Year Old",
      Gender: "female",
      link: "/Sheero",
    },
  ];

  return (
    <>
      <div className="finds">
        <div className="find-page-banner">
          <img
            src="https://i.guim.co.uk/img/media/6f10bed7ed64dd3e6a55ab6dfb21ec1550eccd50/292_0_2917_1750/master/2917.jpg?width=620&quality=85&auto=format&fit=max&s=6909775e60f8acea2caa18139da52a54"
            alt=""
          />
          <p>Find your next best friend</p>
        </div>

        <div className="cards">
          {array.map(({ key, img, About, Name, Gender, link }) => (
            <div key={key} className="card">
              <img src={img} alt="" className="" />

              <div className="info">
                <Link className="card-link" to={link}>
                  <span className="name">{Name}</span>
                  <span className="About"> {About}</span>
                  <span className="Gender">{Gender}</span>
                </Link>
              </div>
            </div>
          ))}
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

export default FindDogs;
