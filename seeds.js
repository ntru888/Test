var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comments")

var data = [
    {
        name: "Web Developer Bootcamp", 
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "So far, I think this is the best course On Udemy"
    },
    {
        name: "Accelerated JavaScript", 
        image: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg",
        description: "Looks like a good course on JS"
    },
    {
        name: "React and Redux", 
        image: "https://farm3.staticflickr.com/2535/3823437635_c712decf64.jpg",
        description: "An awesome course on React - still in progress"
    },
    {
        name: "Machine Learning", 
        image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg",
        description: "Andrew Ng's legendary course on Coursera"
    },
    {
        name: "MongoDB", 
        image: "https://farm9.staticflickr.com/8225/8524305204_43934a319d.jpg",
        description: "Almost essential to use with Object Document Mapper - Mongoose"
    },
    {
        name: "The Complete ASP.net MVC 5 Course", 
        image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
        description: "Ahh should get this one done"
    }
    ]

function seedDB(){
     Campground.remove({}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("database cleaned"); 
    }
    // data.forEach(function(seed){
    //   Campground.create(seed, function(err,campground){
    //       if (err) {
    //           console.log(err);
    //       } else {
    //           console.log("added a campground:")
    //           Comment.create(
    //               {
    //                     text: "Nice campground, wish there was internet",
    //                     author: "Homer Simpson"
    //               }, function(err, comment) {
    //                   if (err) {
    //                       console.log(err);
    //                   } else {
    //                       campground.comments.push(comment);
    //                       campground.save();
    //                       console.log("Added a new comment");
    //                   }
    //               }
    //               )
    //       }
    //   }) 
    // });
     });
   
}

module.exports = seedDB;

