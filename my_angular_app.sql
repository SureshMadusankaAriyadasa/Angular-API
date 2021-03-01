-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2021 at 05:09 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_angular_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `todoapp`
--

CREATE TABLE `todoapp` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `complete` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todoapp`
--

INSERT INTO `todoapp` (`id`, `username`, `description`, `date`, `complete`) VALUES
(1, 'suresh', 'Learn to Angulaer', '2021-02-01', 0),
(2, 'madusanka', 'Learn to NgRx', '2021-02-17', 0),
(3, 'kasun', 'Learn to MySQL', '2021-02-02', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todoapp`
--
ALTER TABLE `todoapp`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
