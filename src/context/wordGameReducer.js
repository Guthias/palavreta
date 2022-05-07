import { START_NEW_GAME, TRY_NEW_WORD } from '../types/actionTypes';

export default function wordGameReducer(state, { type, payload }) {
  switch (type) {
    case START_NEW_GAME:
      return {
        ...state,
        status: 'playing',
        answer: payload.answer,
      };

    case TRY_NEW_WORD:
      return {
        ...state,
        tries: [...state.tries, payload.triedWord],
      };

    default: return { state };
  }
}
