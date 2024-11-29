const fastify=require('fastify')({logger:true});//immediately called fastify constructor>>

const app=require('./app');
const connectToDB = require('./config/db.config');

const serverConfig=require('./config/serverConfig');

fastify.register(app);  
fastify.listen({port:serverConfig.PORT},async(err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    await connectToDB();
    console.log(`server up at port ${serverConfig.PORT}`);
})