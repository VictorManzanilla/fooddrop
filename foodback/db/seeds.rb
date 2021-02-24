# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Favorite.destroy_all
User.destroy_all
Restaurant.destroy_all

puts 'Seeding Users....🤷‍♂️'

 5.times do
User.create(
    first_name: Faker::Name.first_name ,
    last_name: Faker::Name.last_name,
    age: rand(18..25),
    email: Faker::Internet.email,
    username: '',
    password_digest: "password"
)
 end

 puts 'Seeding Restaurant...🗒'

 
Restaurant.create(
    name: 'Tacos El Tio',
    opening_hours: '9am - 9:30pm',
    address: '3734 W Grand Ave, Chicago, IL 60651',
    cuisine: 'Mexican',
    photo: 'https://cdn.usarestaurants.info/assets/uploads/33acad89445a8d1d21a032395a832642_-united-states-illinois-cook-county-chicago-83535-tacos-el-tiohtm.jpg'
)
Restaurant.create(
    name: 'El Habanero',
    opening_hours: '11am - 8pm',
    address: '3300 W Fullerton Ave, Chicago, IL 60647',
    cuisine: 'Mexican',
    photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/ttFgscI5GRYF42xkwXGF0Q/o.jpg'
)
Restaurant.create(
    name: 'Turkey Chop',
    opening_hours: '11am - 8pm',
    address: '3506 W Chicago Ave, Chicago, IL 60651',
    cuisine: 'American',
    photo: 'https://assets.dnainfo.com/generated/chicago_photo/2015/11/turkey-chop-1448317792.jpg/extralarge.jpg'
)
Restaurant.create(
    name: 'El Mofonguito',
    opening_hours: '10am - 8pm',
    address: '3625 W North Ave, Chicago, IL 60647',
    cuisine: 'Puerto Rican',
    photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/c-nNNAYv7URDNUGk-faIKA/o.jpg'
)

 

 puts 'Seeding favorite...'
 
 5.times do
    Favorite.create(
        user_id: User.all.sample.id,
        restaurant_id: Restaurant.all.sample.id
    )
 end
puts 'Done...✅'