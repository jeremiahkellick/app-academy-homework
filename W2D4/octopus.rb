def sluggish_octopus(fish)
  fish.each do |f1|
    return f1 if fish.all? { |f2| f1.length >= f2.length }
  end
  nil
end

def dominant_octopus(fish)
  fish.merge_sort_by { |f| f.length }.last
end

class Array
  def merge_sort_by(&prc)
    return self if length <= 1
    mid = length / 2
    sides = [take(mid).merge_sort_by(&prc), drop(mid).merge_sort_by(&prc)]
    merged = []
    until sides.any?(&:empty?)
      merged << sides.min_by { |side| prc.call(side[0]) }.shift
    end
    merged + sides.reduce(:+)
  end
end

def clever_octopus(fish)
  fish.max_by { |f| f.length }
end

def slow_dance(dir, tiles_array)
  tiles_array.index(dir)
end

def constant_dance(dir, tiles_hash)
  tiles_hash[dir]
end
