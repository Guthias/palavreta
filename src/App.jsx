import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import WordBoard from './components/WordBoard';
import WordsProvider from './context/WordsProvider';

const PageContent = styled.div`
  background-color: #191919;
  height: 100vh;  
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

function App() {
  return (
    <WordsProvider>
      <PageContent>
        <Header />
        <WordBoard />
      </PageContent>
    </WordsProvider>
  );
}

export default App;
