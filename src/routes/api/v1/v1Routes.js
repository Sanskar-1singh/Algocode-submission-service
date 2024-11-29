const fastifyPlugins=require('fastify-plugin')
async function v1plugin(fastify,options){
    fastify.register(require('./SubmissionRoutes'),{prefix:'/submission'});
}

module.exports=v1plugin;