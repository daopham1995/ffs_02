class Supports::Order
  attr_reader :order

  def order
    @order = Order.new
  end

  def shops
    @shops = Shop.all
  end

  def staffs
    @staffs = Staff.all.where(position: "shipper")
  end
end
