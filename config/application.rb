require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Ffs01
  class Application < Rails::Application
    config.i18n.default_locale = :vi

    config.middleware.use I18n::JS::Middleware
  end
end
