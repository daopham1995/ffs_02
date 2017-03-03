Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: "users/registrations"}
  root "pages#show", page: "home"
end
