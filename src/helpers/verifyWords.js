const removeSpecialChars = (word) => {
  if (!word) return undefined;
  const regexRules = {
    a: '[a, á, ã, à, â]',
    e: '[e, é, ê, è]',
    i: '[i, í, ì, î]',
    o: '[o, ó, ô, ò, ô]',
    u: '[u, ú, ù, û]',
  };

  let nonSpecialWord = word.toLowerCase();

  Object.keys(regexRules).forEach((key) => {
    const charRegex = RegExp(regexRules[key], 'm');
    nonSpecialWord = nonSpecialWord.replace(charRegex, key);
  });

  return nonSpecialWord.toUpperCase();
};

export default function verifyWords(triedWord, correctWord) {
  const triedChars = removeSpecialChars(triedWord)?.split('');
  const correctChars = removeSpecialChars(correctWord)?.split('');

  if (!triedWord) {
    return correctWord?.split('').map(() => ({
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

  return wordStatus.map(({ char, status }, index) => {
    let charStatus = status;
    const charPosition = correctChars.indexOf(char);

    if (charPosition !== -1 && status !== 'correct') {
      charStatus = 'present';
      correctChars.splice(charPosition, 1);
    }

    return { char: triedWord[index], status: charStatus };
  });
}
