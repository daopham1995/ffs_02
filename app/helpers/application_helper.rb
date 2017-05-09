module ApplicationHelper
  def full_title page_title = ""
    base_title = t "views.helpers.base_title"
    base_title = "#{page_title} | #{base_title}" if page_title.present?
  end

  def flash_message flash_type, *params
    if params.empty?
      t "flashs.messages.#{flash_type}", model_name: controller_name.classify
    else
      unless params[0].empty?
        t "flashs.messages.#{flash_type}", models_name: params[0].join(", ")
      end
    end
  end
end
