import React from "react";
import "../style/style.css";

function Do(e) {
    const text = e;
    return(
        <div className="form">
            <p>{text}</p>
        </div>
    )
}

export default Do