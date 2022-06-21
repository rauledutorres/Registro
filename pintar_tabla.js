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
    pintar();
}

function pintar()
{
    const pint=document.querySelector("#table2");
    console.log(pint)
    for (let i = 0; i< codigos_usuarios.length; i++) {
        var row=document.createElement("tr");
        var cod=document.createElement("td");
        var fech=document.createElement("td");
        var hor=document.createElement("td");
        cod.textContent=codigos_usuarios[i];
        fech.textContent=fechas_usuarios[i];
        hor.textContent=horas_usuarios[i];
        pint.appendChild(row);
        row.appendChild(cod);
        row.appendChild(fech);
        row.appendChild(hor);
    }
}
