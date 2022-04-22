export default function verifyWords(triedWord, correctWord) {
  const triedChars = triedWord.split('');
  const correctChars = correctWord.split('');

  return triedChars.map((char, index) => ({
    char,
    status: char === correctChars[index] ? 'correct' : 'incorrect',
  }));
}
