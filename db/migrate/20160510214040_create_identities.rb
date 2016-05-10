class CreateIdentities < ActiveRecord::Migration
  def change
    create_table :identities do |t|
      t.string :secrettoken
      t.string :refreshtoken

      t.timestamps null: false
    end
  end
end
