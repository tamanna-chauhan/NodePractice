const express = require('express')


const database = require('./database')
const CustomerModel = require('./model/customer.js')

const app = express()
var str =''

app.get('/', function(req, res) {
    
    CustomerModel.find({}, (err, result) => {
        if(err){
            res.send(err)
            return
        }
        result.forEach(element => {
            console.log(element)
            if(element != null){
                str = str + "  Name " + element.name +  "</br>"
            }
        })
        res.send(str)
        return
    })

 app.get('/:id',function(req, res) {

    console.log(req.params)
    console.log(req.query)
    res.send('success')
 })

    /**
     * let cusotmers = await CustomerMode.find({})
     * 
    */
    // customer.forEach(element => {
    //     console.log(element)
    // });
})

database.iniitialize(err => {
    if(err){
        console.log('Error in connection to database')
        console.log(err)
        process.exit(1)
    }
    else{
        console.log('Connected to database')
        app.listen(3000, () => {
            console.log('server running well Great Tamanna!!!')
        }).on('error',(e) => console.log(console.error(e)))
    }
})

// var str =''

// MongoClient.connect(url,function(err, db){

//     console.log('Connected')
//     // db.collection('customers').insertOne({
//     //     name: 'Tamanna',
//     //     address: 'Madhapur'
//     // });
//     // console.log('inserted')
//     var cursor = db.collection('customers').find();

//     cursor.each(function(err, doc){
//         console.log(doc)
//     });

// });


// app.route('/name').get(function(req, res)
// {

//     MongoClient.connect(url, function(err, db){
//         var cursor = db.collection('customers').find();
//         cursor.each(function(err, item){

//             if(item != null) {

//                 str = str + "  Name " + item.name +  "</br>"
//             }
//         });

//         res.send(str);
//         db.close();
//     })
// })
// app.listen(3000,() => {
//     console.log('server running')
// })