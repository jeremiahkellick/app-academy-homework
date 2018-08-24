class Map
  def initialize
    @array = []
  end

  def set(key, value)
    current = @array.find { |pair| pair[0] == key }
    if current
      current[1] = value
    else
      @array << [key, value]
    end
  end

  def get(key)
    pair = @array.find { |pair| pair[0] == key }
    pair.nil? ? nil : pair[1]
  end

  def delete(key)
    @array.each_index { |i| @array.delete_at(i) if @array[i][0] == key }
  end
end
