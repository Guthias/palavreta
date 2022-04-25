import React from 'react';
import styled from 'styled-components';
import { MdLeaderboard } from 'react-icons/md';

const HeaderArea = styled.div`
  font-size: 22px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 0.8em;
  border-bottom: 1px solid white;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-transform: uppercase;
  margin: 0;
`;

const Column = styled.div`
  display: flex;
  justify-content: ${({ position }) => position};
  width: 100%;
  padding: 0 5em;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: white;
  font-size: 1.2em;
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderArea>
      <Column position="left" />

      <Column position="center">
        <Title>Palavreta</Title>
      </Column>

      <Column position="right">
        <Button>
          <MdLeaderboard />
        </Button>
      </Column>

    </HeaderArea>
  );
}
