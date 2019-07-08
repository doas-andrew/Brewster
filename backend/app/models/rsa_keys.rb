require 'openssl'
require 'base64'

class RSA_Keys
	@@public_key = OpenSSL::PKey::RSA.new(File.read(File.expand_path('public.pem', __dir__)))
	@@private_key = OpenSSL::PKey::RSA.new(File.read(File.expand_path('private.pem', __dir__)),'brewster')
	
	def self.encrypt(plaintext)
		Base64.encode64( @@public_key.public_encrypt(plaintext) )
	end

	def self.decrypt(ciphertext)
		@@private_key.private_decrypt( Base64.decode64(ciphertext) )
	end
end
