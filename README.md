# CS4440Project

The link to the dataset is https://www.kaggle.com/cityofLA/los-angeles-traffic-collision-data. We added this dataset in the repo as a compressed zip file since the dataset is 174 MB, which exceeds the max size, 100 MB, of a file that can be added in GitHub. To use the dataset, extract the dataset from the zip folder and then run the python script in database.py.

1. To run, make sure all dependencies are installed
2. Then run npm start in the src folder in frontend and make sure it runs on localhost 3000.
3. Make sure MongoDB Compass is connected to the localhost:27017 server. 
4. Import data.csv and make sure all the fields are the same type and name as the fields in Schema.js.
5. If using Mac, run brew services start mongodb-community. If this doesn't work, then run brew services restart mongodb-community.
6. Then run node server.js in the src folder in frontend and make sure it runs on localhost 5000.
7. If you do not see the collections, then refresh MongoDB Compass. 
