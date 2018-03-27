var Product = require('../models/product');
var mongoose = require('mongoose');
//var mongo = require('mongodb');
//var MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost:27017/shopping')
// var url = "mongodb://localhost:27017/shopping";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   });

var products =[ 
    new Product({
    imagePath:'https://i.ytimg.com/vi/7oeTrJhTZ6M/maxresdefault.jpg',
    title:'Thor: Ragnarok',
    description:"Marvel studio's Movie",
    price:10
}),
new Product({
    imagePath:'https://www.cizgiroman.com/wp-content/uploads/2016/05/tony-stark-aunt-may-hooked-up-10-marvel-ous-facts-about-captain-america-civil-war-967953-1000x600.jpg',
    title:'Captain America: Civil War',
    description:"Marvel studio's Movie",
    price:15
}),
new Product({
    imagePath:'https://www.filmmusicsite.com/images/covers/xlarge/59302.jpg',
    title:'Spiderman Homecoming',
    description:"Marvel studio's Movie",
    price:9
}),
new Product({
    imagePath:'https://iamnotlefthandedeither.files.wordpress.com/2017/05/img_2359.jpg',
    title:'Guardians of the Galaxy Vol 2',
    description:"Marvel studio's Movie",
    price:10
}),
new Product({
    imagePath:'https://www.stardust.it/uploads/img/movie/poster/253bfa57bf5721fbfaffe9de476e77ff1514976849.jpeg',
    title:'Black Panther',
    description:"Marvel studio's Movie",
    price:13
}),
]
var done=0;
for(let i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}