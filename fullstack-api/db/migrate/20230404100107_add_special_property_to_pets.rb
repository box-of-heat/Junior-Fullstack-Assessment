class AddSpecialPropertyToPets < ActiveRecord::Migration[7.0]
  def change
    add_column :pets, :special_property, :string
  end
end
