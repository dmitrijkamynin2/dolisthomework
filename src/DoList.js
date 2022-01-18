import { useState } from 'react/cjs/react.development'
import Do from './components/Do.js'

function DoList({tasks, delDo, checkStateChekbox, saveEdit}) {
           return (
        <div>
            {tasks.map((task) => <Do task={task} delDo={delDo} checkStateChekbox={checkStateChekbox} saveEdit={saveEdit}/>)}
        </div>
    )
}

export default DoList