class AddStaffToOrders < ActiveRecord::Migration[5.0]
  def change
    add_reference :orders, :staff, foreign_key: true
  end
end
