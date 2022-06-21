var fechaHoy = new Date();
var fechaAct = fechaHoy.getDate() + "/" + (fechaHoy.getMonth()+1) + "/" + fechaHoy.getFullYear();
var hora = fechaHoy.getHours() + ':' + fechaHoy.getMinutes();
console.log(hora);
console.log(fechaAct);
//var codigoIngresado = localStorage.setItem("codigos",);