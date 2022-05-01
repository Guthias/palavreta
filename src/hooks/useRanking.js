import { useContext } from 'react';
import { WordsContext } from '../context/WordsProvider';
import { setLocalStorage } from '../helpers/localStorage';

export default function useRanking() {
  const { ranking, setRanking, randomWord } = useContext(WordsContext);

  const createRankingValue = (tries) => {
    const date = new Date();
    return {
      tries,
      numberOfTries: tries.length,
      correctWord: randomWord,
      win: tries.includes(randomWord),
      date,
    };
  };

  const addValueOnRanking = (word, tries) => {
    const newRanking = [...ranking, createRankingValue(word, tries)];
    setLocalStorage('ranking', newRanking);
    setRanking(newRanking);
  };

  return { ranking, addValueOnRanking };
}
