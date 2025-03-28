import React from "react";
import pokemonLogo from "../assets/img/pokemon-logo.png";
import pokeball from "../assets/img/pokeball.png";

const Header = () => {
    return (
        <>
            <div className="text-center">
                <img src={pokemonLogo} alt="Pokemon Logo"/>
            </div>
            <div className="custom-hr-container">
                <hr className="line" />
                <img src={pokeball} alt="Pokeball" className="hr-image"/>
                <hr className="line" />
            </div>
        </>
            
    );
}

export default Header;