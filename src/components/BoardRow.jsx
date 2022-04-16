import React from 'react';
import styled, { css } from 'styled-components';
import { nanoid } from 'nanoid';
import { string } from 'prop-types';
import useWords from '../hooks/useWords';

const Row = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;

const Cell = styled.div`
  width: 50px;
  height: 50px;
  font-size: 38px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  text-transform: uppercase;

  ${({ status }) => {
    switch (status) {
      case 'incorrect':
        return css`
          background-color: red;
          color: black;
        `;

      case 'present':
        return css`
          background-color: #eed70b;
          color: black;
        `;

      case 'correct':
        return css`
          background-color: green;
          color: white;
        `;
      default:
        return css`
          background-color: white;
          color: black;
        `;
    }
  }}
`;

export default function BoardRow({ word }) {
  const WORD_LENGTH = 5;
  const { randomWord } = useWords();
  const wordChars = word?.split('')
    || Array.from(Array(WORD_LENGTH), () => '');

  const wordCharsClone = [...wordChars];

  const charStatus = wordChars.map((char, index) => {
    let status;

    if (char === '') {
      status = 'blank';
    } else if (char === randomWord?.split('')[index]) {
      wordCharsClone.splice(char, 1);
      status = 'correct';
    } else if (randomWord?.includes(char)) {
      wordCharsClone.splice(char, 1);
      status = 'present';
    } else {
      status = 'incorrect';
    }

    return {
      char,
      status,
    };
  });

  return (
    <Row>
      {
        charStatus.map(({ char, status }) => (
          <Cell key={nanoid()} status={status}>
            { char }
          </Cell>
        ))
      }
    </Row>
  );
}

BoardRow.defaultProps = {
  word: undefined,
};

BoardRow.propTypes = {
  word: string,
};
