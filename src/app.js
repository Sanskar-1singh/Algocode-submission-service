const fastifyPlugins=require('fastify-plugin');
const servicePlugins = require('./services/servicePlugins');
const repoPlugins=require('./repository/repositoryPlugins');
/**
 * @param {Fastify object} fastify
 * @param {} options
 */

async function app(fastify,options){
         fastify.register(require('@fastify/cors'));
         fastify.register(repoPlugins);
         fastify.register(servicePlugins);
         //register test route
         fastify.register(require('./routes/api/apiRoutes'),{prefix:'/api'});
        
}

module.exports=fastifyPlugins(app);