const Submisison=require('../models/SubmissionModels');

class SubmissionRepository{
    constructor(){
        this.SubmissionModels=Submisison;
    }

    async createSubmission(submission){
        const response=await this.SubmissionModels.create(submission);
        return response;
    }

    async updateSubmission(id,data){
        const response=await  this.SubmissionModels.findByIdAndUpdate(id,{status:data},{new:true});
        return response;
    }
}

module.exports=SubmissionRepository;