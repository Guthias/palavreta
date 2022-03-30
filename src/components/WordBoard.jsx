import React from 'react';
import styled from 'styled-components';
import BoardRow from './BoardRow';

const Board = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-direction: column;
`;

export default function WordBoard() {
  return (
    <Board>
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
    </Board>
  );
}
