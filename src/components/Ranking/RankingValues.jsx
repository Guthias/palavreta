import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const ValueArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-inline: 1em;
`;

const Value = styled.span`
  font-size: 2em;
  font-weight: 700;
  width: 100%;
  text-align: center;
`;

const Description = styled.span`
  font-size: 0.8em;
  font-weight: bold;
  color: #E8E8E8;
`;

export default function RankingValues() {
  return (
    <Row>
      <ValueArea>
        <Value>0</Value>
        <Description>jogos</Description>
      </ValueArea>

      <ValueArea>
        <Value>0</Value>
        <Description>de vitórias</Description>
      </ValueArea>

      <ValueArea>
        <Value>0</Value>
        <Description>sequencia de vitórias</Description>
      </ValueArea>

      <ValueArea>
        <Value>0</Value>
        <Description>melhor seqûencia</Description>
      </ValueArea>
    </Row>
  );
}
