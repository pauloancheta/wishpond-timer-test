class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title
      t.string :note
      t.date :due_date
      t.string :time_left
      t.string :status

      t.timestamps null: false
    end
  end
end
