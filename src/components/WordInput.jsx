import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import { BsTrashFill } from 'react-icons/bs';
import useWords from '../hooks/useWords';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1.5em;
  padding: 5px;
  width: 200px;
  font-weight: 700;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${({ color }) => color};
  width: 50px;
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
  const { wordlist, tryNewWord } = useWords();

  const changeWordInput = ({ target }) => {
    if (target.value.length <= 5) {
      setWordInput(target.value.toUpperCase());
    }
  };

  const tryButton = (event) => {
    event.preventDefault();
    tryNewWord(wordInput);
  };

  useEffect(() => {
    const verifyValidWord = () => {
      setIsValidWord(wordlist.includes(wordInput.toLowerCase()));
    };
    verifyValidWord();
  }, [wordInput]);

  return (
    <Div>
      <Input type="text" value={wordInput} onChange={changeWordInput} />

      <Button color="#4EA060" disabled={!isValidWord} type="submit" onClick={tryButton}>
        <FaPlay />
      </Button>

      <Button color="#D84747">
        <BsTrashFill />
      </Button>
    </Div>
  );
}
