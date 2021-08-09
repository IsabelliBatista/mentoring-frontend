import React from 'react';
import Button from './components/Button/index';
import Menu from './components/Menu/index';
import Container from './components/Container/index';

function App() {
  return (
    <div className="App">
      <Container>
      <Menu></Menu>
      <Button></Button>
      </Container>
    </div>
  );
}

export default App;
