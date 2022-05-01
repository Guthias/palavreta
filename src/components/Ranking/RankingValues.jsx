import React from 'react';
import styled from 'styled-components';
import useRanking from '../../hooks/useRanking';

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
  const { ranking } = useRanking();

  const playedGames = ranking.length;
  const percentageOfWins = Math.round(
    (ranking.filter(({ win }) => win).length / playedGames) * 100,
  );

  const streak = ranking.reduce((acc, { win }) => {
    acc.actual = win ? acc.actual += 1 : 0;
    acc.best = acc.actual > acc.best ? acc.best = acc.actual : acc.best;

    return acc;
  }, { actual: 0, best: 0 });

  return (
    <Row>
      <ValueArea>
        <Value>{ playedGames }</Value>
        <Description>jogos</Description>
      </ValueArea>

      <ValueArea>
        <Value>{ `${percentageOfWins || 0}%` }</Value>
        <Description>de vitórias</Description>
      </ValueArea>

      <ValueArea>
        <Value>{ streak.actual }</Value>
        <Description>sequencia de vitórias</Description>
      </ValueArea>

      <ValueArea>
        <Value>{ streak.best }</Value>
        <Description>melhor seqûencia</Description>
      </ValueArea>
    </Row>
  );
}
