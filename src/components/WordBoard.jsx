import React, { useEffect } from 'react';
import styled from 'styled-components';
import useWords from '../hooks/useWords';
import BoardRow from './BoardRow';

const Board = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-direction: column;
`;

export default function WordBoard() {
  const { wordlist, setRandomWord } = useWords();

  useEffect(() => {
    const createRandomWord = () => {
      const RANDOM_INDEX = Math.round(Math.random() * wordlist.length);
      setRandomWord(wordlist[RANDOM_INDEX]);
    };
    createRandomWord();
  }, []);

  return (
    <Board>
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
    </Board>
  );
}
