import React from 'react';
import { FaSkull } from 'react-icons/fa';
import styled from 'styled-components';

const ModalArea = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const FeedbackArea = styled.div`
  background-color: #2e2e2e;
  width: 40%;
  color: white;
  padding: 30px;
  font-weight: 700;
  border-radius: 1.5em;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 1em;
`;

const FeedbackValues = styled.div`
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

const FeedbackGraphs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const GraphRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5em;
  font-size: 1.5em;
`;

const GraphValue = styled.div`
  color: white;
  width: 0.8em;
  margin-right: 30px;
  text-align: center;
`;

const GraphBar = styled.div`
  width: 100%;
  background-color: #4682F6;
  padding-inline: 0.5em 1em;
`;

export default function Feedback() {
  return (
    <ModalArea>
      <FeedbackArea>
        <Title>Ranking</Title>
        <FeedbackValues>
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
        </FeedbackValues>

        <FeedbackGraphs>
          <GraphRow>
            <GraphValue>1</GraphValue>
            <GraphBar>0</GraphBar>
          </GraphRow>

          <GraphRow>
            <GraphValue>2</GraphValue>
            <GraphBar>0</GraphBar>
          </GraphRow>

          <GraphRow>
            <GraphValue>3</GraphValue>
            <GraphBar>0</GraphBar>
          </GraphRow>

          <GraphRow>
            <GraphValue>4</GraphValue>
            <GraphBar>0</GraphBar>
          </GraphRow>

          <GraphRow>
            <GraphValue>5</GraphValue>
            <GraphBar>0</GraphBar>
          </GraphRow>

          <GraphRow>
            <GraphValue>6</GraphValue>
            <GraphBar>0</GraphBar>
          </GraphRow>

          <GraphRow>
            <GraphValue>
              <FaSkull />
            </GraphValue>
            <GraphBar>0</GraphBar>
          </GraphRow>
        </FeedbackGraphs>
      </FeedbackArea>
    </ModalArea>
  );
}
