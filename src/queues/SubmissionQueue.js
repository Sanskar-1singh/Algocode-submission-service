const  {Queue} =require('bullmq');
const redisConnection=require('../config/redisConfig');

const Submissionqueue = new Queue('SubmissionQueue',{ connection:redisConnection});

module.exports=Submissionqueue;
