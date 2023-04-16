import React from "react";
import '../css/button.css'

export const Button = ({name}) => {
    return (
        <>
            <div className="main">
                {name}
            </div>
        </>
    );
}