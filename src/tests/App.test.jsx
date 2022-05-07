import App from '../App';
import React from 'react';
import { render } from '@testing-library/react';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Should save current game data on local storage', () => {
    const gameLocalStorage = localStorage.getItem('game');
    const gameData = JSON.parse(gameLocalStorage);

    expect(gameData).toEqual(
      expect.objectContaining({
        status: expect.any(String),
        answer: expect.any(String),
        tries: expect.any(Array),
      })
    );
  })
});
