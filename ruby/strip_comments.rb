# frozen_string_literal: true

# Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

# Example:

# Given an input string of:

# apples, pears # and bananas
# grapes
# bananas !apples
# The output expected would be:

# apples, pears
# grapes
# bananas
# The code would be called like so:

# result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
# # result should == "apples, pears\ngrapes\nbananas"

def solution(input, markers)
  text = input.split("\n")
  (0..markers.length - 1).each do |i|
    (0..text.length - 1).each do |j|
      marker = text[j].index(markers[i])
      text[j] = text[j][0..(marker - 1)].strip if marker
    end
  end
  text.join("\n")
  end
