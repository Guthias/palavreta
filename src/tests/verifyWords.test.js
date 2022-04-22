import verifyWords from '../helpers/verifyWords';

describe('Alghoritm for verify Words', () => {
  it('Should verify if all positions is correct when tried and correct word is the same', () => {
    const result = verifyWords('VAZIO', 'VAZIO');
    expect(result).toMatchObject(
      [
        {
          char: 'V',
          status: 'correct',
        },
        {
          char: 'A',
          status: 'correct',
        },
        {
          char: 'Z',
          status: 'correct',
        },
        {
          char: 'I',
          status: 'correct',
        },
        {
          char: 'O',
          status: 'correct',
        },
      ]
    )
  });

  it('Should work as expected when tried word is \'FOLHA\' and correct word is \'VENTO\'', () => {
    const result = verifyWords('FOLHA', 'VENTO');
    expect(result).toMatchObject([{
      char: 'F',
      status: 'wrong',
    },
    {
      char: 'O',
      status: 'present',
    },
    {
      char: 'L',
      status: 'wrong',
    },
    {
      char: 'H',
      status: 'wrong',
    },
    {
      char: 'A',
      status: 'wrong',
    }])
  });

  it('Should work as expected when tried word is \'FALHA\' and correct word is \'FOLHA\'', () => {
    const result = verifyWords('FALHA', 'FOLHA');
    expect(result).toMatchObject([{
      char: 'F',
      status: 'correct',
    },
    {
      char: 'A',
      status: 'wrong',
    },
    {
      char: 'L',
      status: 'correct',
    },
    {
      char: 'H',
      status: 'correct',
    },
    {
      char: 'A',
      status: 'correct',
    }])
  });
});
