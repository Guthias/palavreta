import { useContext } from 'react';
import { WordsContext } from '../context/WordsProvider';
import { TRY_NEW_WORD, START_NEW_GAME } from '../types/actionTypes';

export default function useWordGame() {
  const { wordGame, dispatch, wordlist } = useContext(WordsContext);

  const spellChecker = (word) => {
    const regexRules = {
      a: '[a, á, ã, à, â]',
      c: '[c, ç]',
      e: '[e, é, ê, è]',
      i: '[i, í, ì, î]',
      o: '[o, ó, ô, ò, ô]',
      u: '[u, ú, ù, û]',
    };
    let wordRegex = word.toLowerCase();

    Object.keys(regexRules).forEach((key) => {
      wordRegex = wordRegex.replace(RegExp(key, 'g'), regexRules[key]);
    });

    wordRegex = RegExp(wordRegex, 'm');

    return wordlist.find((correctWord) => correctWord.match(wordRegex));
  };

  const startNewGame = () => {
    const RANDOM_INDEX = Math.round(Math.random() * wordlist.length);
    const answer = wordlist[RANDOM_INDEX];

    dispatch({
      type: START_NEW_GAME,
      payload: { answer },
    });
  };

  const tryNewWord = (triedWord) => {
    dispatch({
      type: TRY_NEW_WORD,
      payload: { triedWord: spellChecker(triedWord) },
    });
  };

  return {
    wordGame, startNewGame, tryNewWord,
  };
}
