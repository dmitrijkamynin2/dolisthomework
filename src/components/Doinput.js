import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "../style/App.css";

function Doinput({checkFocusTask, exitEdit}) {
    
    function unFocus() {
        exitEdit();
    }
    
    if (checkFocusTask) {
    return(
        <input onBlur={unFocus}></input>
    )
    } else {
        return null
    }
}

export default Doinput