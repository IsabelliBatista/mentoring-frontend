import React from 'react';
import Meio from './components/Meio';
import Rodape from './components/Rodape';
import Topo from './components/Topo';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Topo/>
      <Meio/>
      <Rodape/>
      <Modal/>
    </div>
  );
}

export default App;
