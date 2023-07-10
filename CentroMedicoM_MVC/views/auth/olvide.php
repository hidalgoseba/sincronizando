<div class="contenedor olvide">

    <?php include_once __DIR__ . '/../templates/nombre-sitio.php'; ?>
    <div class="contenedor-sm">
        <p class="descripcion-pagina">Recupera Tu Acceso</p>

        <form action="/olvide" class="formulario" method="POST">
            <div class="campo">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Ingresa Tú Email" name="email" />
            </div>
            <input type="submit" class="boton" value="Enviar Instrucciones">

        </form>
        <div class="acciones">
            <a href="/">Ya tienes una cuenta? Iniciar Sesión</a>
            <a href="/crear">No tienes una cuenta? Crea Una</a>
        </div>
    </div>

</div>