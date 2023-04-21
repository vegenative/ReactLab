import React from "react";
import './Name'

function Name(props)
{
    return(
        <div className="h1Border">
            <h1>{props.name}</h1>
        </div>
    )
    
}

export default Name;