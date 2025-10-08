CREATE DATABASE  IF NOT EXISTS `db_bibliosomativa_b` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `db_bibliosomativa_b`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_bibliosomativa_b
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_autores`
--

DROP TABLE IF EXISTS `tbl_autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_autores` (
  `id_autor` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `nacionalidade` varchar(100) NOT NULL,
  PRIMARY KEY (`id_autor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_autores`
--

LOCK TABLES `tbl_autores` WRITE;
/*!40000 ALTER TABLE `tbl_autores` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_emprestimos`
--

DROP TABLE IF EXISTS `tbl_emprestimos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_emprestimos` (
  `id_emprestimo` int(11) NOT NULL,
  `matricula` int(11) NOT NULL,
  `dt_emprestimo` date NOT NULL,
  `dt_prevista_devolucao` date NOT NULL,
  `dt_devolucao` date NOT NULL,
  `id_exemplar` int(11) NOT NULL,
  PRIMARY KEY (`id_emprestimo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_emprestimos`
--

LOCK TABLES `tbl_emprestimos` WRITE;
/*!40000 ALTER TABLE `tbl_emprestimos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_emprestimos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exemplares`
--

DROP TABLE IF EXISTS `tbl_exemplares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_exemplares` (
  `id_exemplar` int(11) NOT NULL,
  `status_emprstimo` varchar(100) NOT NULL,
  PRIMARY KEY (`id_exemplar`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exemplares`
--

LOCK TABLES `tbl_exemplares` WRITE;
/*!40000 ALTER TABLE `tbl_exemplares` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_exemplares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_livros`
--

DROP TABLE IF EXISTS `tbl_livros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_livros` (
  `ISBN` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `ano_publicacao` date NOT NULL,
  `editora` varchar(100) NOT NULL,
  `genero` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_livros`
--

LOCK TABLES `tbl_livros` WRITE;
/*!40000 ALTER TABLE `tbl_livros` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_livros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_livrosautores`
--

DROP TABLE IF EXISTS `tbl_livrosautores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_livrosautores` (
  `id_livrosAutores` int(11) NOT NULL,
  `ISBN` int(11) NOT NULL,
  `id_autor` int(11) NOT NULL,
  PRIMARY KEY (`id_livrosAutores`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_livrosautores`
--

LOCK TABLES `tbl_livrosautores` WRITE;
/*!40000 ALTER TABLE `tbl_livrosautores` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_livrosautores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_membros`
--

DROP TABLE IF EXISTS `tbl_membros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_membros` (
  `matricula` int(11) NOT NULL,
  `nome_completo` varchar(100) NOT NULL,
  `enedereco` varchar(100) NOT NULL,
  `telefone` varchar(100) NOT NULL,
  PRIMARY KEY (`matricula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_membros`
--

LOCK TABLES `tbl_membros` WRITE;
/*!40000 ALTER TABLE `tbl_membros` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_membros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_bibliosomativa_b'
--

--
-- Dumping routines for database 'db_bibliosomativa_b'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-08 13:44:53
