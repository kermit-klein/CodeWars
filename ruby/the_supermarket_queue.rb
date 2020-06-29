# frozen_string_literal: true

# There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

# input
# customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
# n: a positive integer, the number of checkout tills.
# output
# The function should return an integer, the total time required.

def queue_time(customers, n)
  if n >= customers.length && !customers.empty?
    customers.max
  elsif customers.empty?
    0
  else
    time_steps = []
    current_queue = customers[0..(n - 1)]
    addition_to_queue = []
    until current_queue.empty?
      customers.shift(n)
      time_steps << current_queue.min
      min_wait_time = current_queue.min
      current_queue.map! { |item| item - min_wait_time }
      n = current_queue.count(0)
      current_queue.reject! { |x| x == 0 }
      addition_to_queue = customers[0..(n - 1)]
      current_queue += addition_to_queue
       end
    time_steps.sum
  end
    end
