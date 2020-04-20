var nombreJugador1 = ""
var nombreJugador2 = ""
var turnojugador1 = true
var turnojugador2 = true

var turnos = 0







function iniciarJuego() {




mostrar();
deshabilitar();

 

  var texto = "EMPIEZA EL JUEGO"
  var p = document.createElement("p")
  p.innerHTML = texto

  this.nombreJugador1 = input1.value
  this.nombreJugador2 = input2.value



  nombre1 = this.nombreJugador1
  nombre2 = this.nombreJugador2

  tituloNombre1 = document.getElementById("nombreJugador1")
  tituloNombre1.append(nombre1)

  tituloNombre2 = document.getElementById("nombreJugador2")
  tituloNombre2.append(nombre2)


  


  if (Math.random() >= 0.5) {

    var jugador1 = document.getElementById("historialJugador1")
    jugador1.appendChild(p)
  }
  else {

    var jugador2 = document.getElementById("historialJugador2")
    jugador2.appendChild(p)
    this.turnojugador1 = false
  }
}


function colocarMarca(id) {
  

  var cuadro = document.getElementById(id)

  if (turnojugador1 == true && cuadro.innerText=="") {

    turnos += 1;

    var nombre1 = this.nombreJugador1
    var historial = document.getElementById("historialJugador1")

    var marca = "X"
    var textohistorial = "El jugador " + nombre1 +" puso la marca en el " + id

   
    cuadro.append(marca)
 


    var historia = document.createElement("p")
    historia.innerHTML = textohistorial

    historial.appendChild(historia)

    if (this.ganador(id)) {
      mostrarCartelGanador (this.nombre1)

    }

    

  }

  if (cuadro.innerText=="") {

    turnos += 1;
    var historial = document.getElementById("historialJugador2")
    var nombre2 = this.nombreJugador2

    var marca = "O"
    var textohistorial = "El jugador " + nombre2 +" puso la marca en el " + id


    cuadro.append(marca)


    var historia = document.createElement("p")
    historia.innerHTML = textohistorial

    historial.appendChild(historia)
   
    if (this.ganador(id)) {
      
      mostrarCartelGanador (this.nombre2);
     
    }

  }

 if (turnos >= 9) {
      
      mostrarCartelEmpate()
    }
 

  pasarTurno()


}



function agregarHistoria(historial) {
  var textohistorial = "El jugador 1 puso la marca en el" + id
  var historia = document.createElement("p")

  historia.appendChild(historia)
}

function pasarTurno() {
  var textoturno = "turno del siguiente jugador"
  this.turnojugador1 = !this.turnojugador1
  

}

function ganador(id) {

  marca1 = document.getElementById("cuadro1").innerText
  marca2 = document.getElementById("cuadro2").innerText
  marca3 = document.getElementById("cuadro3").innerText
  marca4 = document.getElementById("cuadro4").innerText
  marca5 = document.getElementById("cuadro5").innerText
  marca6 = document.getElementById("cuadro6").innerText
  marca7 = document.getElementById("cuadro7").innerText
  marca8 = document.getElementById("cuadro8").innerText
  marca9 = document.getElementById("cuadro9").innerText


  switch (id) {
    case "cuadro1": {
      
      if ((marca1 === marca2 && marca1 === marca3) || (marca1 === marca4 && marca1=== marca7) || (marca1 === marca5 && marca1=== marca9))  {
        
        return true;
      }

      break

    }

    case "cuadro2": {


      if ((marca2 === marca1 && marca2=== marca3) || (marca2 === marca5 && marca2=== marca8)) {

        return true;
      }

      break
    }


    case "cuadro3": {



      if ((marca3 === marca2 && marca3===marca1) ||(marca3 === marca6 && marca3===marca9) || (marca3 === marca5 && marca3=== marca7)) {

        return true;
      }

      break
    }

    case "cuadro4": {



      if ((marca4 === marca5 && marca4=== marca6) || (marca4 === marca1 && marca4=== marca7) ) {

        return true;
      }

      break

    }
    case "cuadro5": {



      if ((marca5 === marca2 && marca5=== marca8) || (marca5 === marca4 && marca5=== marca6) || (marca5 === marca3  && marca5=== marca7) || (marca5 === marca1 && marca5=== marca9)) {

        return true;
      }

      break
    }

    case "cuadro6": {



      if ((marca6 === marca5 && marca6=== marca4) || (marca6 === marca3 && marca6=== marca9) ) {

        return true;
      }

      break

    }
    case "cuadro7": {



      if ((marca7 === marca4 && marca7=== marca1) || (marca7 === marca8 && marca7=== marca9) || (marca7 === marca5 && marca7=== marca3)) {

        return true;
      }

      break
    }

    case "cuadro8": {



      if ((marca8 === marca7 && marca8=== marca9) || (marca8 === marca5 && marca8=== marca2)) {

        return true;
      }

      break

    }
    case "cuadro9": {

      if ((marca9 === marca8 && marca9=== marca7) || (marca9 === marca6 && marca9=== marca3) || (marca9 === marca5 && marca9=== marca1) ) {

        return true;
      }

      break
    }

    


  
  }



}

function reiniciar() {

  turnos = 0;

  document.getElementById("cuadro1").innerText = ""
  document.getElementById("cuadro2").innerText = ""
  document.getElementById("cuadro3").innerText = ""
  document.getElementById("cuadro4").innerText = ""
  document.getElementById("cuadro5").innerText = ""
  document.getElementById("cuadro6").innerText = ""
  document.getElementById("cuadro7").innerText = ""
  document.getElementById("cuadro8").innerText = ""
  document.getElementById("cuadro9").innerText = ""

  document.getElementById("historialJugador1").innerHTML = ""
  document.getElementById("historialJugador2").innerHTML = ""


  document.getElementById("nombreJugador1").innerText = ""
  document.getElementById("nombreJugador2").innerText = ""

  document.getElementById("input1").value = ""
  document.getElementById("input2").value = ""


  document.getElementById("cartel-ganador").innerHTML = ""
  




  this.nombreJugador1= ""
  this.nombreJugador2= ""

  enableTable();

  ocultar();
  habilitar();




};

function cambiarColor(event) {

event.srcElement.bgColor = "grey";


}

function sacarColor(event) {
event.srcElement.bgColor = "";
}


function ocultar(){
  document.getElementById('tateti').style.display = 'none';
  document.getElementById('historial1').style.display = 'none';
  document.getElementById('historial2').style.display = 'none';
  document.getElementById('btn-iniciar').disabled = true;
  document.getElementById('cartel-ganador').style.display = 'none';


}

function mostrar(){
  document.getElementById('tateti').style.display = 'block';
  document.getElementById('historial1').style.display = 'block';
  document.getElementById('historial2').style.display = 'block';
}

function habilitar(){
  document.getElementById('input1').disabled = false
  document.getElementById('input2').disabled = false
  document.getElementById('btn-iniciar').disabled = true;

}

function deshabilitar(){
  document.getElementById('input1').disabled = true
  document.getElementById('input2').disabled = true
  document.getElementById('btn-iniciar').disabled = true;
  
}

function validarInput() {
  if( document.getElementById("input1").value.length > 0 && document.getElementById("input2").value.length > 0 ) {
      document.getElementById("btn-iniciar").disabled = false;
  }
}

function mostrarCartelGanador (nombreplayer) {



var textoganador = "Ganaste " + nombreplayer

var nombreganador= document.createElement("h2")
nombreganador.innerHTML = textoganador
document.getElementById("cartel-ganador").appendChild(nombreganador)
document.getElementById('cartel-ganador').style.display = 'block';

disableTable();




}

function mostrarCartelEmpate() {


var textoempate = "Empataron"

var empate= document.createElement("h2")
empate.innerHTML = textoempate
document.getElementById("cartel-ganador").appendChild(empate)
document.getElementById('cartel-ganador').style.display = 'block';

disableTable();


}



function disableTable() {
var tabla = document.getElementById("tateti")
tabla.style.pointerEvents = 'none'
}

function enableTable() {
var tabla = document.getElementById("tateti")
tabla.style.pointerEvents = 'auto'
}
