var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware") //automatically searches index! - special name

router.get("/", function(req,res){
    Campground.find({}, function(err,allCampgrounds){
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
        } 
    });
});

router.post("/", middleware.isLoggedIn, function(req,res){
    var name = req.body.campName;
    var image = req.body.campImage;
    var desc = req.body.campDescription;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description: desc, author: author};
    Campground.create(newCampground, function(err,newlyCreated){
       if (err) {
           console.log(err);
       } else {
           res.redirect("/campgrounds");
       } 
    });
});

router.get("/new", middleware.isLoggedIn, function(req,res){
    res.render("campgrounds/new");    
});

router.get("/:id", function(req,res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/show", {campground: foundCampground});        
        }    
    });
});

// EDIT CAMPGROUND ROUTE [form (edit part) needs to submit somewhere (update)]
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/edit", {campground: foundCampground});                        
        }
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampgrond){
       if (err) {
           res.redirect("/campgrounds");
       } else {
           res.redirect("/campgrounds/" + req.params.id)
       } 
    });
    //redirect somewhere (showpage)
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req,res){
   Campground.findByIdAndRemove(req.params.id, function(err){
       if (err) {
           res.redirect("/campgrounds/")
       } else {
           res.redirect("/campgrounds/")
       }
   })
});

module.exports = router;