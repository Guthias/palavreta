import { useContext } from 'react';
import { WordsContext } from '../context/WordsProvider';

export default function useWords() {
  const { wordlist, setWordlist } = useContext(WordsContext);

  return { wordlist, setWordlist };
}
