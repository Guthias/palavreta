import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import useWords from '../hooks/useWords';
import useGame from '../hooks/useGame';
import BoardRow from './BoardRow';
import WordInput from './WordInput';

const BoardArea = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Board = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-direction: column;
`;

export default function WordBoard() {
  const { getTriedWord } = useWords();
  const { startNewGame, wordTries, verifyGameStatus } = useGame();
  const NUMBER_OF_TRIES = 6;

  useEffect(() => {
    startNewGame();
  }, []);

  useEffect(() => {
    verifyGameStatus();
  }, [wordTries]);

  return (
    <BoardArea>
      <Board>
        {
          Array.from(Array(NUMBER_OF_TRIES).keys()).map((_, index) => (
            <BoardRow word={getTriedWord(index)} key={nanoid()} />
          ))
        }
      </Board>
      <WordInput />
    </BoardArea>
  );
}
