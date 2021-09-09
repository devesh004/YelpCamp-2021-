const mongoose = require('mongoose');
const Campground = require('../models/campground')
const cities = require('./city')
const { places, descriptors } = require('./seedHelper')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function () {
    console.log("mongoose connection stablish")
});

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20 + 10);
        const camp = new Campground({
            //YOUR USER ID
            author: "61351f09ae229ef16e9f95b8",
            location: `${cities[random1000].city},${cities[random1000].city}`,
            title: `${sample(descriptors)} ${sample(places)}`,

            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimosipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatibus alias in, blanditiis maxime sfssdvsds dedefv efedfcs  ffcddf',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dit5fvvvf/image/upload/v1630948929/YelpCamp/efagy8vkba4s5cawsvvq.jpg',
                    filename: 'YelpCamp/efagy8vkba4s5cawsvvq',
                },
                {
                    url: 'https://res.cloudinary.com/dit5fvvvf/image/upload/v1630948931/YelpCamp/quigywwznx9ihnod0hhx.jpg',
                    filename: 'YelpCamp/quigywwznx9ihnod0hhx',
                },
                {
                    url: 'https://res.cloudinary.com/dit5fvvvf/image/upload/v1630948934/YelpCamp/sya2yl2euh7ocwa9advn.jpg',
                    filename: 'YelpCamp/sya2yl2euh7ocwa9advn',
                }
            ]
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close()
})