function tocarBoton(Boton) {
    const pantalla = document.getElementById("pantalla");
    
    switch (Boton) {
        case 'Boton1':
            pantalla.textContent += 1;
            break;
        case 'Boton2':
            pantalla.textContent += 2;
            break;
        case 'Boton3':
            pantalla.textContent += 3;
            break;
        case 'Boton4':
            pantalla.textContent += 4;
            break;
        case 'Boton5':
            pantalla.textContent += 5;
            break;
        case 'Boton6':
            pantalla.textContent += 6;
            break;
        case 'Boton7':
            pantalla.textContent += 7;
            break;
        case 'Boton8':
            pantalla.textContent += 8;
            break;
        case 'Boton9':
            pantalla.textContent += 9;
            break;
        case 'Boton0':
            pantalla.textContent+=0
            break;
        case 'BotonAC':
            pantalla.textContent=""
            break;
        case 'BotonC':
            pantalla.textContent=pantalla.textContent.slice(0,-1)
            break
        case 'Boton+':
            pantalla.textContent+="+"
            break;
        case 'Boton-':
            pantalla.textContent+="-";
            break;
        case 'Boton*':
            pantalla.textContent+="*";
            break;
        case 'Boton/':
            pantalla.textContent+="/"
            break;
        case 'Boton=':
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "Error";
            }
            break
        default:
            break;
    }
}
