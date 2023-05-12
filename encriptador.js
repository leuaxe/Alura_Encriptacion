function encriptar() {
    let frase = document.getElementById("texto").value;
let frase2 = "";

let inicio = 0;
let final = 0;

for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);

    switch (letra) {
        case 'a':
            final = i;
            frase2 += frase.substring(inicio, final);
            frase2 += "ai";
            inicio = final+=1;
            break;
        case 'e':
            final = i;
            frase2 += frase.substring(inicio, final);
            frase2 += "enter";
            inicio = final += 1;
            break;
        case 'i':
            final = i;
            frase2 += frase.substring(inicio, final);
            frase2 += "imes";
            inicio = final += 1;
            break;
        case 'o':
            final = i;
            frase2 += frase.substring(inicio, final);
            frase2 += "ober";
            inicio = final += 1;
            break;
        case 'u':
            final = i;
            frase2 += frase.substring(inicio, final);
            frase2 += "ufat";
            inicio = final += 1;
            break;
    }
    
}

document.getElementById("texto2").value = frase2
document.getElementsByClassName("muneco")
}

