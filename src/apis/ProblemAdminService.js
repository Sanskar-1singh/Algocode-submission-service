const axiosinstances=require('../config/axiosInstances');

const {PROBLEM_ADMIN_SERVICE_URL}=require('../config/serverConfig');

const PROBLEM_ADMIN_API_URL=`${PROBLEM_ADMIN_SERVICE_URL}/api/v1`;



async function fetchproblemDetail(problemId){
  try {
    const uri=PROBLEM_ADMIN_API_URL+`/problems/${problemId}`;
     const response=await axiosinstances.get(uri);
     console.log('sanskar')
     console.log('api response',response.data);
     return response.data;
  } catch (error) {
     console.log('something went wrong while fetching problem details');
     console.log(error);
  }
}

module.exports={
    fetchproblemDetail
}
//675087bc03404034253953ec