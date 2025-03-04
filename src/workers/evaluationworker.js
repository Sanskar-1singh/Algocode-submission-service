const {Worker}=require('bullmq');
const redisConnection = require('../config/redisConfig');

function evaluationWorker(queue){
    new Worker('evaluationqueue',async job=>{
        if(job.name=='evaluationjob'){
            console.log(job);
        }
    },{
        connection:redisConnection
    })
}

module.exports=evaluationWorker;