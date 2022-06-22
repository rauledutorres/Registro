//datos
var usuarios = [];

var fechaHoy = new Date();
var horas_usuarios_fin=[];

if(localStorage.getItem("usuarios") == null)
{
    usuarios = [];
}
else
{
    usuarios =JSON.parse(localStorage.getItem("usuarios"));
    pintarCarta();
    pintar();
}

function pintarCarta(){
    var cuerpoCarta = document.querySelector(".card-body");
    var imgCarta = document.querySelector(".img-fluid");
    var registroUsuario = JSON.parse(localStorage.getItem("resgistro_usuarios"));
    var codigo_usuario = JSON.parse(localStorage.getItem("codigo_usuario"));
    console.log(registroUsuario[0].img);
    console.log(codigo_usuario);
    for (let i = 0; i < registroUsuario.length; i++) {
        var h5 = document.createElement("h5");
        var h6 = document.createElement("h6");
        if(registroUsuario[i].codigo === codigo_usuario )
        {
            h5.innerText = registroUsuario[i].nombre;
            h6.innerText = registroUsuario[i].codigo;
            imgCarta.setAttribute("src", registroUsuario[i].img);
        }
    cuerpoCarta.appendChild(h5);
    cuerpoCarta.appendChild(h6);
            
    }
}
function pintar()
{
    const pint=document.querySelector("#table2");
    var codigo_usuario = JSON.parse(localStorage.getItem("codigo_usuario"));
    for (let i = 0; i< usuarios.length; i++) 
    {
        var row=document.createElement("tr");
        var cod=document.createElement("td");
        var fech=document.createElement("td");
        var hor=document.createElement("td");
        if(usuarios[i].codigo === codigo_usuario )
        {
            cod.textContent=usuarios[i].codigo;
            fech.textContent=usuarios[i].objeto_fecha.fechaAct;
            hor.textContent=usuarios[i].objeto_fecha.hora;
            pint.appendChild(row);
            row.appendChild(cod);
            row.appendChild(fech);
            row.appendChild(hor);
        }   
    }
}
pintarHora();
function pintarHora()
{
    const horaUltimo = document.querySelector("#hora");
    var fechaHoy = new Date();
    hours = fechaHoy.getHours();
    minutes = fechaHoy.getMinutes();
    if (hours < 10) hours = 0 + hours;
    if (minutes < 10) minutes = "0" + minutes;
    horaUltimo.innerHTML = hours+ ":" +minutes;

}
setInterval("pintarHora()", 1000);
//////////////////////////////////////////////////////////////////////////////////
const btn_register=document.querySelector("#boton");
function visible(){
    const x = document.querySelector("#tab2")
    if( x.style.visibility === "hidden" )
    {
        x.style.visibility = ("visible");
    }
    else
    {
        x.style.visibility= ("hidden");
    }
}
btn_register.addEventListener('click',visible);
///////////////////////////////////////////////////////////////////////////////////
function salirDato(){
    window.location.assign("http://127.0.0.1:5500/index.html?");
}
