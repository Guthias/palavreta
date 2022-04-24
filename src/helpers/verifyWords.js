export default function verifyWords(triedWord, correctWord) {
  const triedChars = triedWord?.split('');
  const correctChars = correctWord?.split('');

  if (!triedWord) {
    return correctChars?.map(() => ({
      char: '',
      status: 'blank',
    }));
  }

  const wordStatus = triedChars.map((char, index) => {
    let status = 'wrong';

    if (char === correctChars[index]) {
      status = 'correct';
      correctChars[index] = ' ';
    }

    return { char, status };
  });

  return wordStatus.map(({ char, status }) => {
    let charStatus = status;
    const charPosition = correctChars.indexOf(char);

    if (charPosition !== -1 && status !== 'correct') {
      charStatus = 'present';
      correctChars.splice(charPosition, 1);
    }

    return { char, status: charStatus };
  });
}
