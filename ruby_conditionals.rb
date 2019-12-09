# ----------------RUBY CONDITIONALS 12/9/2019
# IF/ELSE/END

# INPUT - getting user input in terminal/irb
# gets is a prompt for user input in terminal
# chomp pulls empty characters off a string

puts 'Enter your Age'
your_age = gets.chomp
puts your_age.class
# your_age is of the class (datatype) String and we need it to be an Integer

puts 'Enter your Age'
your_age = gets.chomp.to_i
# changing the class to Integer
puts your_age.class

if your_age >= 18
  puts "#{your_age} is old enough to vote."
else
  puts "#{your_age} is not old enought to vote"
end

# Terinary syntax is the same as JS

puts your_age >= 18 ? "#{your_age} is old enough" : "#{your_age} is not old enough"

# IF/ELSIF/ELSE/END

puts 'Enter a number'
num1 = gets.chomp.to_i
puts num1.class
puts 'Enter a number'
num2 = gets.chomp.to_i
puts num2.class

if num1 > num2
  p "#{num1} is greater"
elsif num1 < num2
  p "#{num2} is greater"
else
  p "#{num1} and #{num2} are equal"
end

# UNLESS - part of the conditional family, comes from the intuitive language aspect of Ruby
# Easy to read but not super practical or much used

check_num = 6

unless check_num > 5
  # will return if evaluted to false
  p 'this'
else
  p 'that'
end
