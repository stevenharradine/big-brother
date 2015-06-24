-- phpMyAdmin SQL Dump
-- version 4.2.6deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 24, 2015 at 08:07 AM
-- Server version: 5.5.41-0ubuntu0.14.10.1
-- PHP Version: 5.5.12-2ubuntu4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `big_brother`
--

-- --------------------------------------------------------

--
-- Table structure for table `disk_usage`
--

CREATE TABLE IF NOT EXISTS `disk_usage` (
`index` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `host` text NOT NULL,
  `path` text NOT NULL,
  `percent` float NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `disk_usage`
--
ALTER TABLE `disk_usage`
 ADD PRIMARY KEY (`index`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `disk_usage`
--
ALTER TABLE `disk_usage`
MODIFY `index` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;