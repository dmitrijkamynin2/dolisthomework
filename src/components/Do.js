import React from "react";
import "../style/style.css";

function Do({task}) {
    return(
        <div className="form" id={task.id}>
            <p>{task.title}</p>
        </div>
    )
}

export default Do