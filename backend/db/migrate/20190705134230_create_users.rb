class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
    	t.string :username
    	t.string :login_name
    	t.string :name
    	t.string :password
    	t.string :avatar

      t.timestamps
    end
  end
end
