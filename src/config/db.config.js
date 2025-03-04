const mongoose=require('mongoose');
const { ATLAS_DB_URl, NODE_ENV } = require('./serverConfig');

async function connectToDB(){
    try {
        if(NODE_ENV=="development"){
        await mongoose.connect('mongodb+srv://sanskarsingh812:vqPlAie3lQuX4isK@cluster0.ppeme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        //console.log('db conncted');   
    }
    } catch (error) {
        console.log("unable to connect to db");
        console.log(error);
    }
}

module.exports=connectToDB;