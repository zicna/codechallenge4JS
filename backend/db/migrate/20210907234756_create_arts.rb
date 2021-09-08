class CreateArts < ActiveRecord::Migration[6.1]
  def change
    create_table :arts do |t|
      t.string :name
      t.string :artist
      t.string :year
      t.string :image

      t.timestamps
    end
  end
end
