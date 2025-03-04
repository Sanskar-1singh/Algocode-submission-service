const { fetchproblemDetail } = require('../apis/ProblemAdminService');
const InternalServerError=require('../errors/internalServerError');
const submissionproducers=require('../producers/SubmissionQueueProducers');
const SubmissionCreationError=require('../errors/submissionCreationerror');
class SubmissionService{
    constructor(SubmissionRepository){
        this.SubmissionRepository=SubmissionRepository;
    }

async pingCheck(){
    return 'pong';
}

async addSubmission(submission){
        
    //hit the problem admin service and fetch the problem details
    const problemId=submission.problemId;
    const userId=submission.userId;
    const submissionId=submission._id;
    console.log(submissionId,"hello");
    console.log(problemId);
    const problemadminapiresponse=await fetchproblemDetail(problemId);

    if(!problemadminapiresponse){
        throw new SubmissionCreationError(`failed to add the submissison due to internal issue`);
    }

     console.log(problemadminapiresponse.data.codeStubs);
       
     const languagecodeStubs=problemadminapiresponse.data.codeStubs.find(codeStub=>codeStub.language.toLowerCase()===submission.language.toLowerCase());
      console.log(languagecodeStubs);
     submission.code=languagecodeStubs.startSnipet+"\n\n"+submission.code+"\n\n"+languagecodeStubs.endSnipet;

  // then we are going to create entry in DB>>
    const submit= await this.SubmissionRepository.createSubmission(submission);
    //HANDLE ERROR TODO>>>
    if(!submit){
        throw new SubmissionCreationError(`failed to add the submissison due to internal issue`);
    }
    console.log("the submission is",submit);
     const response=await submissionproducers({
       [submit._id]:{
          code:submission.code,
          language:submission.language,
          inputCase:problemadminapiresponse.data.testcases[0].input,
          outputCase:problemadminapiresponse.data.testcases[0].output,
          userId,
          submissionId:submit._id.toString()
       }
     });
     console.log(submit._id);
     return {queueresponse:response,submission};
}

}

module.exports=SubmissionService;