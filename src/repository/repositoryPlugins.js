const SubmissionRepository = require('../repository/Submissionrepo');
const fastifyPlugins=require('fastify-plugin');
async function repoPlugins(fastify,options){
    fastify.decorate('SubmissionRepository',new SubmissionRepository());

}

module.exports=fastifyPlugins(repoPlugins); 