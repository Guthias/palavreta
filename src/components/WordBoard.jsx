import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import useWords from '../hooks/useWords';
import BoardRow from './BoardRow';
import WordInput from './WordInput';
import useRanking from '../hooks/useRanking';
import useWordGame from '../hooks/useWordGame';

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
  const { startNewGame, wordGame } = useWordGame();
  const { addValueOnRanking } = useRanking();
  const MAX_TRIES = 6;

  useEffect(() => {
    startNewGame();
  }, []);

  useEffect(() => {
    const verifyGameStatus = () => {
      if (wordGame.tries.length === MAX_TRIES && wordGame.tries[5] !== randomWord) {
        addValueOnRanking(wordGame.tries);
        // setGameStatus('lose');
      } else if (wordGame.tries.includes(randomWord)) {
        addValueOnRanking(wordGame.tries);
        // setGameStatus('win');
      }
    };
    verifyGameStatus();
  }, [wordGame.tries]);

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
