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

export default function BoardRow() {
  return (
    <Row>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </Row>
  );
}
