//datos
var usuarios = [];
var resgistro_usuarios=[];
if(localStorage.getItem("usuarios") == null)
{
    usuarios = [];
    resgistro_usuarios=[];

}
else
{
    usuarios =JSON.parse(localStorage.getItem("usuarios"));
    resgistro_usuarios =JSON.parse(localStorage.getItem("resgistro_usuarios"));
}
function registro()
{
    const codigo_usario = document.querySelector("#codigo_usuario");
    const nombre_usuario = document.querySelector("#nombre_usuario");
    const img_usuario = document.querySelector("#img_usuario");
    const lista_usuarios = JSON.parse(localStorage.getItem("resgistro_usuarios"));
    var codigo = codigo_usario.value;
    var nombre = nombre_usuario.value;
    var img = img_usuario.value;
    if(localStorage.getItem("resgistro_usuarios") == null)
    {
        if(codigo && nombre && img)
        {
            var usuario={codigo,nombre,img};
            resgistro_usuarios.push(usuario);
            guardarDatos();
        }
        else
        {
            alert("Ingrese los datos");
        }

    }
    else
    {
        for (let i = 0; i < lista_usuarios.length; i++) 
        {
            if(lista_usuarios[i].codigo == codigo)
            {
                alert("Este codigo ya esta registrado");
            }
            else
            {
                if(codigo && nombre && img)
                {
                    var usuario={codigo,nombre,img};
                    resgistro_usuarios.push(usuario);
                }
                else
                {
                    alert("Ingrese los datos");
                }
                
            }
        }
        guardarDatos();
        
    }
}
//comprobar la informacion
function comprobarDatos()
{
    const codigo_usario = document.querySelector("#codigo");
    const lista_usuarios = JSON.parse(localStorage.getItem("resgistro_usuarios"));
    var codigo = codigo_usario.value;
    var bool = false;
    if(localStorage.getItem("resgistro_usuarios") == null)
    {
        alert("Por favor registrate");
    }
    else
    {
        for (let i = 0; i < lista_usuarios.length; i++)
        {
            console.log(lista_usuarios[i].codigo);
            if(lista_usuarios[i].codigo.indexOf(codigo) !== -1)
            {
                //obtenemos la fecha y hora del usuario despues de logiarse.
                var fechaHoy = new Date();
                var fechaAct = fechaHoy.getDate() + "/" + (fechaHoy.getMonth()+1) + "/" + fechaHoy.getFullYear();
                if(fechaHoy.getMinutes() < 10)
                {
                    var hora = fechaHoy.getHours() + ':0' + fechaHoy.getMinutes();
                }
                else
                {
                    var hora = fechaHoy.getHours() + ':' + fechaHoy.getMinutes();
                }
                var fecha_salida ="";
                var hora_salida ="";
                // guardamos la fecha y la hora
                var objeto=
                {
                 codigo,
                    objeto_fecha:
                    {
                        fechaAct,
                        hora,
                        fecha_salida,
                        hora_salida
                    },
                }
             usuarios.push(objeto);
             bool = true
             guardarDatos();
             
            }
        }
        if(!bool)
        {
                alert("No hay ningun usuario con esta contraseña");
        }
        else
        {
            localStorage.setItem("codigo_usuario",JSON.stringify(codigo));
            
        }
      
        if ( document.querySelector("#codigo").value!=="") {
            window.location.assign("https://ispipa.github.io/Registro/Tabla.html");
        }else{
            alert("Ingrese datos");
        }
        
    }
    
}
//GUARDAR LOS DATOS
function guardarDatos()
{
    //guarda DATOSS USUARIO
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    localStorage.setItem("resgistro_usuarios",JSON.stringify(resgistro_usuarios));
}