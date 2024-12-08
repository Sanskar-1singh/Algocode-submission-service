const mongoose=require('mongoose');

const submissionschema=new mongoose.Schema({
    userId:{
        type:String,
        required:[true,"user id for submission is missing"],
    },
    problemId:{
        type:String,
        required:[true,"problemId for submission is missing"],
    },
    code:{
        type:String,
        required:[true,"code for submission is missing"],
    },
    language:{
        type:String,
        required:[true,"language for submission is missing"],
    },
    status:{
        type:String,
         enum:["pending","success","RE","TLE","MLE","WA"],
         default:"pending",
    }
});

const Submission=mongoose.model('Submission',submissionschema);
module.exports=Submission;

