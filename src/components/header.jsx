import React from "react";
import pokemonLogo from "../assets/img/pokemon-logo.png";
import pokeball from "../assets/img/pokeball.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <div className="text-center">
        <img
          src={pokemonLogo}
          alt="Pokemon Logo"
          className="pokemon-logo"
          onClick={handleClick}
        />
      </div>
      <div className="custom-hr-container">
        <hr className="line" />
        <img src={pokeball} alt="Pokeball" className="hr-image" />
        <hr className="line" />
      </div>
    </>
  );
};

export default Header;
