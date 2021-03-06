import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import useWords from '../hooks/useWords';
import useGame from '../hooks/useGame';
import BoardRow from './BoardRow';
import WordInput from './WordInput';
import useRanking from '../hooks/useRanking';

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
  const { getTriedWord, randomWord } = useWords();
  const { startNewGame, wordTries, setGameStatus } = useGame();
  const { addValueOnRanking } = useRanking();
  const MAX_TRIES = 6;

  useEffect(() => {
    startNewGame();
  }, []);

  useEffect(() => {
    const verifyGameStatus = () => {
      if (wordTries.length === MAX_TRIES && wordTries[5] !== randomWord) {
        addValueOnRanking(wordTries);
        setGameStatus('lose');
      } else if (wordTries.includes(randomWord)) {
        addValueOnRanking(wordTries);
        setGameStatus('win');
      }
    };
    verifyGameStatus();
  }, [wordTries]);

  return (
    <BoardArea>
      <Board>
        {
          Array.from(Array(MAX_TRIES).keys()).map((_, index) => (
            <BoardRow word={getTriedWord(index)} key={nanoid()} />
          ))
        }
      </Board>
      <WordInput />
    </BoardArea>
  );
}
