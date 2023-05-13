import FeaturedInfo from "../../FeaturedInfo/featuredInfo";
import React, { useState } from 'react';
import "./home.css"

function Home()
{
    const [fontSize, setFontSize] = useState(16);

    const handleFontSizeIncrease = () => {
        setFontSize(prevSize => prevSize + 2);
      };
    
      const handleFontSizeDecrease = () => {
        setFontSize(prevSize => prevSize - 2);
      };

    return (
    <div className="Home">
        <div>
            <p className="text" style={{ fontSize: `${fontSize}px` }}>Home</p>
            <p className="text" style={{ fontSize: `${fontSize}px` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo ligula, venenatis id est eu, auctor aliquam magna. Morbi ultrices accumsan neque, at dictum eros congue vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus nec erat ultrices, auctor velit accumsan, congue lectus. Morbi at elit feugiat, pharetra dui et, molestie diam. Nam ultricies mi sit amet porta ultrices. Aenean quis lorem odio. Morbi ut pharetra eros.
            
Aliquam erat volutpat. Sed luctus sed urna et sagittis. Duis maximus id metus non ultricies. Phasellus porttitor est ac finibus fringilla. Vivamus et quam ex. Donec et semper libero. Nullam at tellus a odio blandit molestie ut nec nunc. Duis consequat urna ligula, eget efficitur libero eleifend ac.</p>
            <button onClick={handleFontSizeIncrease}>Zwiększ czcionkę</button>
            <button onClick={handleFontSizeDecrease}>Zmniejsz czcionkę</button>
        </div>
    </div>

    )
}

export default Home;