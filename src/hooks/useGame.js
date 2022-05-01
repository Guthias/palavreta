import { useContext } from 'react';
import { WordsContext } from '../context/WordsProvider';

export default function useGame() {
  const {
    wordlist, setGameStatus, setRandomWord, setWordTries, wordTries, randomWord, gameStatus,
  } = useContext(WordsContext);

  const startNewGame = () => {
    const RANDOM_INDEX = Math.round(Math.random() * wordlist.length);
    setWordTries([]);
    setRandomWord(wordlist[RANDOM_INDEX]);
    setGameStatus('in game');
  };

  return {
    startNewGame,
    setGameStatus,
    wordTries,
    gameStatus,
    randomWord,
  };
}
