const H1 = document.querySelector("h1");
const RELOJ = document.querySelector("p")
const date = new Date();
let diaActual = date.getDay();
let hora = date.getHours()
let minutos = date.getMinutes()


function mostrarHoraEnPantalla(){
    switch (diaActual) {
        case 0: 
            H1.textContent = `Faltan 6 días para el sabado!`
            break; 
        case 1: 
            H1.textContent = `Falta 5 días para el sabado!`
            break; 
        case 2: 
            H1.textContent = `Falta 4 días para el sabado!`
            break;
        case 3: 
            H1.textContent = `Falta 3 días para el sabado!`
            break;    
        case 4: 
            H1.textContent = `Falta 2 días para el sabado!`
            break; 
        case 5:
            H1.textContent = `Falta 1 día para el sabado!`
            break;
        case 6: 
            H1.textContent = `Hoy es sabadooo!`
            break; 
        default:
            break;
    }
}

function mostrarHoraActual (){
    RELOJ.textContent = `${hora}:${minutos}`
}

mostrarHoraActual()
mostrarHoraEnPantalla()