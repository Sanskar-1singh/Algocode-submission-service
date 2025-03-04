const fastifyPlugins=require('fastify-plugin');
const servicePlugins = require('./services/servicePlugins');
const repoPlugins=require('./repository/repositoryPlugins');
/**
 * @param {Fastify object} fastify
 * @param {} options
 */

async function app(fastify,options){//here both fastify and options are object>>
        await fastify.register(require('@fastify/cors'));
        await  fastify.register(repoPlugins);
        await  fastify.register(servicePlugins);
         //register test route
         await fastify.register(require('@fastify/routes'));
         await  fastify.register(require('./routes/api/apiRoutes'),{prefix:'/api'});
        
}

module.exports=fastifyPlugins(app);