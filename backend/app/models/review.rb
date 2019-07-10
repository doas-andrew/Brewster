class Review < ApplicationRecord
	belongs_to :user
	belongs_to :beer

	before_create {
		self.author = self.user.username
	}
end
