export default function verifyWords(correctChars, triedChars) {
  if (!correctChars || !triedChars) return undefined;

  const correctCharsClone = [...correctChars];
  const wordStatus = triedChars.map((char) => ({
    char,
    status: 'blank',
  }));

  correctChars.forEach((correctChar, index) => {
    if (correctChar === triedChars[index]) {
      correctCharsClone[index] = ' ';
      wordStatus[index].status = 'correct';
    }
  });

  correctCharsClone.forEach((_, index) => {
    if (correctCharsClone.includes(triedChars[index])) {
      wordStatus[index].status = 'present';
    }
  });

  return wordStatus;
}
