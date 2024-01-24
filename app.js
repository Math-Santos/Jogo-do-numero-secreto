/*

buscando elemento no html manualmente  

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Descubra o número';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 e 10';


 */


let listaNumeroSorteados = [];  
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

// buscando elemento com função, e função tem parâmetro
function escrevaTextoNatela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMessagemInicial(){
    escrevaTextoNatela('h1', 'Descubra o número secreto');
    escrevaTextoNatela('p', 'Escolha um número entre 1 e 10');
}

exibirMessagemInicial();

// função sem parâmetro 
function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        escrevaTextoNatela('h1', ' ACERTOU !');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Você Descobriu o Número Secreto! com ${tentativas} ${palavraTentativa}`;
        escrevaTextoNatela('P', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        
        if(chute > numeroSecreto){
            escrevaTextoNatela('h1', 'Ops! Tente Novamente!');
            escrevaTextoNatela('p','Número secreto é menor');
        }else{
            escrevaTextoNatela('h1', 'Ops! Tente Novamente!');
            escrevaTextoNatela('p','Número secreto é maior');    
             }
             tentativas++;
             limpaCampo();
    }
}

// função com return 
function numeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaNumeroSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaNumeroSorteados = [];
    }

   if(listaNumeroSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
   } else {
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
   }
 } 

 

 function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
 }

 function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMessagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
 }