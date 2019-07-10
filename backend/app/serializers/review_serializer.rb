class ReviewSerializer < ActiveModel::Serializer
	belongs_to :user
	belongs_to :beer

  attributes :id, :user, :beer, :title, :author, :content, :rating
end
