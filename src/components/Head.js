import React, {useState} from "react";
import App from '../App.js'
import DoList from "../DoList.js";

function Head({addDo}) {
    const [count, setCount] = useState('');
    const [id, setId] = useState(1);

    function editChange(e) {
        setCount(e.currentTarget.value);
    }

    function chekEnter(e) {
        if (e.key == 'Enter') {
            alert(count);
            addDo({count, id});
            e.currentTarget.value = '';
            setId(id + 1);
        }
    }

    return(
        <div>
            <input onChange={editChange} onKeyUp={chekEnter}/>
        </div>
    )
}

export default Head 