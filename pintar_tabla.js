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
    pintar()
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
        var h7 = document.createElement("h7");
        var h8 = document.createElement("h8");
        if(registroUsuario[i].codigo === codigo_usuario )
        {
            h5.innerText = "Nombre:\n  " + registroUsuario[i].nombre;
            h6.innerText = "Codigo:\n  " + registroUsuario[i].codigo;
            h7.innerText = "Hora de entrada:\n  " + usuarios[usuarios.length -1].objeto_fecha.hora +"\n"(minutos < 10)? '0' + minutos : minutos;
            h8.innerText = "Fecha de entrada:\n  " + usuarios[usuarios.length -1].objeto_fecha.fechaAct;
            imgCarta.setAttribute("src", registroUsuario[i].img);
        }
    cuerpoCarta.appendChild(h5);
    cuerpoCarta.appendChild(h6);
    cuerpoCarta.appendChild(h7);
    cuerpoCarta.appendChild(h8);
            
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
    window.location.assign("https://ispipa.github.io/Registro/index.html");
}
function calcaularTiempo(i)
{
    var usuarioHora = JSON.parse(localStorage.getItem("usuarios"));
    for (i; i < usuarioHora.length; i++) 
    {
        console.log(usuarioHora[i].objeto_fecha.hora_salida);
        if(usuarioHora[i].objeto_fecha.hora_salida == "")
        {
            //return usuarioHora[i].objeto_fecha.hora;
            return "Calculando el tiempo";
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
                var total = totalSalida - totalEnter;
            return convertirMinutos(total);      
        }
    }
}
function convertirMinutos(minutos)
{
    console.log(minutos);
    var horas = Math.floor(minutos / 60);
    horas = (horas < 10)? '0' + horas : horas;
    var minutos = Math.floor((minutos % 60));
    minutos = (minutos < 10)? '0' + minutos : minutos;
    var total = horas + ":" + minutos;
    console.log(total);
    return (total);
}
var bool = true;
const btn_register=document.querySelector("#boton");
function visible(){
    const x = document.querySelector("#tab2");
    const pint2 = document.querySelector(".ani");
    if( x.style.visibility === "hidden" )
    {
        x.style.visibility = ("visible");
    }
    else
    {
        x.style.visibility= ("hidden");
    }
    if(bool)
    {
        pint2.setAttribute("data-aos-duration","3000");
        pint2.classList.add('aos-animate');
        bool = false;
    }
    else 
    {
        pint2.removeAttribute("data-aos-duration");
        pint2.classList.remove('aos-animate');
        bool = true;
    }
}
btn_register.addEventListener('click',visible);