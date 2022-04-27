import React, {
  createContext, useState, useMemo, useContext,
} from 'react';
import { node } from 'prop-types';
import wordList from '../data/wordlist';

export const WordsContext = createContext();

export default function WordsProvider({ children }) {
  const [wordlist, setWordlist] = useState([...wordList]);
  const [randomWord, setRandomWord] = useState();
  const [wordTries, setWordTries] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const providerValues = useMemo(() => (
    {
      wordlist,
      setWordlist,
      randomWord,
      setRandomWord,
      wordTries,
      setWordTries,
      showModal,
      setShowModal,
    }
  ));

  return (
    <WordsContext.Provider value={providerValues}>
      { children }
    </WordsContext.Provider>
  );
}

export function useModal() {
  const { showModal, setShowModal } = useContext(WordsContext);

  return { showModal, setShowModal };
}

WordsProvider.propTypes = {
  children: node.isRequired,
};
