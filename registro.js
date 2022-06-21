//datos
var codigos_usuarios = [];
var fechas_usuarios=[];
var horas_usuarios=[];

//comprobar y guardar la informacion

function guardarComprobar()
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
            console.log(codigos_usuarios);
            console.log(fechas_usuarios);
            console.log(horas_usuarios);
            localStorage.setItem("codigos_usuarios",codigos_usuarios);
            localStorage.setItem("fechas_usuarios",fechas_usuarios);
            localStorage.setItem("horas_usuarios",horas_usuarios);
    }
}