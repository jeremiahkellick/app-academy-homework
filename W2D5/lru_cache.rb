class LRUCache
  def initialize(limit)
    @store = []
    @limit = limit
  end

  def count
    @store.length
  end

  def add(el)
    @store.delete(el)
    @store.unshift(el)
    if @store.length > @limit
      @store.delete_at(@store.length - 1)
    end
  end

  def show
    @store
  end
end
