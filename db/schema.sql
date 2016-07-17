CREATE DATABASE cc_db;

USE cc_db;

CREATE TABLE Users (
	 userID INTEGER(11) AUTO_INCREMENT NOT NULL,
	 userName varchar(30) NOT NULL,
	 emailAddress varchar(30) NOT NULL,
	 password varchar(30) NOT NULL,
	 contactNum varchar(30) NOT NULL,
	 userType INTEGER(11) NOT NULL,
	 primary key (userID)
);

CREATE TABLE members (
	 userID INTEGER(11) NOT NULL,
	 bloodType varchar(30) NOT NULL,
	 primary key (userID)
);

CREATE TABLE corporateMembers (
	 userID INTEGER(11) AUTO_INCREMENT NOT NULL,
	 companyName varchar(30) NOT NULL,
	 donationDesc varchar(900) NOT NULL,
	 primary key (userID)
);

CREATE TABLE availableTasks (
	 taskID INTEGER(11) AUTO_INCREMENT NOT NULL,
	 taskTitle varchar(90) NOT NULL,
	 taskDescript varchar(900) NOT NULL,
	 volsNeeded INTEGER(11) NOT NULL,
	 contactName varchar(30) NOT NULL,
	 contactNum varchar(30) NOT NULL,
	 taskAddress varchar(30) NOT NULL,
	 taskAddress2 varchar(30),
	 taskCity varchar(30) NOT NULL,
	 taskState varchar(30) NOT NULL,
	 taskZip varchar(30) NOT NULL,
	  
	 primary key (taskID)
);

CREATE TABLE activeCrisis (
	crisisName VARCHAR(90) NOT NULL,
	crisisDesc VARCHAR(900) NOT NULL
);