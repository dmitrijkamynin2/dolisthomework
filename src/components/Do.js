import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "../style/App.css";

function Do({task, delDo, checkStateChekbox, saveEdit}) {
    
    const [edit, setEdit] = useState();

    useEffect(() => {setEdit(task.title)}, [task.title]);

    function editChange(e) {
        setEdit(e.currentTarget.value);
        saveEdit(e.currentTarget.value, task.id);
    }

    function checkEnter(e) {
        if (e.key == 'Enter') {
        e.currentTarget.blur();
        }
    }

    return(
        <div className="do">
            <input type="checkbox" className="coldo col1" onChange={checkStateChekbox} checked={task.checked} id={task.id}/>
            <input className="coldo col2" onChange={editChange} value={edit} onKeyUp={checkEnter}></input>
            <p className="coldo col3">12/01/2022</p>
            <input className="coldo col4" type="button" value='del' onClick={delDo} id={task.id}/>
        </div>
    )
}

export default Do