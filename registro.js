//datos
var usuarios = [];
var resgistro_usuarios=[];
var srcData2 = "";
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

function codificarImg()
{
        const img_usuario = document.querySelector("#img_usuario");
        const img_usuario1 = document.querySelector("#formFile");
        var imgSubido = img_usuario1.files;
        var imgNormal = img_usuario.value;
        if(imgSubido.length > 0)
        {

                var fileToLoad = imgSubido[0];
                if(fileToLoad)
                {
                var fileReader = new FileReader();
        
                fileReader.onload = function() 
                {
                var srcData = fileReader.result; // <--- data: base64
                //console.log(srcData);
                srcData2 = srcData;
                console.log(srcData2);
                }
                fileReader.readAsDataURL(fileToLoad);
                }
            
        }
        else
        {
            srcData2 = imgNormal;
        }

}
async function registro()
{
    const codigo_usario = document.querySelector("#codigo_usuario");
    const nombre_usuario = document.querySelector("#nombre_usuario");
    const lista_usuarios = JSON.parse(localStorage.getItem("resgistro_usuarios"));
    const preg = document.getElementById("pills-register");
    const plog = document.getElementById("pills-login");
    const treg = document.getElementById("tab-register");
    const tlog = document.getElementById("tab-login");
    var codigo = codigo_usario.value;
    var nombre = nombre_usuario.value;
    var  img =  srcData2;
    console.log("esto es la imagen despues de convertirlo: " + img)
    if(localStorage.getItem("resgistro_usuarios") == null)
    {
        if(codigo && nombre && img)
        {
            var usuario={codigo,nombre,img};
            resgistro_usuarios.push(usuario);
            guardarDatos();
            if(preg.className == "tab-pane fade active show")
            {
                preg.className = "tab-pane fade";
                plog.className = "tab-pane fade active show";
                treg.className = "nav-link";
                tlog.className = "nav-link active"
            }
        }
        else
        {
            alert("rellena los campos");
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
                        alert("rellena los campos");
                    }        
            }
        }
        guardarDatos();
        if(preg.className == "tab-pane fade active show")
        {
            preg.className = "tab-pane fade";
            plog.className = "tab-pane fade active show";
            treg.className = "nav-link";
            tlog.className = "nav-link active"
        }
        
    }
}
function functions()
{
   // Call start
    (async() => {
        codificarImg();
    
        setTimeout(await  registro, 1000);
        
    })();
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
            window.location.assign("https://ispipa.github.io/Registro/Tabla.html");
            
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
//controlar clases
const parent = document.querySelector("#parent");
parent.addEventListener('input', (e) => 
{   
    const codigo_usario = document.querySelector("#codigo_usuario");
    const nombre_usuario = document.querySelector("#nombre_usuario");
    const img_usuario = document.querySelector("#img_usuario");
    var codigo = codigo_usario.value;
    var nombre= nombre_usuario.value;
    var img = img_usuario.value; 
    if(codigo)
    {
        e.target = e.target.classList.add('active');
    }
    if(nombre)
    {
        e.target = e.target.classList.add('active');
    }
    if(img)
    {
        e.target = e.target.classList.add('active');
    }
     console.log(e);
});
const parent_codigo = document.querySelector("#parent_codigo");
parent_codigo.addEventListener('input', (e) => 
{   
    const codigo_usario = document.querySelector("#codigo");
    var codigo = codigo_usario.value;

    if(codigo)
    {
        e.target = e.target.classList.add('active');
    }
     console.log(e);
});
///coger img
const parent2 = document.querySelectorAll(".img");
parent.addEventListener('click', (e) => 
{   
    const img_usuario = document.querySelector("#img_usuario");
    const img_usuario1 = document.querySelector("#formFile");
    console.log(img_usuario);
        if(parent2[0] == e.target)
        {
            img_usuario1.value ="";
            if(parent2[0].disabled)
            {
                parent2[0].disabled = false;
                parent2[1].disabled = true;
            }
            parent2[1].disabled = true;
        }
        if(parent2[1] == e.target)
        {
            img_usuario.value ="";
            if(parent2[1].disabled)
            {
                parent2[1].disabled = false;
                parent2[0].disabled = true;
            }
            parent2[0].disabled = true;
        }
        console.log(e.target)
});
