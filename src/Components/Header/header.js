import Name from "../Name";
import Group from "../Group";
import Album from "../Album";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faGear } from '@fortawesome/free-solid-svg-icons';

function Header()
{
    return (
    <div className="header">
        <div className="headerwrapper">
            <div className="topLeft">
                <span class="logo"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcW3CxpH756b-Vus8HxhXV05IDg01sLFENaAYOadIJvz2y1ZgNdNPV57q8-oxNKtB5VfE&usqp=CAU"></img></span>
            </div>
            <div class="name">
                <span className="headerName"><Name name = "Paweł Woźniak"></Name></span>
                <span className="headerName"><Group group = "INMN4_PA2"></Group></span>
                <span className="headerName"><Album album = "40623"></Album></span>
            </div>
            <div className="topRight">
                <div className="headerIconsContainer">
                    <span class="icon"><FontAwesomeIcon icon={faUser}size="xl"/></span>
                    <span class="iconBadge">2</span>
                </div>
                <div className="headerIconsContainer">
                    <span class="icon"><FontAwesomeIcon icon={faEnvelope}size="xl"/></span>
                    <span class="iconBadge">2</span>
                </div>
                <div className="headerIconsContainer">
                    <span class="icon"><FontAwesomeIcon icon={faGear} size="xl"/></span>
                    <span class="iconBadge">2</span>
                </div>
            </div>
        </div>
    </div>

)}

export default Header;