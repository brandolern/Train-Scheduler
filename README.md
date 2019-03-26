# Train-Scheduler

##How It Works
Add trains to the schedule by filling out the form at the bottom. Choose a name, destination, time of day that the train
starts running, and how frequently the train arrives(in minutes). You will then see your train posted in the table above the form
with the time of the next arrival, based on the current time, and how many minutes until that time. 

##Functionality
This application uses google's firebase real time database, so every time something is submitted with the form it pushes it to the database.
This means that even when a user refreshes the page the current train schedule will still be there. The arrival times and minutes until arrival are calculated based on the actual local time, using moment.js. 
