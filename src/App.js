import React from 'react';
import ReactDom from 'react-dom';
import Do from './components/Do.js'

function App(e) {
  const out = Do(e);
  ReactDom.render(out, document.getElementById('content'))
}

export default App;
