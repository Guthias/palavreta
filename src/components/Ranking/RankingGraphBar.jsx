import React from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';

const GraphBarArea = styled.div`
  width: 100%;
  position: relative;
`;

const GraphBar = styled.div`
  width: ${({ growPercentage }) => `${growPercentage}%`};
  min-width: 10%;
  background-color: #4682F6;
  padding-inline: 0.5em 1em;
`;

export default function RankingGraphBar({ value, biggestValue }) {
  const growPercentage = (value / biggestValue) * 100;

  return (
    <GraphBarArea>
      <GraphBar growPercentage={growPercentage}>{ value }</GraphBar>
    </GraphBarArea>
  );
}

RankingGraphBar.propTypes = {
  value: number.isRequired,
  biggestValue: number.isRequired,
};
