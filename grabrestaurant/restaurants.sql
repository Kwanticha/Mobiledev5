-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2023 at 11:32 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurants`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `imageurl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `type`, `imageurl`) VALUES
(2, 'ตี๋เย็นตาโฟรสเด็ด - ศาลาว่าการกรุงเทพฯ', 'อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZMTKBDTT2XJAJ/hero/65641d0fcdc14d4a8961f56f0ead6fa5_1598847900883974941.jpeg'),
(3, 'Double Eight นมหมี ขนมปังปิ้ง - บุญศิริ', 'Coupon, Coffee & Tea', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C23AHEBHR2EVDE/hero/1966655bcea44f3fbbef53846ac4344f_1634544119935492397.jpeg'),
(4, 'อาหารตามสั่งแยกสำราญราษฏร์ - ประตูผี', 'Coupon, Cooked to Order', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2L1WEBXA2TWFA/hero/e057e4bea31948c2b5d3d2af317d1800_1615864473481135416.jpeg'),
(5, 'Slice337 โรตีพิซซ่า - ถนนมหาไชย', 'Coupon, พิซซ่า', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2UTN32ENPCBHE/hero/f3be3cb194f541b48565e34fc00a07ab_1629280576417070881.jpeg'),
(6, 'โตซาลาเปา - มหาไชย', 'Coupon, ติ่มซำ', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2U3EUVHEZEATJ/hero/53e2624305484f9cba81770834ecd1c6_1624343909259233635.jpeg'),
(7, 'แม่ทุมผัดไทยเข่ง - ถนนศิริพงษ์', 'Coupon, อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2UKRJL1J7AYVT/hero/21274ead55e04d2f9d16ad01a2facff7_1624624981148132278.jpeg'),
(8, 'Bunny Crepes (เครปญี่ปุ่น บันนี่เครป) - อิสรภาพ 39', 'เบเกอรี่', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZDHREVYT6CZLE/hero/0e9e941dc3ee438da12e65951fefc25e_1604816709104037737.jpeg'),
(9, 'ก๊อก ก๊อก ชาบู - เซ็นหลุยส์', 'Coupon, อาหารสุขภาพ', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZDTDEAFE7X1EA/hero/bcb79edab98c47059e4830b61fcd1a8c_1591335427932247005.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
