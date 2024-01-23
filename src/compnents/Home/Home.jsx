import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="home-banner">
          <div className="content">
            <h1>Looking For Love?</h1>
            <h2>Adopt a Pet</h2>
            <p>
              Your on adoption can't change the world but may be it change the
              world for someone.
            </p>
            <Link>Adopt Now</Link>
          </div>
          <div className="img">
            <img
              src="https://images.squarespace-cdn.com/content/v1/600b4d9cccfab37ef35cf5c2/7f99b7f6-f6cc-48a4-a9ee-2f5946fe89a1/bark-bark-corp-page-beanie-dog.png"
              alt=""
            />
          </div>
        </div>
        <div className="pets-banner">
          <div className="content">
            <h1>Adopt Dont'buy</h1>
            <p>
              As we humans want to be loved and find companionship in our family
              and friends, why should we take away that right from all these
              homeless, abandoned animals. They were treated wrongly, and not
              given this right to happiness and by giving them some space in our
              hearts and homes, we are giving them what they deserve!
            </p>
            <div className="cards-area">
              <div className="box">
                <Link to='/FindDogs'>
                <span className="material-symbols-outlined">search</span>
                <h2>Find A Dog</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veritatis, sint.
                </p>
                </Link>
              </div>
              <div className="box">
               <Link to='/Donate'>
               <span className="material-symbols-outlined">savings</span>{" "}
                <h2>Donate</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veritatis, sint.
                </p>
               </Link>
              </div>
              <div className="box">
                <Link to='/Feeding'>
                <span className="material-symbols-outlined">grocery</span>{" "}
                <h2>Apetite</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veritatis, sint.
                </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="video">
          <div className="heading">
            <span className="material-symbols-outlined">pets</span>
            <h1>Why  we need to adopt <br /> a Animlas</h1>
          </div>
          <iframe width="400" height="230" src="https://www.youtube.com/embed/k9aHAZWhDIs"    allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
