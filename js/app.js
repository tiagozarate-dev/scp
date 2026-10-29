const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const boton = document.getElementById("boton")
const operaciones = document.getElementById("operaciones")
const resultado = document.getElementById("resultado")
const imagenes = document.getElementById("imagenes")



boton.addEventListener("click", function() {
        let num1 = Number(numero1.value)
        let num2 = Number(numero2.value)
        let operacion= operaciones.value;
        let salida;
    
        if (operacion === "suma"){
            salida = num1 + num2;
            resultado.textContent =  "La suma es :" + salida;
            imagenes.src = "https://tse3.mm.bing.net/th/id/OIP.S03c18ukE_RVGJ_xR2-MQAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
            
        }
        else if (operacion === "resta"){
            salida = num1 - num2;
            resultado.textContent =  "La resta es :" + salida;
            imagenes.src = "https://cdn-icons-png.flaticon.com/512/3607/3607809.png";
        }
        else if (operacion === "multiplicacion"){
            salida = num1 * num2;
            resultado.textContent =  "La multiplicacion es :" + salida;
            imagenes.src = "https://tse1.explicit.bing.net/th/id/OIP.r47BGYhh98jDwy5_0wAnngHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
        }
        else if (operacion === "division"){
            salida = num1 / num2;
            resultado.textContent =  "La division es :" + salida;
            imagenes.src ="https://th.bing.com/th/id/OIP.ZLIrbBQ9Ek73KTUX230B3wHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3";
        }
        else {
            resultado.textContent = "Ingrese una operacion"
        }
        resultado.textContent = "resultado:" + salida;
    });