import Name from "../Name";
import Group from "../Group";
import Album from "../Album";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';


function Header()
{

    const handleColorChange = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        const elements = document.querySelectorAll(".my-class");
             elements.forEach((el) => {
            el.style.backgroundColor = randomColor;
        });
      };

    return (
    <div className="header my-class">
        <div className="headerwrapper">
            <div className="topLeft">
                <span className="logo"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcW3CxpH756b-Vus8HxhXV05IDg01sLFENaAYOadIJvz2y1ZgNdNPV57q8-oxNKtB5VfE&usqp=CAU"></img></span>
            </div>
            <div className="name">
                <span className="headerName"><Name name = "Paweł Woźniak"></Name></span>
                <span className="headerName"><Group group = "INMN4_PA2"></Group></span>
                <span className="headerName"><Album album = "40623"></Album></span>
            </div>
            <div className="topRight">
                <div className="headerIconsContainer">
                    <span className="icon"><FontAwesomeIcon icon={faUser}size="xl"/></span>
                    <span className="iconBadge">2</span>
                </div>
                <div className="headerIconsContainer">
                    <span className="icon"><FontAwesomeIcon icon={faEnvelope}size="xl"/></span>
                    <span className="iconBadge">2</span>
                </div>
                <div onClick={handleColorChange} className="headerIconsContainer">
                    <span className="icon"><FontAwesomeIcon  icon={faGear} size="xl"/></span>
                    <span className="iconBadge">2</span>
                </div>
            </div>
        </div>
    </div>

)}

export default Header;