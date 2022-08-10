document.querySelector(".buttonEncriptar").onclick = encryptMsg;
document.querySelector(".buttonDesencriptar").onclick = decryptMsg;

function parseMsg(match, replacement) {
    const text = document.querySelector(".insertText").value 
    if (validate(text)){
        document.querySelector(".getResult").value = text.replace(match, (i) => replacement[i])
    }else{
        document.querySelector(".getResult").value = "No se admiten mayusculas, acentos ni caracteres especiales.";
    }
}

function decryptMsg() {
    return parseMsg(/enter|imes|ai|ober|ufat/g, {enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u"});
}

function encryptMsg() {
    return parseMsg(/[eiaou]/g, {e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat"});
}


function validate(text){
    return (/([^a-z\ñ\s])/g.test(text) == false);
}