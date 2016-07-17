-- MEMBER SEEDS

use cc_db;

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Admin', 'admin@crisiscorp.com', 'password1234', 1); 

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Margaret Smith', 'maggie@something.com', 'maggster875', 2); 
INSERT INTO members (userID, bloodType) VALUES (LAST_INSERT_ID(),'A');

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Mike Smith', 'mike@sleepy.com', 'deepsleep333', 2); 
INSERT INTO members (userID, bloodType) VALUES (LAST_INSERT_ID(),'B');

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Jimmy', 'jim@aol.com', 'happy!!!', 2);
INSERT INTO members (userID, bloodType) VALUES (LAST_INSERT_ID(),'O');

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Kate', 'ksmithy@gmail.com', '#@#!!ajvnkl3546', 2);
INSERT INTO members (userID, bloodType) VALUES (LAST_INSERT_ID(),'AB');

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Belinda Bees', 'bb@disney.com', 'mouseparade111', 2); 
INSERT INTO members (userID, bloodType) VALUES (LAST_INSERT_ID(),'O');

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Samantha Rose', 'samr@gmail.com', 'flowers65!!2', 2); 
INSERT INTO members (userID, bloodType) VALUES (LAST_INSERT_ID(),'A');

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Jorge Fernandez', 'jiorjito@gmail.com', '3gfriends47e!!', 2); 
INSERT INTO members (userID, bloodType) VALUES (LAST_INSERT_ID(),'A');

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Mike France', 'mikef@poolsandspas.com', 'poolspools776', 3);
INSERT INTO corporateMembers (userID, companyName, donationDesc) VALUES (LAST_INSERT_ID(), 'Mike\'s Pools and Spas', 'Our company will contribute cleaning supplies to the areas in need.');

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Jane Smith', 'janes@andmed.com', 'medsandmeds111', 3);
INSERT INTO corporateMembers (userID, companyName, donationDesc) VALUES (LAST_INSERT_ID(), 'AndMed', 'We\'ll provide food and bottled water to all shelters in a 1 mile radius of the impacted location, or any others in places of absolute need.');

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Harry Hungry', 'harry@ilovesubs.com', 'hungryhungryhippos', 3);
INSERT INTO corporateMembers (userID, companyName, donationDesc) VALUES (LAST_INSERT_ID(), 'Local Sub Shop', 'We can provide 25 6 inch subs to a shelter in need.');

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Bill Smith', 'billsmith@ppandspas.com', 'smilesallday55', 3); 
INSERT INTO corporateMembers (userID, companyName, donationDesc) VALUES (LAST_INSERT_ID(), 'Progressive Pools and Spas', 'We can bathe people in our pools and it will be totaly awesome'); 

INSERT INTO Users (userName, emailAddress, password, userType) VALUES ('Helen Ripley', 'helen@builderdepot.com', 'buildingbuildings009!', 3);
INSERT INTO corporateMembers (userID, companyName, donationDesc) VALUES (LAST_INSERT_ID(), 'Builder Depot', 'We can provide building materials to places that need to reinforce and repair damaged buildings. We can also provide 500 bottled waters and 200 hot dogs. We can also send a food vending cart free of charge for 3 hours during any food drives or pantry efforts that happen.');

-- TASKS
INSERT INTO availableTasks (taskTitle, taskDescript, volsNeeded, volsRemaining contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip)

VALUES ('Blood Donation at ORMC', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.', 14, 14, 'Samantha Pierce', 4075555555, '232 N Orange Ave.', 'building 2 suite 100', 'Orlando', 'FL', 32807),

('Blood Donation at Quest Diagnostic Dr. Phillips', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 123, 123, 'Barbara Blithe', 4078888888, '222 Phillips St.', 'suite 250', 'Orlando', 'FL', 32199),

('Volunteers at the Citrus Bowl', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.', 55, 55, 'Miguel Olavido', 3213456789, '19007 Paramore St.', '', 'Orlando', 'FL', 32806),

('Volunteers at BrightHouse Stadium UCF', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 23, 23, 'Steve Hallow', 4071112234, '444 ucf Way', 'building 25', 'Orlando', 'FL', 32801),

('Medicall Background Volunteers Needed at Orange Ave and Wall St', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 3, 3, 'Kate Grills', 4071110090, '3 N Orange Ave', '', 'Orlando', 'FL', 32816),

('Soup Kitches Staff at Lake Eola', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 37, 37, 'Victor Pedilla', 4075649921, '4589 Some St.', 'Suite 500', 'Orlando', 'FL', 32088);

-- CRISIS

INSERT INTO activeCrisis (crisisName, crisisDesc)

VALUES ('Hurricane Annabel', 'Hurricane Annabel is projected to pass over the southern part of Orlando with sustained winds of up to 110 mph. Residents are urged to seek shelter in their homes or at a assigned shelter thorughout the Orland area.');