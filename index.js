var main = document.getElementById('tudo')
var divSelecione = document.getElementById('option')
var selection = document.getElementById('opcao')
var divPasso = document.querySelector('.pass')
var divRadio = document.querySelector('.escolha')
var codificaMensagem = document.getElementById('codifica')
var decodificaMensagem = document.getElementById('decodifica')
var botao = document.getElementById('button')
var vazia = document.getElementById('btn')

//PARA ESCOLHA DA FORMA DE CRIPTOGRAFIA

selection.addEventListener('click', function(e){
    if (selection.value == "2") {
        divPasso.style.display = "flex"
    } else {
        divPasso.style.display = "none"
    }
})


function mudaBotao() {
    var codificar = document.querySelector("#codifica")
    var decodificar = document.querySelector("#decode")
    var botao = document.querySelector("#codificar")
    codificar.addEventListener("change",function(){
        botao.value = "codificar mensagem"
        botao.setAttribute("onclick","verificador()")
    })
    decodificar.addEventListener("change", function(){
        botao.value = "decodificar mensagem"
        botao.setAttribute("onclick","verificadorDecode()")
    })
}

function verificador() {
    if (selection.value == "2") {
        codificadorCifraDeCesar()
    } else if (selection.value == "3") {
         codificadorBase64()
    }
}
function verificadorDecode() {
    if (selection.value == "2") {
        decodificadorCifraDeCesar()
    } else if (selection.value == "3") {
        decodificadorBase64()
    }
}
//base 64

function codificadorBase64() {
    var mensagem  =  document.querySelector("#mensagem").value
    var resultadoDaMensagem = document.querySelector("#resultado");
    resultadoDaMensagem.innerHTML = btoa(mensagem)
}
function decodificadorBase64() {
    var mensagem  =  document.querySelector("#mensagem").value
    var resultadoDaMensagem = document.querySelector("#resultado");
    resultadoDaMensagem.innerHTML = atob(mensagem)
}

//cifra de cesar
/*Validar o incremento
Verificar se é codificar ou decodificar
Transformar cada letra  em charcode. 
Add a letra transformada o incremento 
Desfazer a transformação e exibir na tela*/

function codificadorCifraDeCesar() {
    var mensagemCifra = document.getElementById("mensagem").value
    var passo = document.getElementById("passo").value
    var resultadoDaMensagem = document.querySelector("#resultado")
    var textoValue = ""
    for (var i = 0; i < mensagemCifra.length; i++) {
        var key = parseInt(passo)
        var asciiNum = mensagemCifra[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <=90) {
            var modePasso = asciiNum + key
        if (modePasso > 90) {
            modePasso = modePasso - 26
        }
        textoValue += String.fromCharCode(modePasso)
        }else if (asciiNum >= 97 && asciiNum <= 122) {
            var modePasso = asciiNum + key
            if (modePasso >122) {
                modePasso = modePasso - 26
            }
            textoValue += String.fromCharCode(modePasso)    
        }else{
            textoValue += mensagemCifra[i]
        }
        
    }
    resultadoDaMensagem.value = textoValue 
}

function decodificadorCifraDeCesar() {
    var mensagemCifra = document.getElementById("mensagem").value
    var passo = document.getElementById("passo").value
    var resultadoDaMensagem = document.querySelector("#resultado")
    var textoValue = ""
    for (var i = 0; i < mensagemCifra.length; i++) {
        var key = parseInt(passo)
        var asciiNum = mensagemCifra[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            var modePasso = asciiNum - key
        if (modePasso < 65) {
            modePasso = modePasso + 26
        }
        textoValue += String.fromCharCode(modePasso)
        }else if (asciiNum >= 97 && asciiNum <= 122) {
            var modePasso = asciiNum - key
            if (modePasso < 97) {
                modePasso = modePasso + 26
            }
            textoValue += String.fromCharCode(modePasso)    
        }else{
            textoValue += mensagemCifra[i]
        }
        
    }
    resultadoDaMensagem.value = textoValue 
}