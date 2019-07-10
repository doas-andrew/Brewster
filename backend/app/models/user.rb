class User < ApplicationRecord  
	has_many :favorites
	has_many :reviews
	has_many :beers, through: :favorites

	USERNAME_REGEX = /\A[a-zA-Z0-9_]*\z/i

  validates :username, {
  	presence: true,
  	format: {with: USERNAME_REGEX},
  	uniqueness: {case_sensitive: false}
  }
  validates :password, {
    length: {minimum: 3},
    allow_blank: false
  }
  validates :name, {
    presence: true,
    length: {maximum: 50}
  }

  before_create {
    self.login_name = self.username.downcase
  }

  before_save {
    self.encrypt_new_passwords
  }

  def encrypt_new_passwords
    if self.password_changed?
      self.password = RSA_Keys.encrypt(self.password)
    end
  end

  def authenticate(password)
    RSA_Keys::decrypt(self.password) == password
  end

  def profile_info
    {
      id: self.id.to_s,
      name: self.name,
      username: self.username,
      favorite_beers: self.beers,
      reviews: self.reviews,
      avatar: self.avatar
    }
  end
end
