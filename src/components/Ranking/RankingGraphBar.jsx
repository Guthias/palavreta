import React from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';

const GraphBar = styled.div`
  width: 100%;
  background-color: #4682F6;
  padding-inline: 0.5em 1em;
`;

export default function RankingGraphBar({ value }) {
  return (
    <GraphBar>{ value }</GraphBar>
  );
}

RankingGraphBar.propTypes = {
  value: number.isRequired,
};
