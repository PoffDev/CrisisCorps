USE cc_db;


-- Corp *****DONE*****
-- Corp page get all corporate users *****DONE*****
SELECT corporateMembers.companyName, users.userName, users.emailAddress, corporateMembers.contactNum, corporateMembers.donationDesc
FROM corporateMembers
LEFT JOIN users
ON users.userID = corporateMembers.userID
ORDER By corporateMembers.companyName;


-- Crisis
-- Crisis page get all users telephone numbers
SELECT contactNum
FROM Users
WHERE userType = 2;

-- Crisis page get all users telephone numbers with specific blood type
SELECT users.contactNum, members.bloodType
FROM Users
LEFT JOIN members
ON users.userID=members.userID WHERE members.bloodType = 'B';


-- Dashboard *****DONE*****
-- Dashboard page number of volunteers needed *****DONE*****
SELECT SUM(volsRemaining)
FROM availableTasks;

-- Dashboard page number of members who have volunteered for a task *****DONE*****
SELECT SUM(volsNeeded - volsRemaining)
FROM availableTasks;

-- Dashboard page total number of members *****DONE*****
SELECT COUNT(*)
FROM members;

-- Dashboard page number of volunteer positions created from all tasks *****DONE*****
SELECT SUM(volsNeeded)
FROM availableTasks;

-- Dashboard page number of tasks with zero volunteer position remaining available *****DONE*****
SELECT SUM(volsNeeded = 0)
FROM availabletasks;

-- Dashboard page number of total tasks *****DONE*****
SELECT COUNT(*)
FROM availabletasks;

-- Dashboard page 3 tasks with task title, description and remaining vols ordered descending  *****DONE*****
SELECT taskTitle, taskDescript, volsRemaining
FROM availabletasks
ORDER BY volsRemaining DESC
LIMIT 3;


-- Profile
-- Profile page member profile by specific username
SELECT users.userType, users.userName, users.emailAddress, members.contactNum, members.bloodType
FROM users
LEFT JOIN members
ON users.userID = members.userID WHERE users.userId = 2 AND users.userType = 2
ORDER By users.username;

-- Profile page corporate profile by specific username
SELECT users.userType, corporateMembers.companyName, users.userName, users.emailAddress, users.password, corporateMembers.contactNum, corporateMembers.donationDesc
FROM corporateMembers
LEFT JOIN users 
ON users.userID = corporateMembers.userID WHERE users.userID = 9 AND users.userType = 3
ORDER By users.username;


-- Tasks *****DONE*****
-- Tasks page get all tasks and display title, description and remaining vols *****DONE*****
SELECT taskTitle, taskDescript, volsRemaining, taskId
FROM availabletasks
ORDER BY volsRemaining DESC;


-- Task *****DONE*****
-- Task page get specific task and display title, description, remaining vols and address *****DONE*****
SELECT taskId, taskTitle, taskDescript, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip
FROM availabletasks
WHERE taskId = 2;


-- Home *****DONE*****
-- Home page get crisis name and description
SELECT *
FROM activecrisis;