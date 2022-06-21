//datos
var usuarios = [];
var codigo;
if(localStorage.getItem("usuarios") == null)
{
    usuarios = [];

}
else
{
    usuarios =JSON.parse(localStorage.getItem("usuarios"));
}

//comprobar la informacion
function comprobarDatos()
{
    const codigo_usario = document.querySelector("#codigo_usuario");
     codigo = codigo_usario.value;
    if(codigo)
    {
         //obtenemos la fecha y hora del usuario despues de logiarse.
            var fechaHoy = new Date();
            var fechaAct = fechaHoy.getDate() + "/" + (fechaHoy.getMonth()+1) + "/" + fechaHoy.getFullYear();
            var hora = fechaHoy.getHours() + ':' + fechaHoy.getMinutes();
            var hora_salida = "";
            var fecha_salida="";
            var objeto_usuario = {codigo,fechaAct,hora,hora_salida,fecha_salida};
            // guardamos la fecha y la hora
            usuarios.push(objeto_usuario);
            guardarDatos();
    }
}
//GUARDAR LOS DATOS
function guardarDatos()
{
    //guarda DATOSS USUARIO
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    localStorage.setItem("codigo_usuario",JSON.stringify(codigo));
}