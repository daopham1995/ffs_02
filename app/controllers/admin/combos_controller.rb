class Admin::CombosController < ApplicationController
  layout "application_admin"
  load_and_authorize_resource

  before_action :authenticate_staff!
  before_action :find_combo, only: [:update, :destroy, :show]

  def index
    @combos = Combo.all
    @combos.map{|combo| combo[:image] = {url: combo.image.url}}
  end

  def create
    @combo = Combo.new combo_params
    respond_to do |format|
      format.json do
        if @combo.save
          @combo[:image] = {url: @combo.image.url}
          render json: {message: flash_message("created"),
            combo: @combo}
        else
          render json: {message: flash_message("not_created"),
            errors: @combo.errors}, status: :unprocessable_entity
        end
      end
    end
  end

  def show
  end

  def update
    respond_to do |format|
      if @combo.update_attributes combo_params
        format.html
        format.json do
          @combo[:image] = {url: @combo.image.url}
          render json: {message: flash_message("updated"),
            combo: @combo}
        end
      else
        format.html
        format.json do
          render json: {message: flash_message("not_updated"),
            errors: @combo.errors}, status: :unprocessable_entity
        end
      end
    end
  end

  def destroy
    respond_to do |format|
      format.html
      format.json do
        if @combo.destroy
          render json: {message: flash_message("deleted"),
            combo: @combo}
        else
          render json: {message: flash_message("not_deleted")},
            status: :unprocessable_entity
        end
      end
    end
  end

  private
  def combo_params
    params.require(:combo).permit Combo::ATTRIBUTE_PARAMS
  end

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
