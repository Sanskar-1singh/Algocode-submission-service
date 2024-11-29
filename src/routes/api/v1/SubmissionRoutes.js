async function submissionRoutes(fastify,options){
    fastify.post('/',async(req,res)=>{
        return {data:["todo"]};
    })
}
module.exports=submissionRoutes;