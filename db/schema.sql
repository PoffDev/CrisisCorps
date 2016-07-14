CREATE DATABASE cc_db;

USE cc_db;

CREATE TABLE members (
	 ItemiD INTEGER(11) AUTO_INCREMENT NOT NULL,
	 MemberName varchar(30) NOT NULL,
	 EmailAddress varchar(30) NOT NULL,
	 ContactNum varchar(30),
	 TwitterHandle varchar(30) NOT NULL,
	 BloodType varchar(30) NOT NULL,
	 primary key (ItemID)
);

CREATE TABLE corporateMembers (
	 ItemiD INTEGER(11) AUTO_INCREMENT NOT NULL,
	 CompanyName varchar(30) NOT NULL,
	 ContactName varchar(30) NOT NULL,
	 EmailAddress varchar(30) NOT NULL,
	 ContactNum varchar(30),
	 DonationDesc varchar(30) NOT NULL,
	 primary key (ItemID)
);

CREATE TABLE AvailableTasks (
	 TaskID INTEGER(11) AUTO_INCREMENT NOT NULL,
	 TaskDescript varchar(30) NOT NULL,
	 ContactName varchar(30) NOT NULL,
	 ContactNum varchar(30),
	 TaskAddress varchar(30) NOT NULL,
	 TaskTime varchar(30),
	 VolunteersNeeded INTEGER(11), 
	 primary key (TaskID)
);

CREATE TABLE CurrentMemTasks (
	TaskID INTEGER(11) AUTO_INCREMENT NOT NULL,
    MemberName varchar(30) NOT NULL,
	TaskTime varchar(30), 
	primary key (TaskID)
);