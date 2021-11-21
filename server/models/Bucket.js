const { Schema, model } = require('mongoose');


const bucketSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        required: true
    }
})

const Bucket = model("Bucket", bucketSchema )