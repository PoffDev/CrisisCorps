-- MySQL dump 10.13  Distrib 5.7.10, for osx10.11 (x86_64)
--
-- Host: localhost    Database: cc_db
-- ------------------------------------------------------
-- Server version	5.7.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(30) NOT NULL,
  `emailAddress` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `userType` int(11) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Admin','admin@crisiscorp.com','password1234',1),(2,'Margaret Smith','maggie@something.com','maggster875',2),(3,'Mike Smith','mike@sleepy.com','deepsleep333',2),(4,'Jimmy','jim@aol.com','happy!!!',2),(5,'Kate','ksmithy@gmail.com','#@#!!ajvnkl3546',2),(6,'Belinda Bees','bb@disney.com','mouseparade111',2),(7,'Samantha Rose','samr@gmail.com','flowers65!!2',2),(8,'Jorge Fernandez','jiorjito@gmail.com','3gfriends47e!!',2),(9,'Mike France','mikef@poolsandspas.com','poolspools776',3),(10,'Jane Smith','janes@andmed.com','medsandmeds111',3),(11,'Harry Hungry','harry@ilovesubs.com','hungryhungryhippos',3),(12,'Bill Smith','billsmith@ppandspas.com','smilesallday55',3),(13,'Helen Ripley','helen@builderdepot.com','buildingbuildings009!',3),(14,'josh','josh@josh.com','josh',2),(15,'notjosh','notjosh@josh.com','josh',3),(16,'notjosh','notjosh@josh.com','josh',2),(17,'notjosh','notjosh@josh.com','yes',2),(18,'josh','josh1@josh.com','josh',2),(19,'josh1@josh.com','josh1@josh.com','josh',2),(20,'notjosh','notjosh@josh.com','josh',2),(21,'notjosh','notjosh@josh.com','josh',2),(22,'test','testing@test.com','test',2);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activeCrisis`
--

DROP TABLE IF EXISTS `activeCrisis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activeCrisis` (
  `crisisName` varchar(90) NOT NULL,
  `crisisDesc` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activeCrisis`
--

LOCK TABLES `activeCrisis` WRITE;
/*!40000 ALTER TABLE `activeCrisis` DISABLE KEYS */;
INSERT INTO `activeCrisis` VALUES ('Hurricane Annabel','Hurricane Annabel is projected to pass over the southern part of Orlando with sustained winds of up to 110 mph. Residents are urged to seek shelter in their homes or at a assigned shelter thorughout the Orland area.');
/*!40000 ALTER TABLE `activeCrisis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `availableTasks`
--

DROP TABLE IF EXISTS `availableTasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `availableTasks` (
  `taskID` int(11) NOT NULL AUTO_INCREMENT,
  `taskTitle` varchar(90) NOT NULL,
  `taskDescript` varchar(900) NOT NULL,
  `volsNeeded` int(11) NOT NULL,
  `volsRemaining` int(11) NOT NULL,
  `contactName` varchar(30) NOT NULL,
  `contactNum` varchar(30) NOT NULL,
  `taskAddress` varchar(30) NOT NULL,
  `taskAddress2` varchar(30) DEFAULT NULL,
  `taskCity` varchar(30) NOT NULL,
  `taskState` varchar(30) NOT NULL,
  `taskZip` varchar(30) NOT NULL,
  PRIMARY KEY (`taskID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `availableTasks`
--

LOCK TABLES `availableTasks` WRITE;
/*!40000 ALTER TABLE `availableTasks` DISABLE KEYS */;
INSERT INTO `availableTasks` VALUES (1,'Blood Donation at ORMC','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.',14,14,'Samantha Pierce','4075555555','232 N Orange Ave.','building 2 suite 100','Orlando','FL','32807'),(2,'Blood Donation at Quest Diagnostic Dr. Phillips','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',123,123,'Barbara Blithe','4078888888','222 Phillips St.','suite 250','Orlando','FL','32199'),(3,'Volunteers at the Citrus Bowl','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.',55,55,'Miguel Olavido','3213456789','19007 Paramore St.','','Orlando','FL','32806'),(4,'Volunteers at BrightHouse Stadium UCF','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',23,23,'Steve Hallow','4071112234','444 ucf Way','building 25','Orlando','FL','32801'),(5,'Medicall Background Volunteers Needed at Orange Ave and Wall St','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',3,3,'Kate Grills','4071110090','3 N Orange Ave','','Orlando','FL','32816'),(6,'Soup Kitches Staff at Lake Eola','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',37,37,'Victor Pedilla','4075649921','4589 Some St.','Suite 500','Orlando','FL','32088');
/*!40000 ALTER TABLE `availableTasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corporateMembers`
--

DROP TABLE IF EXISTS `corporateMembers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `corporateMembers` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(30) DEFAULT NULL,
  `contactNum` varchar(30) DEFAULT NULL,
  `donationDesc` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corporateMembers`
--

LOCK TABLES `corporateMembers` WRITE;
/*!40000 ALTER TABLE `corporateMembers` DISABLE KEYS */;
INSERT INTO `corporateMembers` VALUES (9,'Mike\'s Pools and Spas',NULL,'Our company will contribute cleaning supplies to the areas in need.'),(10,'AndMed',NULL,'We\'ll provide food and bottled water to all shelters in a 1 mile radius of the impacted location, or any others in places of absolute need.'),(11,'Local Sub Shop',NULL,'We can provide 25 6 inch subs to a shelter in need.'),(12,'Progressive Pools and Spas',NULL,'We can bathe people in our pools and it will be totaly awesome'),(13,'Builder Depot',NULL,'We can provide building materials to places that need to reinforce and repair damaged buildings. We can also provide 500 bottled waters and 200 hot dogs. We can also send a food vending cart free of charge for 3 hours during any food drives or pantry efforts that happen.');
/*!40000 ALTER TABLE `corporateMembers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `userID` int(11) NOT NULL,
  `contactNum` varchar(30) DEFAULT NULL,
  `bloodType` varchar(30) NOT NULL,
  `activeTasks` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (2,NULL,'A',NULL),(3,NULL,'B',NULL),(4,NULL,'O',NULL),(5,NULL,'AB',NULL),(6,NULL,'O',NULL),(7,NULL,'A',NULL),(8,NULL,'A',NULL),(22,'','',NULL);
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-22 19:59:38
