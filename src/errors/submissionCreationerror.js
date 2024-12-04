const BaseError=require('./baseerror');

const {StatusCodes}=require('http-status-codes');

class SubmissionCreationError extends BaseError{
    constructor(details){
        super('not able to create submissison',StatusCodes.BAD_REQUEST,'submission failed',details);
    }
}

module.exports=SubmissionCreationError;