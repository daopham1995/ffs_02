class CombosController < ApplicationController
  before_action :find_combo, only: [:show]

  def index
    @combos = Combo.all
    @combos.map{|combo| combo[:image] = {url: combo.image.url}}
    @categories  = Category.pluck :name
    if params[:search_cate]
      category = Category.find_by name: params[:search_cate][:category_name]
      @products = category.products
    elsif params[:search].present?
      @products = Product.search_product(params[:search])
    else
      @products = Product.all
    end
    @order_detail = OrderDetail.new
  end

  def show
  end

  private
  def find_combo
    @combo = Combo.find_by id: params[:id]
    unless @combo
      respond_to do |format|
        format.html {redirect_to combo_path}
        format.json do
          render json: {message: flash_message("not_found")},
            status: :not_found
        end
      end
    end
  end
end
