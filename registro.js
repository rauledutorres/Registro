//datos
var codigos_usuarios = [];
var fechas_usuarios=[];
var horas_usuarios=[];
if(localStorage.getItem("codigos_usuarios") == null)
{
    codigos_usuarios = [];
    fechas_usuarios=[];
    horas_usuarios=[];
}
else
{
    codigos_usuarios =JSON.parse(localStorage.getItem("codigos_usuarios"));
    fechas_usuarios=JSON.parse(localStorage.getItem("fechas_usuarios"));
    horas_usuarios=JSON.parse(localStorage.getItem("horas_usuarios"));
}

//comprobar la informacion
function comprobarDatos()
{
    const codigo_usario = document.querySelector("#codigo_usuario");
    var codigo = codigo_usario.value;
    if(codigo)
    {
         //obtenemos la fecha y hora del usuario despues de logiarse.
            var fechaHoy = new Date();
            var fechaAct = fechaHoy.getDate() + "/" + (fechaHoy.getMonth()+1) + "/" + fechaHoy.getFullYear();
            var hora = fechaHoy.getHours() + ':' + fechaHoy.getMinutes();
            // guardamos la fecha y la hora
            codigos_usuarios.push(codigo);
            fechas_usuarios.push(fechaAct);
            horas_usuarios.push(hora);
            guardarDatos();
    }
}
//GUARDAR LOS DATOS
function guardarDatos()
{
    //guarda DATOSS USUARIO
    localStorage.setItem("codigos_usuarios",JSON.stringify(codigos_usuarios));
    localStorage.setItem("fechas_usuarios",JSON.stringify(fechas_usuarios));
    localStorage.setItem("horas_usuarios",JSON.stringify(horas_usuarios));
}