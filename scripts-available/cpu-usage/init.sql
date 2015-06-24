-- phpMyAdmin SQL Dump
-- version 4.2.6deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 24, 2015 at 12:15 AM
-- Server version: 5.5.41-0ubuntu0.14.10.1
-- PHP Version: 5.5.12-2ubuntu4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `big_brother`
--

-- --------------------------------------------------------

--
-- Table structure for table `cpu_usage`
--

CREATE TABLE IF NOT EXISTS `cpu_usage` (
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cpu_usage` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cpu_usage`
--
ALTER TABLE `cpu_usage`
 ADD PRIMARY KEY (`timestamp`);
