const moongoose = require('mongoose')
const dbname = 'mydatabase'

const url = `mongodb://localhost:27017/${dbname}`

module.exports.iniitialize = result =>{
    moongoose.connect(url, { useUnifiedTopology: true, useFindAndModify: false })
    .then(
        () => result(),
        err => result(err)
    )
}