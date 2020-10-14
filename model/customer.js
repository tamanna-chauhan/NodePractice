const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CustomerSchema = Schema(
        {

    name: {
        type: String,
        trim: true,
        default: ''
    },
    address: {
        type: String,
        trim: true,
        default: ''
    }
},
{
    versionKey: false,
    timestamps: true
}    

)


module.exports = mongoose.model('Customer',CustomerSchema,'customers')