import connectDB from './backend/config/db.js'
import collisionRoutes from './backend/routes/collisionRoute.js'
import express from 'express'
import dotenv  from 'dotenv'
import cors from 'cors'

//connect database
connectDB()

//dotenv config
dotenv.config()

const app = express()
app.use(cors())

//Creating API for user
app.use('/api/collisions', collisionRoutes)
app.use('/api/collisions/getGender', collisionRoutes)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'LATrafficCollisions';
// const client = new MongoClient(url);
// // Use connect method to connect to the server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

//   client.close();
// });