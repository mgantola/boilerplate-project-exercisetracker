const mongoose = require("mongoose")
let UserTracker;

// creating a user schema
const  userSchema = new mongoose.Schema({
    username: {type:String,required:true},
    count: {
       type: Number,
       default: 0
    },
     log: {
       type: Array,
    }
  });

// ceating a model
UserTracker = mongoose.model("UserTracker",userSchema);

exports.UserTrackerModel = UserTracker;