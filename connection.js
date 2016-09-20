const MongoClient = require('mongodb').MongoClient
module.exports = function(callback) {
        MongoClient.connect('mongodb://jaisanas2:islamislam@ds033126.mlab.com:33126/jaisanas_test', (err, database) => {
                // ... start the server
                if( err ) throw err
                callback(database)
        })
}
