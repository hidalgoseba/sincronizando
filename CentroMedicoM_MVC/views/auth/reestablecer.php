<div class="contenedor reestablecer">

    <?php include_once __DIR__ . '/../templates/nombre-sitio.php'; ?>
    <div class="contenedor-sm">
        <p class="descripcion-pagina">Ingresa Tu Nuevo Password</p>

        <form action="/reestablecer" class="formulario" method="POST">
            <div class="campo">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Ingresa Tú password" name="password" />
            </div>
            <input type="submit" class="boton" value="Guardar Password">
        </form>
        <div class="acciones">
            <a href="/crear">No tienes una cuenta? Crea Una</a>
            <a href="/olvide">Olvidaste tu password?</a>
        </div>
    </div>

</div>