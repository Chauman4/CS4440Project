# CS4440Project

Open INSTRUCTIONS.pdf for more details about the project.

The link to the dataset is https://www.kaggle.com/cityofLA/los-angeles-traffic-collision-data. We added this dataset in the repo as a compressed zip file since the dataset exceeds the max size in GitHub. To use the dataset, extract the dataset from the zip folder and then run the python script in database.py. Then, use excel to delete the 1st column and the location column and then run the python script in quadrantCalculator.py to get all the data we use for this project.

Instructions to run the application.
1. To run, make sure all dependencies are installed (npm installs and pips).
2. Then run npm start in the src folder in frontend and make sure it runs on localhost 3000.
3. Make sure MongoDB Compass is connected to the localhost:27017 server. 
4. Import data.csv and make sure all the fields are the same type and name as the fields in Schema.js.
5. If using Mac, run brew services start mongodb-community. If this doesn't work, then run brew services restart mongodb-community.
6. Then run node server.js in the src folder in frontend and make sure it runs on localhost 5000.
7. If you do not see the collections, then refresh MongoDB Compass.
8. Then, go to localhost 3000 and the website should be running and working.

The images below show an example of the website working and with a dataset running correctly.
<div>
  <img src="https://github.com/Chauman4/CS4440Project/blob/main/HomePage.png" height="400">
</div>
<div>
  <img src="https://github.com/Chauman4/CS4440Project/blob/main/RaceAgeGender.png" height="400">
</div>
<div>
  <img src="https://github.com/Chauman4/CS4440Project/blob/main/PieChart.png" height="400">
</div>
<div>
  <img src="https://github.com/Chauman4/CS4440Project/blob/main/LineGraph.png" height="400">
</div>
<div>
  <img src="https://github.com/Chauman4/CS4440Project/blob/main/Holidays.png" height="400">
</div>
<div>
  <img src="https://github.com/Chauman4/CS4440Project/blob/main/HeatMap.png" height="400">
</div>
<div>
  <img src="https://github.com/Chauman4/CS4440Project/blob/main/GenderByMonth.png" height="400">
</div>
<div>
  <img src="https://github.com/Chauman4/CS4440Project/blob/main/DaysWithMostCollisionsPerArea.png" height="400">
</div>
<div>
  <img src="https://github.com/Chauman4/CS4440Project/blob/main/DataWithMostCollisionsPerQuadrant.png" height="400">
</div>
<div>
  <img src="https://github.com/Chauman4/CS4440Project/blob/main/Collisions.png" height="400">
</div>
