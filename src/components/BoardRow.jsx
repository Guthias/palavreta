import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;

const Cell = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  font-size: 38px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export default function BoardRow({ word }) {
  return (
    <Row>
      {
        word.split('').map((letter) => (
          <Cell>
            { letter }
          </Cell>
        ))
      }
    </Row>
  );
}

BoardRow.defaultProps = {
  word: '     ',
};

BoardRow.propTypes = {
  word: string,
};
