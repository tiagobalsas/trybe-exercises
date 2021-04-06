const factor = (naturalNumber) => {
  let factorNumber;
  if (naturalNumber > 0) {
    factorNumber = 1;
    for (let index = naturalNumber; index > 1; index -= 1) {
      factorNumber = factorNumber * index;
      console.log(factorNumber);
    }
  }
};

factor(4);

const searchBiggerPhrase = (phrase) => {
  const longestWord = phrase.split(" ");
  const words = longestWord.sort((a, b) => b.length - a.length);
  const biggestWord = words[0];
  console.log(biggestWord);
};
searchBiggerPhrase();
