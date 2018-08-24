class Queue
  def initialize
    @array = []
  end

  def enqueue(el)
    @array << el
  end

  def dequeue
    @array.shift
  end

  def peek
    @array[0]
  end
end
