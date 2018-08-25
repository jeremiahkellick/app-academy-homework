class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    if game_over

    else
      round_success_message
      self.sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    system("clear")
    puts seq.join(" ")
    sleep(sequence_length / 2.0)
    system("clear")
    puts "What was the sequence?"
    @game_over = true unless gets.chomp.split == seq
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "You got it!"
  end

  def game_over_message
    puts "Nope, game over."
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []
  end
end

if __FILE__ == $PROGRAM_NAME
  Simon.new.play
end
