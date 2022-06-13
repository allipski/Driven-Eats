function ativabotao() {
    const podeComprar = document.querySelectorAll(".itemselecionado").length;
    if (podeComprar === 3) {
        const botao = document.getElementById("botao");
        botao.innerHTML = "Fechar Pedido";
        botao.classList.add("botaoverde");
    }
}

function selectitem1(elemento) {
    const divPai = document.getElementById("comida");
    const divFilha = divPai.querySelector(".itemselecionado");
    if (divFilha !== null) {
        divFilha.classList.remove("itemselecionado");
        elemento.classList.add("itemselecionado");
    }
    else {
        elemento.classList.add("itemselecionado");
    }
    ativabotao();
}

function selectitem2(elemento) {
    const divPai = document.getElementById("bebida");
    const divFilha = divPai.querySelector(".itemselecionado");
    if (divFilha !== null) {
        divFilha.classList.remove("itemselecionado");
        elemento.classList.add("itemselecionado");
    }
    else {
        elemento.classList.add("itemselecionado");
    }
    ativabotao();
}

function selectitem3(elemento) {
    const divPai = document.getElementById("sobremesa");
    const divFilha = divPai.querySelector(".itemselecionado");
    if (divFilha !== null) {
        divFilha.classList.remove("itemselecionado");
        elemento.classList.add("itemselecionado");
    }
    else {
        elemento.classList.add("itemselecionado");
    }
    ativabotao();
}

let comidaEscolhida = [];
let valorPedido = 0;

function enviarpedido() {
    for (let i = 0; i < 3; i++) {
        const meuPedido = document.querySelector("div.itemselecionado > p").innerHTML;
        comidaEscolhida[i] = meuPedido;

        const precoItem = document.querySelector(".itemselecionado span.numero").innerHTML;
        let valorItem = parseFloat(precoItem.replace(',', '.'));
        valorPedido = valorPedido + valorItem;

        const utilidade = document.querySelector(".itemselecionado");
        utilidade.classList.remove("itemselecionado");
                
        let minhaEscolha = comidaEscolhida[i];
        document.querySelector(".substituir").innerHTML = minhaEscolha;

        const utilidade2 = document.querySelector(".substituir");
        utilidade2.classList.remove("substituir");

        const utilidade3 = document.querySelector("span.numero");
        utilidade3.classList.remove("numero");
    }

    const totalPedido = valorPedido.toFixed(2);
    let totalPedido2 = totalPedido.replace('.', ',');
    document.querySelector(".total").innerHTML = totalPedido2;
    console.log(document.querySelector(".escondido").innerText);
    console.log(totalPedido2);

    let uri= document.querySelector(".escondido").innerText;
    let encoded = encodeURIComponent(uri);
    console.log('https://wa.me/5511992984224?text=' + encoded);

    location.href='https://wa.me/5511992984224?text=' + encoded;
}