class Combo < ApplicationRecord
  ATTRIBUTE_PARAMS = [:name, :image, :description, :active, :com_value]
  mount_uploader :image, AvatarUploader
  has_many :products, through: :combo_products
  has_many :combo_products, dependent: :destroy
  validates :name, presence: true
end
