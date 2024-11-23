const testSevice=require('../services/testService');

async function pingRequest(req,res){

    const response=await testSevice.pingCheck();
    return res.send({data:response});
};

module.exports={pingRequest};