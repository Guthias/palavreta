import React from 'react';
import styled from 'styled-components';
import WordBoard from './components/WordBoard';
import WordInput from './components/WordInput';
import WordsProvider from './context/WordsProvider';

const Div = styled.div`
  background-color: #191919;
  height: 100vh;  
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <WordsProvider>
      <Div>
        <WordBoard />
        <WordInput />
      </Div>
    </WordsProvider>
  );
}

export default App;
