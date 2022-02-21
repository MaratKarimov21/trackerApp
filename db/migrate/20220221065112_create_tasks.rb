class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.integer :complexity
      t.references :requester, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
