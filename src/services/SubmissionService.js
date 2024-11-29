const submissionproducers=require('../producers/SubmissionQueueProducers');
class SubmissionService{
    constructor(SubmissionRepository){
        this.SubmissionRepository=SubmissionRepository;
    }

async pingCheck(){
    return 'pong';
}

async addSubmission(submission){
    const submit=this.SubmissionRepository.createSubmission(submission);
    //HANDLE ERROR TODO>>>
    if(!submission){
        throw {message:"not able to create submission"};
    }
    console.log(submission);
     const response=await submissionproducers(submission);
     return {queueresponse:response,submission};
}

}

module.exports=SubmissionService;