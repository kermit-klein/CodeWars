# frozen_string_literal: true

# Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

# Examples
# "()"              =>  true
# ")(()))"          =>  false
# "("               =>  false
# "(())((()())())"  =>  true
# Constraints
# 0 <= input.length <= 100

# Along with opening (() and closing ()) parenthesis, input may contain any valid ASCII characters. Furthermore, the input string may be empty and/or not contain any parentheses at all. Do not treat other forms of brackets as parentheses (e.g. [], {}, <>).

def valid_parentheses(string)
  only_parants = string.scan(/([(]|[)])/)
  if only_parants.empty?
    true
  elsif only_parants.length == 1
    false
  end
  k = false
  until k == true
    dummy = only_parants.length
    (0..only_parants.length - 1).each do |i|
      next unless only_parants[i] == ['('] && only_parants[i + 1] == [')']

      only_parants.delete_at(i)
      only_parants.delete_at(i)
      break
    end
    k = true if dummy == only_parants.length
  end
  only_parants.empty? ? true : false
  end
