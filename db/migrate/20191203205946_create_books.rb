class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.text :book_cover
      t.string :author_name
      t.text :notes
      t.string :book_title
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
