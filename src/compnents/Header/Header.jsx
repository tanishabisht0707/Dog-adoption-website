import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  return (
   <>
   <div className="Navbar">
    <div className="logo">
    <span className="logoPow  material-symbols-outlined">pets</span>
    <p>WarmShelter</p>
    </div>
     <nav className="links" >
      <NavLink to='/' className='Home' >Home</NavLink>
      <NavLink to='/FindDogs' className='FindDogs'>AdoptPets</NavLink>
      <NavLink to='/Feeding' className='Feeding' >Feeding</NavLink>
      <NavLink to='/Donate' className='donate'>donate</NavLink>
      <NavLink to='/Contact' className='Contace' >Contact</NavLink>
     </nav>
   </div>
   </>
  );
};

export default Header;
