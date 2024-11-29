const SubmissionQueue=require('../queues/SubmissionQueue');

module.exports=async  function(payload){
    await SubmissionQueue.add("SubmissionJobs",payload);
    console.log("successfully added a new job");
} 