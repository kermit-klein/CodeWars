// // Description:

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arrayOfLetters = [...alphabet];
  let lowered = text.toLowerCase().replace(/\s/g, "");
  let textArray = [...lowered];

  let filteredTextArray = textArray
    .filter((item) => {
      return arrayOfLetters.includes(item);
    })
    .map((item) => {
      return (arrayOfLetters.indexOf(item) + 1).toString();
    })
    .join(" ");

  return filteredTextArray;
}
