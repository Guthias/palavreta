import React from 'react';
import styled from 'styled-components';

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
  text-align: center;
`;

const Button = styled.button`
  background-color: ${({ color }) => color};
  width: 50px;
  border: none;
  cursor: pointer;
`;

export default function WordInput() {
  return (
    <Div>
      <Input type="text" />

      <Button color="#4EA060" />

      <Button color="#D84747" />
    </Div>
  );
}
