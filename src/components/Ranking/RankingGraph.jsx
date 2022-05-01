import React from 'react';
import { FaSkull } from 'react-icons/fa';
import styled from 'styled-components';
import RankingGraphBar from './RankingGraphBar';

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

export default function RankingGraph() {
  return (
    <Graph>
      <GraphRow>
        <GraphValue>1</GraphValue>
        <RankingGraphBar value={0} />
      </GraphRow>

      <GraphRow>
        <GraphValue>2</GraphValue>
        <RankingGraphBar value={0} />
      </GraphRow>

      <GraphRow>
        <GraphValue>3</GraphValue>
        <RankingGraphBar value={0} />
      </GraphRow>

      <GraphRow>
        <GraphValue>4</GraphValue>
        <RankingGraphBar value={0} />
      </GraphRow>

      <GraphRow>
        <GraphValue>5</GraphValue>
        <RankingGraphBar value={0} />
      </GraphRow>

      <GraphRow>
        <GraphValue>6</GraphValue>
        <RankingGraphBar value={0} />
      </GraphRow>

      <GraphRow>
        <GraphValue>
          <FaSkull />
        </GraphValue>
        <RankingGraphBar value={0} />
      </GraphRow>
    </Graph>
  );
}
