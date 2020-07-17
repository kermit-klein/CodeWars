# frozen_string_literal: true

# Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

# For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

# You may assume that the input will always be valid.

# Examples
# lastDigit("4", "1")            // returns 4
# lastDigit("4", "2")            // returns 6
# lastDigit("9", "7")            // returns 9
# lastDigit("10","10000000000")  // returns 0

def last_digit(n1, n2)
  return 1 if n2 == 0
  return 0 if n1 == 0

  exp = n2 % 4 == 0 ? 4 : n2 % 4
  (n1**exp) % 10
end
