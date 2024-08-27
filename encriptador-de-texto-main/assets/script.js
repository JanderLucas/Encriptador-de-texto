// Obtém o elemento <textarea> da mensagem
// Essas linhas de código selecionam os elementos HTML com os IDs "campo-mensagem" e "img-mensagem", respectivamente. Isso significa que elas estão pegando as referências para o campo de texto e a imagem do boneco azul na sua página.
const textArea2 = document.getElementById("campo-mensagem");
const imagem = document.getElementById("img-mensagem"); //a variável imagem está sendo usada para guardar a informação se a imagem está visível ou não.

// Adiciona um ouvinte de evento de clique ao botão e esconde a imagem do boneco azul   
// Essa função, chamada clicado(), é responsável por controlar a visibilidade da imagem do boneco azul na página. Ela é chamada quando o botão é clicado.
function clicado() {
    if (imagem == true) { // Essa parte do código verifica se a imagem está atualmente visível. Se imagem == true, significa que a imagem está visível.
        imagem.style.display="inline-block"; // Isso torna a imagem visível e a coloca no fluxo normal da página.
        return imagem = false;
    } else{
        imagem.style.display="none"; // Isso oculta a imagem da página.
        return imagem = true;
    }
    // Se imagem for true, significa que a imagem está visível, então a função a esconde e define imagem como false.
    // Se imagem for false, significa que a imagem está escondida, então a função a mostra e define imagem como true.
}

//lógica do encriptador

// Essas linhas selecionam os elementos HTML com as classes "text-area" e "mensagem".
const textArea = document.querySelector(".text-area"); // "text-area" é um campo de texto onde o usuário insere a mensagem a ser encriptada
const mensagem = document.querySelector(".mensagem"); // "mensagem" é um campo onde o resultado da encriptação/desencriptação será exibido

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() { // Essa função é chamada quando o botão de encriptar é clicado.
    const textoEncriptado = encriptar(textArea.value); // Chama a função encriptar() para encriptar o texto do campo "text-area", onde o usuário inserio o texto a ser incriptado.
    mensagem.value = textoEncriptado; //  Define o valor do campo "mensagem" como o texto encriptado.
    textArea.value = ""; // Limpa o campo "text-area"
}

// onde a mágica acontece
function encriptar(stringEncriptada) { // Essa função recebe o texto a ser encriptado como parâmetro. passado pelo textArea.

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]; //  Cria uma matriz que armazena as "chaves" de encriptação.
    stringEncriptada = stringEncriptada.toLowerCase(); // Converte o texto para minúsculas.

    for(let i = 0; i < matrizCodigo.length; i++) { // Percorre sobre cada "chave" da matriz.
        if(stringEncriptada.includes(matrizCodigo[i][0])) { // Verifica se a letra da "chave" está presente no texto. pega o primeiro índice de todos os elementos(a,e,i,o,u)
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) // Substitui todas as ocorrências da letra da "chave" pela sequência correspondente. Percorre toda a string letra por letra alterando o valor das chaves(vogais) pelo nova palavra.
        }
    }
    return stringEncriptada; // Retorna o texto encriptado.
}

// btnDesencriptar() e desencriptar(stringDesencriptada)
// Essas funções funcionam de forma similar às funções btnEncriptar() e encriptar(), mas invertem o processo, desencriptando o texto.
// A função desencriptar() substitui as sequências encriptadas pelas letras originais.
function btnDesencriptar() { // Objetivo: Essa função é chamada quando o botão de desencriptar é clicado. Ela é responsável por desencriptar o texto que está no campo "text-area" e exibir o resultado no campo "mensagem".
    const textoDesencriptado = desencriptar(textArea.value); //Chama a função desencriptar() para desencriptar o texto do campo "text-area".
    mensagem.value = textoDesencriptado; // Define o valor do campo "mensagem" como o texto desencriptado.
    textArea.value = ""; // Limpa o campo "text-area".
}

function desencriptar(stringDesencriptada) { // Essa função recebe o texto encriptado como parâmetro e retorna o texto original.

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]; //Cria uma matriz que armazena as "chaves" de encriptação, exatamente igual à função encriptar().
    stringDesencriptada = stringDesencriptada.toLowerCase(); //Converte o texto encriptado para minúsculas.

    for(let i = 0; i < matrizCodigo.length; i++) { //  Percorre sobre cada "chave" da matriz.
        if(stringDesencriptada.includes(matrizCodigo[i][1])) { //  Verifica se a sequência encriptada da "chave" está presente no texto.
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) // Substitui todas as ocorrências da sequência encriptada pela letra original correspondente.
        }
    }

    return stringDesencriptada; //  Retorna o texto desencriptado.
}

function btnCopiar(mensagem) { // Essa função é chamada quando o botão de copiar é clicado.
    
    const texto = mensagem.value; // Obtém o texto do campo "mensagem". (lado direito)
    navigator.clipboard.writeText(texto); // Copia o texto para a área de transferência do sistema.
    mensagem.value = " "; //  Limpa o campo "mensagem".

    alert('O texto copiado foi: ' + texto) // Exibe um alerta informando que o texto foi copiado.
}


//lógica da nova feature: scroll
// Essa função faz com que o botão "voltar ao topo" apareça quando o usuário rola a página para baixo mais do que 20 pixels e desapareça quando o usuário volta ao topo da página. Essa é uma técnica comum para melhorar a experiência do usuário, facilitando o acesso ao topo da página quando o usuário está navegando por conteúdo extenso.
window.onscroll = function() {
    scrollFunction(); // Essa linha de código define um evento que será executado sempre que o usuário rolar a página (scroll).
}
  
function scrollFunction() { //Essa função é responsável por verificar a posição de rolagem da página e controlar a visibilidade do botão "voltar ao topo".
        // document.body.scrollTop: Retorna a posição de rolagem vertical do corpo da página.
        // document.documentElement.scrollTop: Retorna a posição de rolagem vertical do elemento raiz da página (geralmente o <html>) 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { //Essa condição verifica se a página foi rolada para baixo mais do que 20 pixels.
      document.getElementById("scrollToTop").style.display = "block"; //Se a página foi rolada para baixo mais do que 20 pixels, essa linha define o estilo display do elemento com o ID "scrollToTop" como "block", tornando-o visível.
    } else {
      document.getElementById("scrollToTop").style.display = "none"; //  Essa linha define o estilo display do elemento com o ID "scrollToTop" como "none", ocultando-o.
    }
}