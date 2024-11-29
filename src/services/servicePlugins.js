const SubmissionService = require('./SubmissionService');
const fastifyPlugins=require('fastify-plugin');
async function servicePlugins(fastify,options){
    fastify.decorate('SubmissionService',new SubmissionService(fastify.SubmissionRepository));

}

module.exports=fastifyPlugins(servicePlugins); 