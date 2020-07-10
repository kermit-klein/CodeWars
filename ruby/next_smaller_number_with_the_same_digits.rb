# frozen_string_literal: true

def next_smaller(n)
  number_arr = n.to_s.chars.map(&:to_i)
  index_of_mid_num = nil
  (number_arr.length - 1).downto(1).each do |i|
    if number_arr[i] < number_arr[i - 1]
      index_of_mid_num = i - 1
      break
    end
  end

  return -1 if index_of_mid_num.nil?

  first_part = number_arr[0, index_of_mid_num]
  second_part = number_arr[index_of_mid_num + 1, number_arr.length - index_of_mid_num]
  mid_num = number_arr[index_of_mid_num]
  num_to_swap = second_part.sort.reverse.bsearch { |x| x < mid_num }
  return -1 if index_of_mid_num == 0 && num_to_swap == 0

  second_part.delete_at(second_part.index(num_to_swap))
  new_second_part = second_part + [mid_num]
  (first_part + [num_to_swap] + new_second_part.sort.reverse).join.to_i
  end
