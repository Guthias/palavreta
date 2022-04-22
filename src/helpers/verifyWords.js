export default function verifyWords(triedWord, correctWord) {
  const triedChars = triedWord.split('');
  const correctChars = correctWord.split('');

  return triedChars.map((char, index) => {
    let status = 'wrong';

    if (char === correctChars[index]) {
      status = 'correct';
    } else if (correctChars.includes(char)) {
      status = 'present';
    }

    return { char, status };
  });
}
