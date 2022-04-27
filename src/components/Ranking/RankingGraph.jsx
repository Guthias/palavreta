import React from 'react';
import { FaSkull } from 'react-icons/fa';
import styled from 'styled-components';

const Graph = styled.div`
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

export default function RankingGraph() {
  return (
    <Graph>
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
    </Graph>
  );
}
