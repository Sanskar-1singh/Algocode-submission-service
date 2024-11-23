const fastifyPlugins=require('fastify-plugin')
async function v1plugin(fastify,options){
    fastify.register(require('./test/testRoutes'),{prefix:'/test'});
}

module.exports=v1plugin;