-- MEMBER SEEDS

INSERT INTO members (memberName, emailAddress, password, contactNum, BloodType) 

VALUES ('Margaret Smith', 'maggie@something.com', 'maggster875', 4078563425, 'A'),

VALUES ('Mike Smith', 'mike@sleepy.com', 'deepsleep333', 3219994567, 'B'),

VALUES ('Jimmy', 'jim@aol.com', 'happy!!!', 4075556671, 'O'),

VALUES ('Kate', 'ksmithy@gmail.com', '#@#!!ajvnkl3546', 4074442231, 'AB'),

VALUES ('Belinda Bees', 'bb@disney.com', 'mouseparade111', 3215640091, 'O')

VALUES ('Samantha Rose', 'samr@gmail.com', 'flowers65!!2', 4074441121, 'A')

VALUES ('Jorge Fernandez', 'jiorjito@gmail.com', '3gfriends47e!!', 3211234567, 'A');


-- CORP MEMBERS

INSERT INTO corporateMembers (companyName, memberName, emailAddress, password, contactNum, contribution)

VALUES ('Mike\'s Pools and Spas', 'Mike France', 'mikef@poolsandspas.com', 'poolspools776', 4078889091, 'Our company will contribute cleaning supplies to the areas in need.'),

VALUES ('AndMed', 'Jane Smith', 'janes@andmed.com', ,'medsandmeds111', 8004350921, 'We\'ll provide food and bottled water to all shelters in a 1 mile radius of the impacted location, or any others in places of absolute need.'),

VALUES ('Local Sub Shop', 'Harry Hungry', 'harry@ilovesubs.com', 'hungryhungryhippos', 3219900032, 'We can provide 25 6 inch subs to a shelter in need.'),

VALUES ('Progressive Pools and Spas', 'Bill Smith', 'billsmith@ppandspas.com', 'smilesallday55', 4076934077, 'We can bathe people in our pools and it will be totaly awesome'),

VALUES ('Builder Depot', 'Helen Ripley', 'helen@builderdepot.com', 'buildingbuildings009!', 4078889191, 'We can provide building materials to places that need to reinforce and repair damaged buildings. We can also provide 500 bottled waters and 200 hot dogs. We can also send a food vending cart free of charge for 3 hours during any food drives or pantry efforts that happen.')

-- TASKS
INSERT INTO tasks (taskTitle, taskDescription, numVol, taskContact, taskNum, taskAddress, taskAddress2, taskCity, taskState, taskZip)

VALUES ('Blood Donation at ORMC', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 14, 'Samantha Pierce', 4075555555, '232 N Orange Ave.' 'building 2 suite 100', 'Orlando', 'FL', 32807),

VALUES ('Blood Donation at Quest Diagnostic Dr. Phillips', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 123, 'Barbara Blithe', 4078888888, '222 Phillips St.', 'suite 250', 'Orlando', 'FL', 32199),

VALUES ('Volunteers at the Citruis Bowl', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.', 55, 'Miguel Olavido', 3213456789, '19007 Paramore St.', '', 'Orlando', 'FL', 32806),

VALUES ('Volunteers at BrightHouse Stadium UCF', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 23, 'Steve Hallow', 4071112234, '444 ucf Way' 'building 25', 'Orlando', 'FL', 32801),

VALUES ('Medicall Background Volunteers Needed at Orange Ave and Wall St', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 3, 'Kate Grills', 4071110090, '3 N Orange Ave', '', 'Orlando', 'FL', 32816),

VALUES ('Soup Kitches Staff at Lake Eola', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 37, 'Victor Pedilla', 4075649921, '4589 Some St.', 'Suite 500', 'Orlando', 'FL', 32088);

-- CRISIS

INSERT INTO crisis (crisisName, crisisDescription)

VALUES ('Hurricane Annabel', 'Hurricane Annabel is projected to pass over the southern part of Orlando with sustained winds of up to 110 mph. Residents are urged to seek shelter in their homes or at a assigned shelter thorughout the Orland area.');