import { useContext } from 'react';
import { WordsContext } from '../context/WordsProvider';

export default function useWords() {
  const {
    wordlist, setWordlist, randomWord, setRandomWord, wordTries, setWordTries,
  } = useContext(WordsContext);

  const spellChecker = (word) => {
    const regexRules = {
      a: '[a, á, ã, à, â]',
      e: '[e, é, ê, è]',
      i: '[i, í, ì, î]',
      o: '[o, ó, ô, ò, ô]',
      u: '[u, ú, ù, û]',
    };
    let wordRegex = word.toLowerCase();

    Object.keys(regexRules).forEach((key) => {
      wordRegex = wordRegex.replace(key, regexRules[key]);
    });

    wordRegex = RegExp(wordRegex);

    return wordlist.find((correctWord) => correctWord.match(wordRegex));
  };

  const tryNewWord = (word) => {
    setWordTries([...wordTries, spellChecker(word).toLowerCase()]);
  };

  const getTriedWord = (index) => wordTries[index];

  return {
    wordlist, setWordlist, randomWord, setRandomWord, tryNewWord, getTriedWord, spellChecker,
  };
}
