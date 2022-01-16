import React, {useState} from "react";
import App from '../App.js'

function Head() {
    const [count, setCount] = useState('');

    function intValue(e) {
        setCount(e.currentTarget.value);
    }

    function chekEnter(e) {
        if (e.key == 'Enter') {
            alert(count);
            App(count);
            e.currentTarget.value = "";
        }
    }

    return(
        <div>
            <input value={count} onChange={intValue} onKeyUp={chekEnter}></input>
        </div>
    )
}

export default Head 