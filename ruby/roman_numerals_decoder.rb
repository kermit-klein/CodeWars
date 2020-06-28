# frozen_string_literal: true

# Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

# Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

# Example:

# solution('XXI') # should return 21

ROMANS = {
  'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 'C' => 100, 'D' => 500, 'M' => 1000, 'Y' => 4, 'Z' => 9
}.freeze

def solution(roman)
  roman.gsub!('IV', 'Y')
  roman.gsub!('IX', 'Z')
  divided_string = roman.chars
  divided_string.reduce(0) { |sum, value| sum + ROMANS.fetch(value) }
end
