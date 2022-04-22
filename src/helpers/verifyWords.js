export default function verifyWords(triedWord, correctWord) {
  const triedChars = triedWord.split('');
  const correctChars = correctWord.split('');

  const wordStatus = triedChars.map((char, index) => {
    let status = 'wrong';

    if (char === correctChars[index]) {
      status = 'correct';
      correctChars[index] = ' ';
    }

    return { char, status };
  });

  return wordStatus.map(({ char, status }) => ({
    char,
    status: correctChars.includes(char) ? 'present' : status,
  }));
}
