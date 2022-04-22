export default function verifyWords(triedWord, correctWord) {
  const triedChars = triedWord.split('');
  const correctChars = correctWord.split('');

  return correctChars.map((char, index) => ({
    char,
    status: char === triedChars[index] ? 'correct' : 'incorrect',
  }));
}
