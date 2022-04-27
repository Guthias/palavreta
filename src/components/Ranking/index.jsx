import React from 'react';
import styled from 'styled-components';
import RankingGraph from './RankingGraph';
import RankingValues from './RankingValues';

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

export default function Ranking() {
  return (
    <FeedbackArea>
      <Title>Ranking</Title>
      <RankingValues />
      <RankingGraph />
    </FeedbackArea>
  );
}
