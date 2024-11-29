const testSevice=require('../services/SubmissionService');

async function pingRequest(req,res){

    const response=await testSevice.pingCheck();
    return res.send({data:response});
};


//ADD VALIDATION LAYER>>>
async function createSubission(req,res){
    const response=await this.SubmissionService.addSubmission(req.body);
    return res.status(201).send({
        error:{},
        data:response,
        success:true,
        message:'created submission service successfully'
    })
}
module.exports={
    pingRequest,
    createSubission
};