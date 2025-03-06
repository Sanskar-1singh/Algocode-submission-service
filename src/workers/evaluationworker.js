const { Worker } = require('bullmq');
const redisConnection = require('../config/redisConfig');
const axios = require('axios');
const SubmissionRepository=require('../repository/Submissionrepo');
const submissionrepo=new SubmissionRepository();
function evaluationworker(queue) {
    const worker = new Worker(queue, async (job) => {
        try {
            if (job.name === 'evaluationJob') {
                console.log(`🔄 Processing evaluation job: ${job.id} ${JSON.stringify(job.data)}`);

                const response = await axios.post('http://localhost:3001/sendPayload', {
                    userId: job.data.userId,
                    response: job.data
                });
                console.log(`✅ API Response: ${response.status} ${response.statusText}`);
                console.log('final print',job.data.response.output)
                const update=await submissionrepo.updateSubmission(job.data.submissionId,job.data.response.status);
                console.log(update);
                return update;
                  
            } else {
                console.log(`❌ Not an evaluation job: ${job.name}`);
            }
        } catch (error) {
            console.error(`❌ Error processing job ${job.id}:`, error.message);
        }
    }, {
        connection: redisConnection
    });
}

module.exports = evaluationworker;
