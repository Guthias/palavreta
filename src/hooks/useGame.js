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

  const verifyGameStatus = () => {
    const MAX_TRIES = 6;
    if (wordTries.length === MAX_TRIES && wordTries[5] !== randomWord) {
      setGameStatus('lose');
    } else if (wordTries.includes(randomWord)) {
      setGameStatus('win');
    }
  };

  return {
    startNewGame,
    verifyGameStatus,
    wordTries,
    gameStatus,
    randomWord,
  };
}
