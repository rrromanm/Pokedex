import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const SocialsFooter = () => {
    function handleClickLinkedin() {
        window.open("https://www.linkedin.com/in/rrromanm", "_blank");
    }

    function handleClickGithub() {
        window.open("https://github.com/rrromanm", "_blank");
    }

    return (
        <div className="d-flex justify-content-center mt-5"> 
            <FontAwesomeIcon icon={faGithub} className="socials mx-2 fa-2x" onClick={handleClickGithub}/> 
            <FontAwesomeIcon icon={faLinkedin} className="socials mx-2 fa-2x" onClick={handleClickLinkedin}/>
        </div>
    );
}

export default SocialsFooter;
