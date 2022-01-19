import { useState } from 'react/cjs/react.development'
import Do from './components/Do.js'

function DoList({tasks, delDo, checkStateChekbox, editTask}) {
           return (
        <div>
            {tasks.map((task) => <Do task={task} delDo={delDo} checkStateChekbox={checkStateChekbox} editTask={editTask}/>)}
        </div>
    )
}

export default DoList