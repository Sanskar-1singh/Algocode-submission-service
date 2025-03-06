const fastify=require('fastify')({logger:true});//immediately called fastify constructor>>

const app=require('./app');
const connectToDB = require('./config/db.config');

const serverConfig=require('./config/serverConfig');
const errorHandler=require('./utils/errorhandler');
const evaluationworker = require('./workers/evaluationworker');
 //fastify.register(require('@fastify/routes'));
fastify.register(app);  
fastify.setErrorHandler(errorHandler);
fastify.listen({port:serverConfig.PORT},async(err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    await connectToDB();
evaluationworker('evaluationQueue');

    console.log('db connected');
    console.log(`server up at port ${serverConfig.PORT}`);
      console.log(fastify.routes);
})
    