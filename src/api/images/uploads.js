require ('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images = [
    './src/api/images/los-exploradores-de-portico-la-saga-de-los-heechee-5.jpg',
    './src/api/images/los-limites-de-la-fundacion-ciclo-de-la-fundacion-6.jpg',
    './src/api/images/los-robots-del-amanecer-serie-de-los-robots-4.jpg',
    './src/api/images/mercaderes del espacio.jpg',
    './src/api/images/pohl.jpg',
    '.src/api/images/portico.jpg',
    '.src/api/images/preludio-a-la-fundacion-ciclo-de-la-fundacion-1.jpg',
    '.src/api/images/rama revelada_.jpg',
    '.src/api/images/Rama-II.jpg',
    '.src/api/images/robots-e-imperio-serie-de-los-robots-5.jpg',
    '.src/api/images/segunda fundacion.jpg',
    '.src/api/images/tras el incierto horizonte_.jpg',
    '.src/api/images/un guijarro en el cielo.jpg',
]

// (async function run() {
//     for (const image of images){
//    const result =  await cloudinary.uploader.upload(image);
//         console.log('result')
//    }
// })();

const image = './src/api/images/mars plus.jpg';

cloudinary.uploader.upload(image).then(result => {
    console.log('result');
});

    
    


