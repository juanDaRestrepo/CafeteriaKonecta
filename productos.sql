-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-01-2022 a las 19:51:15
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cafeteriakonecta`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `referencia_producto` varchar(16) COLLATE latin1_spanish_ci NOT NULL,
  `precio_producto` int(20) NOT NULL,
  `categoria_producto` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `stock_producto` int(12) NOT NULL,
  `fecha_creacion_producto` date NOT NULL,
  `peso_producto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `referencia_producto`, `precio_producto`, `categoria_producto`, `stock_producto`, `fecha_creacion_producto`, `peso_producto`) VALUES
(1, 'papas margarita', 'pm32', 2500, 'mecato', 20, '2022-01-06', 40),
(2, 'croissant', 'c78', 1300, 'panaderia', 10, '2022-01-13', 60),
(3, 'churro', 'ch7856', 2000, 'panaderia', 0, '2022-01-06', 30),
(4, 'chocorramo', 'ch45', 1500, 'panaderia', 45, '1992-07-09', 45),
(5, 'arepa con quesillo', 'acq23', 2600, 'panaderia', 10, '2021-12-12', 70);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
