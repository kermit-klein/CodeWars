# frozen_string_literal: true

# Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

# 12 ==> 21
# 513 ==> 531
# 2017 ==> 2071
# nextBigger(num: 12)   // returns 21
# nextBigger(num: 513)  // returns 531
# nextBigger(num: 2017) // returns 2071
# If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

# 9 ==> -1
# 111 ==> -1
# 531 ==> -1
# nextBigger(num: 9)   // returns nil
# nextBigger(num: 111) // returns nil
# nextBigger(num: 531) // returns nil

def next_bigger(n)
  number_arr = n.to_s.chars.map(&:to_i)
  index_of_mid_num = nil
  (number_arr.length - 1).downto(1).each do |i|
    if number_arr[i] > number_arr[i - 1]
      index_of_mid_num = i - 1
      break
    end
  end

  return -1 if index_of_mid_num.nil?

  first_part = number_arr[0, index_of_mid_num]
  second_part = number_arr[index_of_mid_num + 1, number_arr.length - index_of_mid_num]
  mid_num = number_arr[index_of_mid_num]
  num_to_swap = second_part.sort.bsearch { |x| x > mid_num }
  second_part.delete_at(second_part.index(num_to_swap))
  new_second_part = second_part + [mid_num]
  (first_part + [num_to_swap] + new_second_part.sort).join.to_i
end

def next_bigger(n)
  digits = n.to_s.chars
  combos = digits.permutation.sort
  combos.find { |combo| combo.join > n.to_s }.join.to_i
  end
