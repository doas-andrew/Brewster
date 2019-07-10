class ReviewSerializer < ActiveModel::Serializer
	belongs_to :user
	belongs_to :beer

  attributes :id, :title, :author, :content, :rating
end
