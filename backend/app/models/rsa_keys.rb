require 'openssl'
require 'base64'

class RSA_Keys
	@@public_key = OpenSSL::PKey::RSA.new(File.read('/Users/andrew/development/mod-projects/mod4-project/backend/app/models/public.pem'))
	@@private_key = OpenSSL::PKey::RSA.new(File.read('/Users/andrew/development/mod-projects/mod4-project/backend/app/models/private.pem'),'brewster')

	def self.encrypt(plaintext)
		Base64.encode64( @@public_key.public_encrypt(plaintext) )
	end

	def self.decrypt(ciphertext)
		@@private_key.private_decrypt( Base64.decode64(ciphertext) )
	end
end
