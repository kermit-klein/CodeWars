// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

function zeros(n) {
  let m = 1;
  let zero_count = [];
  while (5 ** m <= n) {
    zero_count.push(parseInt(n / 5 ** m));
    m = m + 1;
  }
  return zero_count.reduce((a, b) => {
    return a + b;
  }, 0);
}
