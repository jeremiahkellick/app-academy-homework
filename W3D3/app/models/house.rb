class House < ApplicationRecord
  has_many :residents, foreign_key: :house_id, class_name: 'Person'
end
