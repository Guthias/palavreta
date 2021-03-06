import React, {
  createContext, useState, useMemo, useContext,
} from 'react';
import { node } from 'prop-types';
import wordList from '../data/wordlist';
import { getLocalstoage } from '../helpers/localStorage';

export const WordsContext = createContext();

export default function WordsProvider({ children }) {
  const [wordlist, setWordlist] = useState([...wordList]);
  const [randomWord, setRandomWord] = useState();
  const [wordTries, setWordTries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [gameStatus, setGameStatus] = useState();
  const [ranking, setRanking] = useState(getLocalstoage('ranking') || []);

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
      gameStatus,
      setGameStatus,
      ranking,
      setRanking,
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
