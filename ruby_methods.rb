# ----------------RUBY METHODS WITH PARAMETERS 12/9/2019


# DEF/END (Ruby keywords)
# def stands for define

def mult num1, num2
  num1 * num2
end
p mult 3, 7


# It is best practice to use parentheses on methods that pass multiple parameters

def mult(num1, num2)
  num1 * num2
end
p mult(3, 7)



puts 'Enter Your Name'
your_name = gets.chomp
puts 'Enter your Age'
your_age = gets.chomp.to_i


def voting_age(name, age)
  if age >= 18
    "Hi #{name}. #{age} is old enough to vote"
  else
    "Hi #{name}. #{age} is not old enought to vote"
  end
end
p voting_age(your_name, your_age)


puts "Enter number"
number1 = gets.chomp.to_i
puts "Enter another number"
number2 = gets.chomp.to_i


def greater(num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else
    "#{num1} and #{num2} are equal"
  end
end
p greater(number1, number2)
