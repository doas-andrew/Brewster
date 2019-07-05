class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
    	t.string :name
      t.string :tagline
      t.string :description
      
      t.string :first_brewed
    	t.string :image_url

    	t.float :abv
      t.float :ibu
      t.float :ph

      t.timestamps
    end
  end
end
