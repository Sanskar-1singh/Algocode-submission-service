const SubmissionService = require('./SubmissionService');
const testService=require('./SubmissionService');
const fastifyPlugins=require('fastify-plugin');
async function servicePlugins(fastify,options){
    fastify.decorate('SubmissionService',new SubmissionService(this.SubmissionRepository));

}

module.exports=fastifyPlugins(servicePlugins); 