const createSubmission=require('../../../controllers/submissionController');
async function submissionRoutes(fastify,options){
    fastify.post('/',createSubmission.createSubmission); 
}
module.exports=submissionRoutes;