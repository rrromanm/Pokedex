import react, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="sidebar-toggle">
                <FontAwesomeIcon className="text-dark" icon={faBars} />
            </button>
            <nav className={`sidebar-nav ${isOpen ? 'open' : ''}`}>
                <ul className='pt-5'>
                    <li><FontAwesomeIcon icon={faHome} className='mx-2'/><a href="#home">Pokedex</a></li>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} className='mx-2'/><a href="search">Search</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;