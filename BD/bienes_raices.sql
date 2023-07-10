-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-05-2021 a las 01:00:41
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bienes_raices`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propiedades`
--

CREATE TABLE `propiedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(60) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `descripcion` longtext NOT NULL,
  `habitaciones` int(1) NOT NULL,
  `wc` int(1) NOT NULL,
  `estacionamiento` int(1) NOT NULL,
  `creado` date NOT NULL,
  `vendedorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `propiedades`
--

INSERT INTO `propiedades` (`id`, `titulo`, `precio`, `imagen`, `descripcion`, `habitaciones`, `wc`, `estacionamiento`, `creado`, `vendedorId`) VALUES
(28, 'Casa en la playa MVC', '250000.00', '798972e84046c8e212918a537d279459.jpg', 'casa en la playacasa en la playacasa en la playacasa en la playacasa en la playacasa en la playacasa en la playacasa en la playacasa en la playacasa en la playacasa en la playacasa en la playacasa en la playa', 3, 3, 3, '2021-03-18', 2),
(37, ' depto madera', '789456.00', '01311488d623ef6a1f10d6659fec54e6.jpg', 'ldfk ngwdo jfngefj vnwlefvj neñfvneñfokv neñofkv newñofv ne wf ovnbew òfkvn \r\n wefov nwe ño fvn ke wñofjvn ewñ fjbn ewñ  f jbvn e wñ fvjnwe  fñkv jnwe ñfkvjne', 5, 3, 1, '2021-04-02', 1),
(39, ' departamento chico', '25000.00', '6750d59a23062004b10b7fad020ef7f6.jpg', 'pequeño pero con gran confort para 2 personas pequeño pero con gran confort para 2 personas pequeño pero con gran confort para 2 personas pequeño pero con gran confort para 2 personas pequeño pero con gran confort para 2 personas pequeño pero con gran confort para 2 personas ', 1, 1, 1, '2021-04-02', 1),
(43, ' Mi casa nueva ACTUALIZADO', '123456.00', 'd95762c9ac9d2e806363a3260290d03e.jpg', 'Mi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nuevaMi casa nueva', 3, 2, 1, '2021-04-03', 1),
(44, ' Mi casa NUEVA', '32323232.00', '56245c549c3aa87dcd7c0d7c1d8ae24b.jpg', 'Mi casa NUEVA Mi casa NUEVA Mi casa NUEVA vMi casa NUEVA Mi casa NUEVA Mi casa NUEVA Mi casa NUEVA Mi casa NUEVA Mi casa NUEVA Mi casa NUEVA Mi casa NUEVA Mi casa NUEVA Mi casa NUEVA Mi casa NUEVA Mi casa NUEVA', 3, 2, 1, '2021-04-12', 3),
(47, ' Mi casa MVC1', '850000.00', '89070eb70a3328eb63fe41f6ee93517e.jpg', 'Mi casa MVC1 Mi casa MVC1 Mi casa MVC1 Mi casa MVC1 Mi casa MVC1 Mi casa MVC1 Mi casa MVC1 Mi casa MVC1 Mi casa MVC1 Mi casa MVC1 Mi casa MVC1 Mi casa MVC1  Mi casa MVC1 Mi casa MVC1 Mi casa MVC1', 3, 1, 1, '2021-04-15', 1),
(48, ' la casa de nacho', '125000.00', 'b8665eecc011877a4775b202f4f6cfa7.jpg', 'la casa de nacho la casa de nacho la casa de nacho la casa de nacho la casa de nacho la casa de nacho la casa de nacho la casa de nacho la casa de nacho la casa de nacho la casa de nacho la casa de nacho la casa de nacho la casa de nacho', 3, 2, 1, '2021-05-01', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(1) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`) VALUES
(5, 'correo@correo.com', '$2y$10$MEAB.F..8cddLVL39Gsjs.1qXh/0.aAPxdJTjh2FYZKf35bQD18k.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedores`
--

CREATE TABLE `vendedores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `telefono` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vendedores`
--

INSERT INTO `vendedores` (`id`, `nombre`, `apellido`, `telefono`) VALUES
(1, 'Sebastian', 'Hidalgo', '3516288367'),
(2, 'alejandra', 'Rodriguez Rodriguez', '3516609510'),
(3, 'Norma', 'Torres', '351852456'),
(5, 'Diego', 'Miranda', '3518795400'),
(7, ' Ignacio', 'Hidalgo', '8974563214'),
(8, ' Marcos ', 'Moreno', '0125469874');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `propiedades`
--
ALTER TABLE `propiedades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendedorId` (`vendedorId`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `propiedades`
--
ALTER TABLE `propiedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `propiedades`
--
ALTER TABLE `propiedades`
  ADD CONSTRAINT `propiedades_ibfk_1` FOREIGN KEY (`vendedorId`) REFERENCES `vendedores` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
