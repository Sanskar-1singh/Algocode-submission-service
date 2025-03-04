const testSevice=require('../services/SubmissionService');

async function pingRequest(req,res){

    const response=await testSevice.pingCheck();
    return res.send({data:response});
};


//ADD VALIDATION LAYER>>>
async function createSubmission(req,res){

    
    const response=await this.SubmissionService.addSubmission(req.body);
    console.log(response);
    return res.status(201).send({//here we actually use .send() in place of .json() as of in express>>>
        error:{},
        data:response,
        success:true,
        message:'created submission service successfully'
    })
}
module.exports={
    pingRequest,
    createSubmission
};