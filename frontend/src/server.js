// import connectDB from './backend/config/db.js'
// import collisionRoutes from './backend/routes/collisionRoute.js'
// import express from 'express'
// import dotenv  from 'dotenv'

// //connect database
// connectDB()

// //dotenv config
// dotenv.config()

// const app = express()

// //Creating API for user
// app.use('/api/collisions', collisionRoutes)

// const PORT = process.env.PORT || 5000

// //Express js listen method to run project on http://localhost:5000
// app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))

// export const MongoClient = require('mongodb').MongoClient;
// export const assert = require('assert');

// Connection URL
// export const url = 'mongodb://localhost:27017';

// Database Name
// export const dbName = 'LATrafficCollisions';
// export const client = new MongoClient(url);
// Use connect method to connect to the server

// const start = function() {
//     client.connect(function(err) {
//     assert.equal(null, err);
//     console.log('Connected successfully to server');

//     const db = client.db(dbName);

//     // var result = findByGender(db, function() {
//     //     closeConnection()
//     // }, "F");
//     })
// };

// var MongoClient = require('mongodb').MongoClient
  
// var Server = require('mongodb').Server;

// var mongoClient = new MongoClient(new Server('localhost', 27017));


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'LATrafficCollisions';
const client = new MongoClient(url);

const findByAge = async function(age) {
    // const MongoClient = require('mongodb').MongoClient;
    // const url = 'mongodb://localhost:27017';
    // const dbName = 'LATrafficCollisions';
    // const client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err => {
        // assert.equal(null, err);
        // console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('collisions');
        collection.find({ victimAge: age }).toArray(function(err, collisions) {
        //   assert.equal(err, null);
        //   console.log('findByAge');
        console.log(collisions);
        //   callback(collisions);
        // client.close();
        });
    })
}

findByAge(22)

// export const findByGender = function(gender) {
//     client.connect(function(err) {
//         // assert.equal(null, err);
//         // console.log('Connected successfully to server');
//         const db = client.db(dbName);
//         const collection = db.collection('collisions');
//         collection.find({ victimSex: gender }).toArray(function(err, collisions) {
//         // assert.equal(err, null);
//         //   console.log('findByAge');
//         //   console.log(collisions);
//         //   callback(collisions);
//         closeConnection()
//         });
//     })
// }

// export const closeConnection = function() {
//     client.close();
// }




























// const findByGender = function(db, callback, gender) {
//     // Get the documents collection
//     const collection = db.collection('collisions');
//     // Find some documents
//     collection.find({ victimSex: gender}).toArray(function(err, collisions) {
//       assert.equal(err, null);
//       console.log('Found the following records');
//       console.log(collisions);
//       callback(collisions);
//     });
//   };

//   const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('collisions');
//     // Insert some documents
//     collection.insertMany([{ victimSex: 'M'}, {victimSex: 'F'}], function(err, result) {
//       console.log('Inserted 2 documents into the collection');
//       callback(result);
//     });
//   };








//   start()

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'LATrafficCollisions';
// const client = new MongoClient(url);
// // Use connect method to connect to the server

// const findByAge = async function() {
//     client.connect(function(err) {
//         assert.equal(null, err);
//         console.log('Connected successfully to server');
      
//         const db = client.db(dbName);
//         findByGender(db, function() {
//             closeConnection()
//           }, "F");
//       });
// }

// const findByGender = function(db, callback, gender) {
//     // Get the documents collection
//     const collection = db.collection('collisions');
//     // Find some documents
//     var result = collection.find({ victimSex: gender}, { victimAge: 21 }).toArray(function(err, collisions) {
//       assert.equal(err, null);
//     //   console.log('Found the following records');
//     //   console.log(collisions);
//       callback(collisions);
//       return collisions;
//     });
//     return result;
//   };

//   const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('collisions');
//     // Insert some documents
//     collection.insertMany([{ victimSex: 'M'}, {victimSex: 'F'}], function(err, result) {
//       console.log('Inserted 2 documents into the collection');
//       callback(result);
//     });
//   };

//   const closeConnection = function() {
//     client.close();
//   }

//   console.log(findByAge())