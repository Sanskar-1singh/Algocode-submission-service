const dotenv=require('dotenv');

dotenv.config();

module.exports={
    PORT:process.env.PORT,
    ATLAS_DB_URl:process.env.ATLAS_DB_URl,
    NODE_ENV:process.env.NODE_ENV,
    REDIS_PORT:process.env.REDIS_PORT || "6379", 
    REDIS_HOST:process.env.REDIS_HOST || '127.0.0.1'
}