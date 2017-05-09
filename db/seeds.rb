# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create! name: "Dao Pham",
  email: "daopt22@gmail.com",
  password: "123456",
  password_confirmation: "123456",
  phone: "01675899424",
  address: "Neifheim"

Staff.create! name: "admin",
  email: "admin@gmail.com",
  password: "123456",
  password_confirmation: "123456",
  position: "admin"

Staff.create! name: "shipper",
  email: "shipper@gmail.com",
  password: "123456",
  password_confirmation: "123456",
  position: "owner",
  shop_id: "1"

Staff.create! name: "staff",
  email: "staff@gmail.com",
  password: "123456",
  password_confirmation: "123456",
  position: "chef",
  shop_id: "1"

Staff.create! name: "staff1",
  email: "staff1@gmail.com",
  password: "123456",
  password_confirmation: "123456",
  position: "shipper",
  shop_id: "1"
