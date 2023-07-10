<?php

namespace Controllers;

use MVC\Router;

class LoginController {
    public static function index(Router $router)
    {
        
        //render a la vista 
        $router->render('home/index', [
            'titulo' => 'Pagina Principal'
        ]);
    }

    public static function login(Router $router) {

        if($_SERVER['REQUEST_METHOD'] === 'POST') {

        }
        //render a la vista
        $router->render('auth/login', [
            'titulo' => 'Iniciar Sesión'
        ]);
    }
    public static function logout()
    {
        echo 'Desde logout';

    }
    public static function crear(Router $router)
    {

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
        //render a la vista
        $router->render('auth/crear', [
            'titulo' => 'Crea una Cuenta en Circulo Medico Morteros'
        ]);
    }
    public static function olvide(Router $router)
    {

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
        //render a la vista
        $router->render('auth/olvide', [
            'titulo' => 'Recuperar Contraseña'
        ]);
    }
    public static function reestablecer(Router $router)
    {

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        }
        //mostrar a la vista
        $router->render('auth/reestablecer', [
            'titulo' => 'Reestablecer Password'
        ]);
    }
    public static function mensaje(Router $router)
    {

        //mostrar a la vista
        $router->render('auth/mensaje', [
            'titulo' => 'Cuenta Creada Exitosamente'
        ]);
    }
    public static function confirmar(Router $router)
    {

        //mostrar a la vista
        $router->render('auth/confirmar', [
            'titulo' => 'Confirma Tu Cuenta'
        ]);
    }
}