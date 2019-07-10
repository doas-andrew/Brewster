class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
    	t.string :title
    	t.string :content
      t.string :author
      t.integer :rating
    	
    	t.references :user
    	t.references :beer

      t.timestamps
    end
  end
end
