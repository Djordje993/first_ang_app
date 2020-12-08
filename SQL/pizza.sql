-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: pizza_ang
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pid_top`
--

DROP TABLE IF EXISTS `pid_top`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pid_top` (
  `pid_id` int unsigned NOT NULL,
  `top_id` int unsigned NOT NULL,
  KEY `fk_pid_idx` (`pid_id`),
  KEY `fk_top_idx` (`top_id`),
  CONSTRAINT `fk_pid` FOREIGN KEY (`pid_id`) REFERENCES `pizza_data` (`pid_id`),
  CONSTRAINT `fk_top` FOREIGN KEY (`top_id`) REFERENCES `topping` (`top_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pid_top`
--

LOCK TABLES `pid_top` WRITE;
/*!40000 ALTER TABLE `pid_top` DISABLE KEYS */;
INSERT INTO `pid_top` VALUES (1,1),(1,2),(2,1),(2,2),(2,3),(3,1),(3,2);
/*!40000 ALTER TABLE `pid_top` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pizza_data`
--

DROP TABLE IF EXISTS `pizza_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pizza_data` (
  `pid_id` int unsigned NOT NULL AUTO_INCREMENT,
  `pid_name` varchar(55) COLLATE utf8_slovak_ci NOT NULL,
  `pid_image` varchar(45) COLLATE utf8_slovak_ci NOT NULL DEFAULT '"../../../assets/pizzaBasic.jpg"',
  `pid_price` int NOT NULL,
  `pid_description` longtext COLLATE utf8_slovak_ci,
  PRIMARY KEY (`pid_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pizza_data`
--

LOCK TABLES `pizza_data` WRITE;
/*!40000 ALTER TABLE `pizza_data` DISABLE KEYS */;
INSERT INTO `pizza_data` VALUES (1,'Napolitanian pizza','\"../../../assets/pizzaBasic.jpg\"',10,'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo. '),(2,'Pepperoni pizza','\"../../../assets/pepperoniPizza.jpg\"',12,'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo. '),(3,'Californian pizza','\"../../../assets/californianPizza.jpg\"',10,'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo. ');
/*!40000 ALTER TABLE `pizza_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topping`
--

DROP TABLE IF EXISTS `topping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topping` (
  `top_id` int unsigned NOT NULL AUTO_INCREMENT,
  `top_name` varchar(55) COLLATE utf8_slovak_ci NOT NULL,
  PRIMARY KEY (`top_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topping`
--

LOCK TABLES `topping` WRITE;
/*!40000 ALTER TABLE `topping` DISABLE KEYS */;
INSERT INTO `topping` VALUES (1,'Fungi'),(2,'Ham'),(3,'Pepperoni');
/*!40000 ALTER TABLE `topping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `usr_id` int unsigned NOT NULL AUTO_INCREMENT,
  `usr_username` varchar(255) COLLATE utf8_slovak_ci NOT NULL,
  `usr_password` varchar(255) COLLATE utf8_slovak_ci NOT NULL,
  `usr_email` varchar(255) COLLATE utf8_slovak_ci NOT NULL,
  `usr_adress` varchar(255) COLLATE utf8_slovak_ci DEFAULT NULL,
  PRIMARY KEY (`usr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'pera1','1234','pera@gmail.com',NULL),(3,'zika1','1234','zika@gmail.com','Beograd'),(4,'mika1','1234','mika@gmail.com','Bla');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-08 10:12:45
