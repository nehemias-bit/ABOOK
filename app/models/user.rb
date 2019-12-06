class User < ApplicationRecord
  has_secure_password
  
  validates :password, length: { minimum: 6 },:if=>:password
  validates :username, presence: true, uniqueness: true

  has_many :books, dependent: :delete_all

end
