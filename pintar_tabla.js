//datos
var usuarios = [];

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
    const pint = document.querySelector("#table2");
    var codigo_usuario = JSON.parse(localStorage.getItem("codigo_usuario"));
    console.log(usuarios[0].objeto_fecha.fechaAct);
    for (let i = 0; i< usuarios.length; i++) 
    {
        var row = document.createElement("tr");
        var cod = document.createElement("td");
        var fech = document.createElement("td");
        var hor = document.createElement("td");
        if(usuarios[i].codigo === codigo_usuario)
        {
            cod.textContent = usuarios[i].codigo;
            fech.textContent = usuarios[i].objeto_fecha.fechaAct;
            hor.textContent = calcaularTiempo(i);
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

function salirDato(){
    var usuarioExit = JSON.parse(localStorage.getItem("usuarios"));
    var ultimoObejto = usuarioExit.length -1;
    console.log(ultimoObejto);
    var fechaSal = new Date();
    var horaSal = fechaSal.getHours();
    var minuSal = fechaSal.getMinutes();
    if (horaSal < 10) horaSal = 0 + horaSal;
    if (minuSal < 10) minuSal = "0" + minuSal;
    var horaExit = horaSal + ":" + minuSal;
    var fechaExit = fechaSal.getDate() + "/" + (fechaSal.getMonth()+1) + "/" + fechaSal.getFullYear();
    for (let i = 0; i < usuarioExit.length; i++) 
    {
        if(usuarioExit[i] == usuarioExit[ultimoObejto])
        {
            usuarioExit[i].objeto_fecha.fecha_salida = fechaExit;
            usuarioExit[i].objeto_fecha.hora_salida = horaExit;
            console.log(usuarioExit[i]);
        }
    }
    localStorage.setItem("usuarios", JSON.stringify(usuarioExit));
    window.location.assign("http://127.0.0.1:5500/index.html?");
}
function calcaularTiempo(i)
{
    var usuarioHora = JSON.parse(localStorage.getItem("usuarios"));
    for (i; i < usuarioHora.length; i++) 
    {
        console.log(usuarioHora[i].objeto_fecha.hora_salida);
        if(usuarioHora[i].objeto_fecha.hora_salida == "")
        {
            return usuarioHora[i].objeto_fecha.hora; 
        }
        else
        {
                var horasEnter = usuarioHora[i].objeto_fecha.hora;
                var horasSalida = usuarioHora[i].objeto_fecha.hora_salida;
                var horasMinutosEnt = horasEnter.split(":");
                var horasMinutosSal = horasSalida.split(":");
                var horaEnter = horasMinutosEnt[0];
                var minutoEnter = horasMinutosEnt[1];
                var horaSalida = horasMinutosSal[0];
                var minutoSalida = horasMinutosSal[1];
                var totalEnter = (parseInt(horaEnter) * 60) + parseInt(minutoEnter);
                var totalSalida = (parseInt(horaSalida) * 60) + parseInt(minutoSalida);

            return convertirMinutos(totalSalida - totalEnter);      
        }
    }
}
function convertirMinutos(minutos)
{
    console.log(minutos);
    var horas = Math.floor(minutos / 3600);
    horas = (horas < 10)? '0' + horas : horas;
    var minutos = Math.floor((minutos / 60) % 60);
    minutos = (minutos < 10)? '0' + minutos : minutos;
    console.log(horas + ":" + minutos);
    return (horas + ":" + minutos);
}
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
