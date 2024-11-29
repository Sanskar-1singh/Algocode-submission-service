const Submisison=require('../models/SubmissionModels');

class SubmissionRepository{
    constructor(){
        this.SubmissionModels=Submisison;
    }

    async createSubmission(submission){
        const response=await this.SubmissionModels.create(submission);
        return response;
    }
}

module.exports=SubmissionRepository;