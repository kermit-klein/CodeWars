// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

function solution(string) {
  matchList = string.match(
    /[A-Z].*?(?=[A-Z])|[A-Z].*(?![A-Z])|^[a-z].*?(?=[A-Z])|[a-z].*/g
  );
  let finalArray;
  matchList == null ? (finalArray = "") : (finalArray = matchList.join(" "));
  return finalArray;
}
