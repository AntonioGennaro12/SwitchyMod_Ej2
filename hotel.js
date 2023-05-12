/* EJERCICIO SWITCH MODULARIZACIÓN
Sistema d ereserva de un HOTEL
*/

const pagina        = document.querySelector ("body");
const miImg         = document.querySelector ("#mi-img");

const selectCamas   = document.querySelector ("#sel-qcama");
const selectDias    = document.querySelector ("#sel-qdias");
const selectDiaIn   = document.querySelector ("#sel-diain");
const selectPens    = document.querySelector ("#sel-pens");


const miParrafo1    = document.querySelector ("#mi-parr1");
const miParrafo2    = document.querySelector ("#mi-parr2");
const miParrafo3    = document.querySelector ("#mi-parr3");
const miParrafo4    = document.querySelector ("#mi-parr4");

const miLegReserv   = document.querySelector ("#mi-legR");
const miListaOrd    = document.querySelector ("#mi-ol1");

// selecciona los elementos <p> de salida con la clase "resrv"
var misParrRsrv = document.getElementsByClassName("resrv");

const IMAGEN_1      = "https://i.blogs.es/b30bbf/hotel-20transylvania-20critica/1366_2000.jpg";

const UNO           = "uno";
const DOS           = "dos";
const TRES          = "tres";   
const SIETE         = "siete";

const LUNES         = "lun";
const MIER          = "mie";
const SAB           = "sab";

const DESAY         = "DES";
const MED_PEN       = "MP";
const PEN_CMP       = "PC";

const CERO          = 0 ;
const NUM_1         = 1 ; 
const NUM_2         = 2 ;
const NUM_3         = 3 ;
const NUM_7         = 7 ;

const DIA_LUN       = "Lunes";
const DIA_MIE       = "Miercoles";
const DIA_SAB       = "Sabado";

const PENS_DESA     = "Desayuno";
const PENS_MP       = "Desayuno y Almuerzo";
const PENS_PC       = "Desayuno, Almuerzo y Cena";

// Variables 
let camaEleg        = 0;
let diasEstad       = 0;
let diaChkIn        = "";
let pensEleg        = "";
let camaElegC       = false;
let diasEstadC      = false;
let diaChkInC       = false;
let pensElegC       = false;

// Inicializaciones Varias
// Carga Imagen Hotel
miImg.src                   = IMAGEN_1;
// Borra todos los parrafos de salida
miParrafo1.textContent      = "";
miParrafo2.textContent      = "";
miParrafo3.textContent      = "";
miParrafo4.textContent      = "";
// oculta los elementos parrafo 1 a 4.
for (var i = 0; i < misParrRsrv.length; i++) {
    misParrRsrv [i].style.display = "none";
}
/**
 * RESETEA TODOS LOS SELECTORES
 */ 
function resetSelectores(){
    selectCamas.selectedIndex  = "cero";
    selectDias.selectedIndex   = "cero";
    selectDiaIn.selectedIndex  = "x";
    selectPens.selectedIndex   = "x";
}
/**
 * Habilita y Des-Habilita los selectores
 * @param {Boolean} orden 
 */
function selectoresOnOff (orden){
    selectCamas.disabled  = orden;
    selectDias.disabled   = orden;
    selectDiaIn.disabled  = orden;
    selectPens.disabled   = orden;
}

/**
 * BORRA TODO PARA EMPEZAR DE NUEVO
 */
function borraTodo() {
    // Borra la lista ordenada
    miListaOrd.innerHTML = ``; 
    miListaOrd.style.display    = "block";
    // Reestablece la leyenda original de los Datos de la Reserva
    miLegReserv.style.color = "beige"; 
    miLegReserv.textContent = "Datos de Reserva";
    // Resetea todos los selectores 
    resetSelectores();
    // Habilita Selectores
    selectoresOnOff (false)
    // Borra todos los parrafos de salida
    miParrafo1.textContent      = "";
    miParrafo2.textContent      = "";
    miParrafo3.textContent      = "";
    miParrafo4.textContent      = "";
    // oculta los elementos parrafo 1 a 4.
    for (var i = 0; i < misParrRsrv.length; i++) {
        misParrRsrv[i].style.display = "none";
    } 
    // Resetea las variables de selección
    camaEleg                    = 0;
    diasEstad                   = 0;
    diaChkIn                    = "";
    pensEleg                    = "";
    // Resetea los indicadores de agregado de la selección
    camaElegC                   = false;
    diasEstadC                  = false;
    diaChkInC                   = false;
    pensElegC                   = false;
    }
/**
 * CONFIRMA LA RESERVA Y BLOQUEA EL SEGUIR ELIGIENDO
 */
function confirmaReserva() { 
    if(((camaElegC)&&(diasEstadC))&&((diaChkInC)&&(pensElegC))) {
        // Borra lista ordenada
        miListaOrd.innerHTML = ``;  
        // Configuar leyenda a informe de reserva 
        miLegReserv.style.color = "aquamarine"; 
        miLegReserv.textContent = "Datos de Reserva Confirmados";
        // Muestra los elementos parrafo 1 a 4.
        for (var i = 0; i < misParrRsrv.length; i++) {
            misParrRsrv [i].style.display = "block";
        }
        // Informa los datos de la reserva
        miParrafo1.textContent      = "1- Cantidad de Camas: "+camaEleg+"";
        miParrafo2.textContent      = "2- Estadía de "+diasEstad+" día/s";
        miParrafo3.textContent      = "3- Día de Check In: "+diaChkIn+"";
        miParrafo4.textContent      = "4- Comidas elegidas: "+pensEleg+"";
        // Resetea todos los selectores 
        resetSelectores();
        // Deshabilita Selectores
        selectoresOnOff (true)
        // Bloquea lista ordenada
        miListaOrd.style.display    = "none";
        }
        else {
            miLegReserv.style.color = "yellow";
            miLegReserv.textContent = "Datos de Reserva >>>>> ¡¡Falta agregar servicios!!";
        }
    }
/**
 * Selector cant de Camas
 */
function eligeCama(){
    if (camaEleg != CERO){
        camaElegC = true;
        miListaOrd.innerHTML += `
        <li>Cantidad de Camas: ${camaEleg}</li> `
    }
}
/**
 * Selector Cantidad de Dias
 */
function eligeDias(){
    if(diasEstad!=CERO){
        diasEstadC = true;
        miListaOrd.innerHTML += `
        <li>Estadía de ${diasEstad} día/s</li> `
    }
}
/**
 * Selectos Día de check In
 */
function eligeDiaIn(){
    if (diaChkIn != ""){
        diaChkInC = true;
        miListaOrd.innerHTML += `
    <li>Día de Check In: ${diaChkIn}</li> `
    }
}
/**
 * Selector tipo de comida 
 */
function eligePension(){
    if(pensEleg != ""){
        pensElegC = true;
        miListaOrd.innerHTML += `
    <li>Comidas elegidas: ${pensEleg}</li> `
    }
}

/**
 * Selecciona cantidad de camas
 */
function seleccionaCamas() {
    switch (selectCamas.value) {
        case UNO:
            camaEleg = NUM_1;
            break;
        case DOS:
            camaEleg = NUM_2;
            break;
        default:
            camaEleg = CERO;
        }
    camaElegC = false;
}

  /**
  * Selecciona días de Estadía
  */
function seleccionaDias() {
    switch (selectDias.value) {
        case UNO:
            diasEstad = NUM_1;
            break;
        case TRES:
            diasEstad = NUM_3;
            break;
        case SIETE:
            diasEstad = NUM_7;
            break;
        default:
            diasEstad = CERO;
        }
    diasEstadC = false;
}

 /**
  * Selecciona Dia de Check In
  */
 function seleccionaDiaIn() {
    switch (selectDiaIn.value) {
        case LUNES:
            diaChkIn = DIA_LUN;
            break;
        case MIER:
            diaChkIn = DIA_MIE;
            break;
        case SAB:
            diaChkIn = DIA_SAB;
            break;
        default:
            diaChkIn = "";
    }
    diaChkInC = false;
}

 function seleccionaPension() {
    switch (selectPens.value) {
        case DESAY:
            pensEleg = PENS_DESA;
            break;
        case MED_PEN:
            pensEleg = PENS_MP;
            break;
        case PEN_CMP:
            pensEleg = PENS_PC;
            break;
        default:
            pensEleg = "";
       }
    pensElegC = false;
}

 