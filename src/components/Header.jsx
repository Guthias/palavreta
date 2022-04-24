import React from 'react';
import styled from 'styled-components';

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

export default function Header() {
  return (
    <HeaderArea>
      <Title>Palavreta</Title>
    </HeaderArea>
  );
}
