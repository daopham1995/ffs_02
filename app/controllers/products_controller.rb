class ProductsController < ApplicationController
  include CheckOrder
  before_action :check_staff_order, only: [:index, :show]

  def index
    @categories  = Category.pluck :name
    if params[:search_cate]
      category = Category.find_by name: params[:search_cate][:category_name]
      @products = category.products
    elsif params[:search].present?
      @products = Product.search_product(params[:search])
    else  
      @products = Product.all
    end
  end

  def show
    @product = Product.find_by id: params[:id]
  end
end
