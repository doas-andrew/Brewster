class UserSerializer < ActiveModel::Serializer
	has_many :favorites
	has_many :reviews
  has_many :beers, through: :favorites
  
  attributes :id, :username, :login_name, :name, :password, :avatar
end
