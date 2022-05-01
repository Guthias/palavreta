import React from 'react';
import { FaSkull } from 'react-icons/fa';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import useRanking from '../../hooks/useRanking';
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
  const { ranking } = useRanking();

  const triedAttempts = ranking.reduce((acc, { numberOfTries, win }) => {
    if (win) {
      acc[numberOfTries] = acc[numberOfTries] !== undefined ? acc[numberOfTries] + 1 : 1;
    } else {
      acc.lose += 1;
    }
    acc.biggest = Math.max(...Object.values(acc));
    return acc;
  }, { lose: 0, biggest: 0 });

  const MAX_TRIES = 6;
  return (
    <Graph>
      {
        Array.from(Array(MAX_TRIES).keys()).map((_, index) => (
          <GraphRow key={nanoid()}>
            <GraphValue>{ index + 1}</GraphValue>
            <RankingGraphBar
              value={triedAttempts[index + 1] || 0}
              biggestValue={triedAttempts.biggest}
            />
          </GraphRow>
        ))
      }

      <GraphRow>
        <GraphValue>
          <FaSkull />
        </GraphValue>
        <RankingGraphBar
          value={triedAttempts.lose}
          biggestValue={triedAttempts.biggest}
        />
      </GraphRow>
    </Graph>
  );
}
