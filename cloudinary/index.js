const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({   //made a new instance of cloudinary storage
    cloudinary,
    params: {
        folder: 'YelpCamp',  //folder in cloudinary to store data
        allowedFormats: ['jpeg', 'png', 'jpg']  //allowed file type
    }
});

module.exports = {
    cloudinary,
    storage
}