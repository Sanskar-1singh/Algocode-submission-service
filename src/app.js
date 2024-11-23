const fastifyPlugins=require('fastify-plugin');
const servicePlugins = require('./services/servicePlugins');

/**
 * @param {Fastify object} fastify
 * @param {} options
 */

async function app(fastify,options){
         fastify.register(require('@fastify/cors'));

         //register test route
         fastify.register(require('./routes/api/apiRoutes'),{prefix:'/api'});
         fastify.register(servicePlugins);
}

module.exports=fastifyPlugins(app);