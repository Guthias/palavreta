import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import useWords from '../hooks/useWords';

const Div = styled.form`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 290px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1.5em;
  padding: 5px;
  width: 200px;
  width: 100%;
  font-weight: 700;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${({ color }) => color};
  width: 70px;
  border: none;
  color: white;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  :disabled {
    background-color: #bbb
  }
`;

export default function WordInput() {
  const [wordInput, setWordInput] = useState('');
  const [isValidWord, setIsValidWord] = useState(false);
  const { tryNewWord, spellChecker } = useWords();
  const WORD_LENGTH = 5;

  const changeWordInput = ({ target }) => {
    if (target.value.length <= 5) {
      setWordInput(target.value.toUpperCase());
    }
  };

  const tryButton = (event) => {
    event.preventDefault();
    tryNewWord(wordInput);
    setWordInput('');
  };

  useEffect(() => {
    const verifyValidWord = () => {
      if (wordInput.length === WORD_LENGTH) {
        setIsValidWord(spellChecker(wordInput));
      } else {
        setIsValidWord(false);
      }
    };
    verifyValidWord();
  }, [wordInput]);

  return (
    <Div>
      <Input type="text" value={wordInput} onChange={changeWordInput} />

      <Button color="#4EA060" disabled={!isValidWord} type="submit" onClick={tryButton}>
        <FaPlay />
      </Button>
    </Div>
  );
}
