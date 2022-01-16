import { useState } from 'react/cjs/react.development'
import Do from './components/Do.js'

function DoList({tasks}) {
           return (
        <div>
            {tasks.map((task) => <Do task={task}/>)}
        </div>
    )
}

export default DoList