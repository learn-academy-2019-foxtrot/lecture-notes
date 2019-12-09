# ----------------RUBY HASHES AND LOOPS 12/9/2019

# LOOPS - DO/END
# times

5.times do
  p 'times loop'
end

# looping from a variable
loop_num = 10
loop_num.times do
  p 'hello'
end

# while
value = 0
while value <= 5 do
  p value
  value += 1
end

# until
count = 1
until count > 20
  # puts count
  count += 1
end

nums = [3, 4, 17]
# the || are block code parameters
nums.each do |value|
  p value * 3
end


# MAP - the curly braces can take the place of the DO/END block

ex_array = [8, 9, 15, 3, 12, 13]

# --curly brace block--
p ex_array.map { |value| value * 3 }
p ex_array

# --or-- do/end block
p ex_array.map do |value|
  value * 3
end

# map is an accessor method so you must use a ! if you want to change the original array

p ex_array.map!{ |i| i * 3 }
p ex_array


def mult_number arr
  arr.map do |value|
    value * 3
  end
end
p mult_number ex_array


arr1 = ["Louise", "Gene", "Tina"]

def add_name arr
  arr.map do |value|
    "#{value} Belcher"
  end
end
p add_name arr1


new_nums = [8, 9, 15, 3, 12, 13]

def odd_even arr
  arr.map do |value|
    if value % 2 == 0
      "even"
    else
      "odd"
    end
  end
end
p odd_even new_nums



# HASHES - dictionary-like collection of unique keys and their values. Also called associative arrays, they are similar to Arrays, but where an Array uses integers as its index, a Hash allows you to use any object type. Hashes enumerate their values in the order that the corresponding keys were inserted.
# The => is called a rocket

lunch_order1 = { tacos: 10, type: "Carnitas"}
# Access the value by the hash
p lunch_order1[:tacos]

# With a hash rocket
lunch_order2 = { 'tacos' => 10, 'type' => "Carnitas" }
p lunch_order2['tacos']

# With a Ruby symbol
lunch_order3 = { :tacos => 10, :type => "Carnitas" }
p lunch_order3[:tacos]
p lunch_order3[:type]


# A Hash can also be created with Hash.new

burger_order = Hash.new
p burger_order
burger_order['Double Cheese Burger'] = 3
p burger_order

burger_order['Veggie Burger'] = 3
p burger_order
