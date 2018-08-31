def sum_to(n)
  return nil if n < 0
  return n if n == 0
  n + sum_to(n - 1)
end

def add_numbers(nums)
  return 0 if nums.empty?
  nums.first + add_numbers(nums[1..-1])
end

def gamma_fnc(n)
  factorial(n - 1)
end

def factorial(n)
  return nil if n < 0
  return 1 if n == 0
  n * factorial(n - 1)
end

def ice_cream_shop(flavors, favorite)
  return false if flavors.empty?
  flavors[0] == favorite || ice_cream_shop(flavors[1..-1], favorite)
end

def reverse(string)
  return string if string.length <= 1
  string[-1] + reverse(string[0..-2])
end
