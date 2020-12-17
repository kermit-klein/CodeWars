// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// where a ** b means a to the power of b

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n) {
  let obj = {};
  let intermediate = n;
  let myString = "";
  for (let i = 2; i < n + 1; i++) {
    let mod = n % i;
    while (mod == 0) {
      n = n / i;
      mod = n % i;
      if (obj[i] === undefined) {
        obj[i] = 1;
      } else if (obj[i] !== undefined) {
        obj[i]++;
      }
    }
  }

  for (let j in obj) {
    obj[j] === 1
      ? (myString = myString + `(${j})`)
      : (myString = myString + `(${j}**${obj[j]})`);
  }
  return myString;
}
