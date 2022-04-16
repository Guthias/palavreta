import { useContext } from 'react';
import { WordsContext } from '../context/WordsProvider';

export default function useWords() {
  const {
    wordlist, setWordlist, randomWord, setRandomWord, wordTries, setWordTries,
  } = useContext(WordsContext);

  const tryNewWord = (word) => {
    setWordTries([...wordTries, word]);
  };

  const getTriedWord = (index) => wordTries[index];

  return {
    wordlist, setWordlist, randomWord, setRandomWord, tryNewWord, getTriedWord,
  };
}
