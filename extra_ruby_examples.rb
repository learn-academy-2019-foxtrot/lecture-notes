# -------------------EXTRA EXAMPLES

# Write a method that takes in an array and returns only the odd numbers
# The .select method will evaluate to a boolean value

nums = [8, 9, 15, 3, 12, 13, 3]
# expected output = [9, 15, 3, 13]

def odd_only1 arr
  arr.select do |value|
    value % 2 != 0
  end
end
p odd_only1 nums

def odd_only2 arr
  arr.reject do |value|
    value % 2 == 0
  end
end
p odd_only2 nums


# Given an array of numbers, write a function that returns an array that has all duplicate elements removed and is sorted from least to greatest value

# Sorting
# .sort and .sort!

numArray = [3, 5, 6, 4, 6, 7, 6, 6, 4, 3]
def num_sorter array
  array.uniq.sort
end
p num_sorter numArray


# Write a method that capitalizes the first letter of each word in a sentence

my_sentence = 'hello there, how are you?'
# expected output = "Hello There, How Are You?"

def cap_first sentence
  mapArr = sentence.split.map do
    |value| value.capitalize
  end
    mapArr.join(" ")
end
p cap_first my_sentence

# Cool shortcut:
puts my_sentence.split.map(&:capitalize).join(' ')


# Write a method that removes the vowels from a sentence

no_vowels = "I have no vowels"
# expected output = " hv n vwls"

def remove_vowel sentence
  sentence.downcase.delete 'aeiou'
end
p remove_vowel no_vowels



# Extra fun stuff - spaceship operater
# Split an array into two arrays, one less than 5, one greater than 5

# returns a hash of all the values that are less than, equal to, or greater than the target value

nums = Array(1..10)
target = 5
sorter = nums.group_by do
  |n|n<=>target
end
p sorter
# -->> {-1=>[1, 2, 3, 4], 0=>[5], 1=>[6, 7, 8, 9, 10]}

# --or-- to access particular arrays within the hash
nums = Array(1..10)
target = 5
sorter = nums.group_by do
  |n|(n<=>target)
end
p sorter[-1]
# -->> {-1=>[1, 2, 3, 4], 0=>[5], 1=>[6, 7, 8, 9, 10]}

p nums.sort do |a,b|
  b <=> a
end
# --or--
p nums.sort { |a,b| b <=> a}

sortedsentence = no_vowels.split(" ").sort_by do |word| word.length end
p sortedsentence.join(" ")

# Populates an array with 'a' -->> 'g'
letters = Array('a'..'g')
p letters
# Populates an array with 1 -->> 10
nums = Array(1..10)
p nums
