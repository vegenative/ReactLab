import "./sideMenu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { Home } from "@material-ui/icons";

function SideMenu(){
  return (
    <div className="sideMenu my-class">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">Analitics</li>
            <li className="sidebarListItem">LogOut</li>
          
          <h3 className="sidebarTitle">Menu</h3>
          <nav>
          <li className="sidebarListItem">
            <Link className="link" to='/'> Home
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to='/info'> Info
            </Link>
          </li>
 
          </nav>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">User</li>
            <li className="sidebarListItem">Messages</li>
            <li className="sidebarListItem">Options</li>

          </ul>
        </div>
      </div>
      
    </div>

    )
  }

export default SideMenu;