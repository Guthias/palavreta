import React from 'react';
import styled from 'styled-components';
import WordInput from './components/WordInput';

const Div = styled.div`
  background-color: #191919;
  height: 100vh;  
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Div>
      <WordInput />
    </Div>
  );
}

export default App;
