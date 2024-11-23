const testService=require('./testService');
const fastifyPlugins=require('fastify-plugin');
async function servicePlugins(fastify,options){
    console.log(testService,fastify);
    fastify.decorate('testService',testService);
    console.log(testService,fastify);
}

module.exports=fastifyPlugins(servicePlugins);