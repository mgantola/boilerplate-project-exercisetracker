const mongoose = require("mongoose")
let ExerciseTracker;

// creating user log nested schema
const exerciseSchema = new mongoose.Schema({
    description:{type:String,required:true},
    duration: {type:Number,
               required:true},
    date: {type:String}
    });

// ceating a model
ExerciseTracker = mongoose.model("ExerciseTracker", exerciseSchema);

exports.ExerciseTrackerModel = ExerciseTracker;