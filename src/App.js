import React, {useState} from 'react';
import ReactDom from 'react-dom';
import Head from './components/Head.js'
import DoList from './DoList.js';

function App() {
  
  const [tasks, setTasks] = useState([]);

  function addDo({count, id}){
     setTasks(tasks.concat({title: count, id: id}));
  }


  return (
          <div>
            <Head addDo={addDo}/>
            <DoList tasks={tasks}/>
          </div>
          )
}

export default App;
