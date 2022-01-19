import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "../style/App.css";

function Do({task, delDo, checkStateChekbox, editTask}) {

    const [checkFocusTask, setCheckFocusTask] = useState(true)
    
    const refInput = React.createRef();

    function focusTask(e) {
        if (e.button == 0){
            setCheckFocusTask(false);
        }
    }

    function unFocusTask() {
        setCheckFocusTask(true);
    }

    function chekEnterOrEsc(e) {
        if (e.key == 'Escape') {
            unFocusTask();
        } else if (e.key == 'Enter') {
            editTask(refInput.current.value, refInput.current.id);
            unFocusTask();
        }
    }

    useEffect(() => {if (checkFocusTask == false) {refInput.current.focus()}},[checkFocusTask])

    return(
        <div className="do">
            <input type="checkbox" className="coldo col1" onChange={checkStateChekbox} checked={task.checked} id={task.id}/>
            {
            checkFocusTask?
                <p className="coldo col2" onMouseDown={focusTask}>{task.title}</p>:
                <input ref={refInput} onBlur={unFocusTask} onKeyUp={chekEnterOrEsc} className="coldo col2" defaultValue={task.title} id={task.id}></input>
            }
            <p className="coldo col3">12/01/2022</p>
            <input className="coldo col4" type="button" value='del' onClick={delDo} id={task.id}/>
        </div>
    )
}

export default Do