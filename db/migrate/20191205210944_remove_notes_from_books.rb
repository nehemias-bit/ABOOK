class RemoveNotesFromBooks < ActiveRecord::Migration[6.0]
  def change

    remove_column :books, :notes, :text
  end
end
