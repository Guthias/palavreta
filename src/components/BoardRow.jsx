import React from 'react';
import styled, { css } from 'styled-components';
import { nanoid } from 'nanoid';
import { string } from 'prop-types';
import useWords from '../hooks/useWords';
import verifyWords from '../helpers/verifyWords';

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
  color: black;

  ${({ status }) => {
    switch (status) {
      case 'present':
        return css`
          background-color: #E3D235;
        `;
      case 'correct':
        return css`
          background-color: #80DC54;
        `;
      case 'wrong':
        return css`
          background-color: #707070;
          color: white;
        `;
      default:
        return css`
          background-color: white;
        `;
    }
  }}
`;

export default function BoardRow({ word }) {
  const { randomWord } = useWords();

  const charStatus = verifyWords(word, randomWord);

  return (
    <Row>
      {
        charStatus?.map(({ char, status }) => (
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
