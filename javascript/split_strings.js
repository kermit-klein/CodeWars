// Description:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  let i = 0;
  let stringPart = str;
  let array = [];
  while (true) {
    stringPart = str.substring(i, i + 2);
    if (stringPart == "") {
      break;
    }
    stringPart.length == 1 ? (stringPart = stringPart.concat("_")) : null;
    array[i / 2] = stringPart;
    i += 2;
  }
  return array;
}
