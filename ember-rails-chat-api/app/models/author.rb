class Author < ActiveRecord::Base
  has_many :messages
end
