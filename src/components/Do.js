import React from "react";
import "../style/style.css";

function Do({task, delDo}) {
    return(
        <div className="form">
            <p>{task.title}</p>
            <input type="button" onClick={delDo}  id={task.id}></input>
        </div>
    )
}

export default Do