const SubmissionService = require('./SubmissionService');
const fastifyPlugins=require('fastify-plugin');
async function servicePlugins(fastify,options){
    console.log(fastify.SubmissionRepository)
    fastify.decorate('SubmissionService',new SubmissionService(fastify.SubmissionRepository));

}

module.exports=fastifyPlugins(servicePlugins); 