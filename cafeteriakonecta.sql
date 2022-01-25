-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2022 a las 20:06:45
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
(2, 'croissant', 'c78', 1300, 'panaderia', 10, '2022-01-13', 60),
(5, 'arepa con quesillo', 'acq23', 2600, 'panaderia', 7, '2021-12-12', 70),
(6, 'palitos de queso', 'pq23', 2000, 'panaderia', 0, '2022-01-20', 40),
(7, 'bombom', 'bom5', 300, 'dulceria', 30, '2022-01-21', 34);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_producto` int(11) NOT NULL,
  `venta` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_producto`, `venta`) VALUES
(5, 3),
(6, 3),
(6, 2),
(6, 3),
(6, 4),
(6, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD KEY `id_producto` (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
