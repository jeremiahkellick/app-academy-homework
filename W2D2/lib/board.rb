class Board
  attr_accessor :cups

  def initialize(name1, name2)
    place_stones
    @player_cup_indexes = { name1 => 6, name2 => 13 }
  end

  def place_stones
    @cups = Array.new(14) { [:stone] * 4 }
    @cups[6] = []
    @cups[13] = []
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless start_pos.between?(0, 13)
    raise "Starting cup is empty" if @cups[start_pos].empty?
    true
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []
    opponent_cup_i = @player_cup_indexes[current_player_name] == 6 ? 13 : 6
    i = start_pos
    until stones.empty?
      i = (i + 1) % 14
      @cups[i] << stones.pop unless i == opponent_cup_i
    end
    render
    next_turn(i, @player_cup_indexes[current_player_name])
  end

  def next_turn(ending_cup_idx, current_player_cup_i)
    return :prompt if ending_cup_idx == current_player_cup_i
    return :switch if @cups[ending_cup_idx].length == 1
    ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    [@cups[0..5], @cups[7..11]].any? { |side| side.all?(&:empty?) }
  end

  def winner
    return :draw if @cups[6].length == @cups[13].length
    winner_cup_i = [6, 13].max_by { |i| @cups[i].length }
    @player_cup_indexes.find { |k, v| v == winner_cup_i }[0]
  end
end
