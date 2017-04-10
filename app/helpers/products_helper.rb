module ProductsHelper
  def default_image product
    if product.image.blank?
      "default.jpg"
    else
      product.image.url
    end
  end
end
