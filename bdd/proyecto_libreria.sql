-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 01-06-2020 a las 04:57:30
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_libreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_orden`
--

DROP TABLE IF EXISTS `detalle_orden`;
CREATE TABLE IF NOT EXISTS `detalle_orden` (
  `id_detalle` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) NOT NULL,
  `idOrden` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `fk_orden_detalleOrden` (`idOrden`),
  KEY `fk_producto_detalleOrden` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen`
--

DROP TABLE IF EXISTS `imagen`;
CREATE TABLE IF NOT EXISTS `imagen` (
  `id_imagen` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_img` varchar(30) NOT NULL,
  `foto_img` bit(50) DEFAULT NULL,
  `idProducto` int(11) NOT NULL,
  PRIMARY KEY (`id_imagen`),
  KEY `fk_producto_imagen` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingreso`
--

DROP TABLE IF EXISTS `ingreso`;
CREATE TABLE IF NOT EXISTS `ingreso` (
  `usuario` varchar(20) NOT NULL,
  `clave` varchar(15) NOT NULL,
  `cedRegistro` varchar(10) NOT NULL,
  PRIMARY KEY (`usuario`),
  KEY `fk_registro_ingreso` (`cedRegistro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

DROP TABLE IF EXISTS `orden`;
CREATE TABLE IF NOT EXISTS `orden` (
  `id_orden` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_orden` date NOT NULL,
  `codingreso` varchar(20) NOT NULL,
  PRIMARY KEY (`id_orden`),
  KEY `fk_ingreso_orden` (`codingreso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_prod` varchar(50) NOT NULL,
  `num_pag` int(50) DEFAULT NULL,
  `tamaño` varchar(50) DEFAULT NULL,
  `precio` double NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

DROP TABLE IF EXISTS `registro`;
CREATE TABLE IF NOT EXISTS `registro` (
  `cedula` varchar(10) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `direccion` varchar(30) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono1` varchar(10) NOT NULL,
  `telefono2` varchar(10) DEFAULT NULL,
  `idPerfil` int(11) NOT NULL,
  PRIMARY KEY (`cedula`),
  KEY `fk_ingreso_tipoperfil` (`idPerfil`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_perfil`
--

DROP TABLE IF EXISTS `tipo_perfil`;
CREATE TABLE IF NOT EXISTS `tipo_perfil` (
  `id_perfil` int(11) NOT NULL AUTO_INCREMENT,
  `perfil` varchar(10) NOT NULL,
  PRIMARY KEY (`id_perfil`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_orden`
--
ALTER TABLE `detalle_orden`
  ADD CONSTRAINT `fk_producto_detalleOrden` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`id_producto`);

--
-- Filtros para la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD CONSTRAINT `fk_producto_imagen` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`id_producto`);

--
-- Filtros para la tabla `ingreso`
--
ALTER TABLE `ingreso`
  ADD CONSTRAINT `fk_registro_ingreso` FOREIGN KEY (`cedRegistro`) REFERENCES `registro` (`cedula`);

--
-- Filtros para la tabla `orden`
--
ALTER TABLE `orden`
  ADD CONSTRAINT `fk_ingreso_orden` FOREIGN KEY (`codingreso`) REFERENCES `ingreso` (`usuario`);

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `fk_ingreso_tipoperfil` FOREIGN KEY (`idPerfil`) REFERENCES `tipo_perfil` (`id_perfil`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
