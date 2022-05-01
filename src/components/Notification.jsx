import React from 'react';
import styled from 'styled-components';
import useGame from '../hooks/useGame';

const NotificationArea = styled.div`
  top: 20%;
  position: fixed;
  background-color: #4682F6;
  color: white;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5em;
  font-weight: 700;
  z-index: 2000;
`;

export default function Notification() {
  const { gameStatus, randomWord } = useGame();
  const loseMessage = `A palavra era ${randomWord?.toUpperCase()}`;

  return (
    gameStatus !== 'in game' && (
      <NotificationArea>
        {
          gameStatus === 'win' ? 'Você ganhou' : loseMessage
        }
      </NotificationArea>
    )
  );
}
