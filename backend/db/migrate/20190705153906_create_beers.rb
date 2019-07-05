class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
    	t.string :api_id
    	t.string :name
      t.string :description
    	t.string :img_url
    	t.float :abv
    	t.boolean :isOrganic
    	t.boolean :isRetired 

      t.timestamps
    end
  end
end
