class OrdersController < ApplicationController
  include CheckOrder

  before_action :check_staff_order
  before_action :check_product_and_current_order, only: [:show, :update, :index]
  before_action :check_user, only: [:update]

  def index
    @orders = Order.all
  end

  def show
    @order_details = @order.order_details
  end

  def update
    if @order.total != Settings.zero
      @order.update_attributes order_params
      redirect_to root_path
    else
      flash[:danger] = t "flash.danger.order_total"
      redirect_to root_path
    end
    session.delete :order_id
    @current_order = nil
  end

  private
  def order_params
    params.require(:order).permit :status, :total, :rec_name, :rec_phone,
      :rec_addr
  end

  def check_user
    if current_user
      @order.user_id = current_user.id
    end
  end
end
