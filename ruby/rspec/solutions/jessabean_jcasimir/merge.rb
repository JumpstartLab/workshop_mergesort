module Merge
  def self.sort(inputs)
    if inputs.length == 1
      inputs
    elsif inputs.length == 2
      first = inputs.first
      second = inputs.last
      if first > second
        [second, first]
      else
        [first, second]
      end
    elsif inputs.length > 2
      first_half, second_half = split(inputs)
      return merge(sort(first_half), sort(second_half))
    end
  end

  def self.split(inputs)
    length = inputs.length
    if length.even?
      midpoint = length / 2
      first_half = inputs[0..midpoint-1]
      second_half = inputs[midpoint..-1]
    else
      midpoint = length / 2
      first_half = inputs[0..midpoint]
      second_half = inputs[(midpoint+1)..-1]
    end

    return [first_half, second_half]
  end

  def self.merge(sorted_first_half, sorted_second_half)
    results = []

    while(sorted_first_half.length > 0 && sorted_second_half.length > 0)
      if sorted_first_half.first < sorted_second_half.first
        results << sorted_first_half.shift
      else
        results << sorted_second_half.shift
      end
    end

    #it doesnt matter if you add empty arrays together, no need to detect which one is empty before adding to results
    return (results + sorted_first_half + sorted_second_half)
  end
end