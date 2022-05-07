import { useContext } from 'react';
import { WordsContext } from '../context/WordsProvider';
import { TRY_NEW_WORD, START_NEW_GAME } from '../types/actionTypes';

export default function useWordGame() {
  const { wordGame, dispatch, wordList } = useContext(WordsContext);

  const startNewGame = () => {
    const RANDOM_INDEX = Math.round(Math.random() * wordList.length);
    const answer = wordList[RANDOM_INDEX];

    return {
      type: TRY_NEW_WORD,
      payload: { answer },
    };
  };

  const tryNewWord = (triedWord) => ({
    type: START_NEW_GAME,
    payload: { triedWord },
  });

  return {
    wordGame, dispatch, startNewGame, tryNewWord,
  };
}
