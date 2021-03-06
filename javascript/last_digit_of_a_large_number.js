// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

// For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

// You may assume that the input will always be valid.

// Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9
// lastDigit("10","10000000000")  // returns 0

var lastDigit = function (str1, str2) {
  if (parseInt(str1) == 0) {
    return 0;
  } else if (parseInt(str2) == 0) {
    return 1;
  }
  str1 = str1.split("");
  str2 = str2.split("").slice(-2).join("");
  let base = parseInt(str1[str1.length - 1]);
  let power = ((str2 - 2) % 4) + 10;
  return base ** power % 10;
};
