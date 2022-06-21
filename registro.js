//datos
var usuarios = [];
var codigo;
var nombre_usuario
if(localStorage.getItem("usuarios") == null)
{
    usuarios = [];

}
else
{
    usuarios =JSON.parse(localStorage.getItem("usuarios"));
}
//registro usuario
function registro()
{
    const nombre = document.querySelector("#nombre_usuario");
    const codigo_usario = document.querySelector("#codigo_usuario");
    var lista_usuarios = JSON.parse(localStorage.getItem("usuarios"));
    codigo = codigo_usario.value;
    nombre_usuario = nombre.value;
    if(localStorage.getItem("usuarios") == null)
    {
            var fechaAct="";
            var hora ="";
            var hora_salida="";
            var fecha_salida="";
            var objeto_usuario = {codigo,nombre_usuario,fechaAct,hora,hora_salida,fecha_salida};
            usuarios.push(objeto_usuario);
            guardarDatos();
    }
    else
    {
        for (let i = 0; i < lista_usuarios.length; i++) 
        {
            if(lista_usuarios[i].codigo.indexOf(codigo) !== -1)
            {
                alert("Ya hay existe ese codigo");
            }
            else
            {
                var fechaAct="";
                var hora ="";
                var hora_salida="";
                var fecha_salida="";
                var objeto_usuario = {codigo,nombre_usuario,fechaAct,hora,hora_salida,fecha_salida};
                usuarios.push(objeto_usuario);
                guardarDatos();
            }
            
        }
    }
}
//comprobar la informacion
function comprobarDatos()
{
    const codigo_usario = document.querySelector("#codigo");
    var lista_usuarios = JSON.parse(localStorage.getItem("usuarios"));
    codigo = codigo_usario.value;
    console.log(codigo);
    console.log(lista_usuarios[0]);
     for (let i = 0; i < lista_usuarios.length; i++) 
     {
        lista_usuarios.splice(i, 1);
        console.log(lista_usuarios);
        if(lista_usuarios[i].codigo.indexOf(codigo) !== -1)
        {
            var fechaHoy = new Date();
            var fechaAct = fechaHoy.getDate() + "/" + (fechaHoy.getMonth()+1) + "/" + fechaHoy.getFullYear();
            var hora = fechaHoy.getHours() + ':' + fechaHoy.getMinutes();
            lista_usuarios[i]['fechaAct'] = fechaAct;
            lista_usuarios[i]['hora'] = hora;
            console.log(lista_usuarios[i]);
            var objeto = lista_usuarios[i];
            // guardamos la fecha y la hora
            usuarios.push(objeto);
            guardarDatos();
        }
     }
}
//GUARDAR LOS DATOS
function guardarDatos()
{
    //guarda DATOSS USUARIO
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    localStorage.setItem("codigo_usuario",JSON.stringify(codigo));
}