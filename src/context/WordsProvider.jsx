import React, { createContext, useState, useMemo } from 'react';
import { node } from 'prop-types';
import wordList from '../data/wordlist';

export const WordsContext = createContext();

export default function WordsProvider({ children }) {
  const [wordlist, setWordlist] = useState([...wordList]);
  const [randomWord, setRandomWord] = useState();

  const providerValues = useMemo(() => (
    {
      wordlist, setWordlist, randomWord, setRandomWord,
    }
  ));

  return (
    <WordsContext.Provider value={providerValues}>
      { children }
    </WordsContext.Provider>
  );
}

WordsProvider.propTypes = {
  children: node.isRequired,
};
