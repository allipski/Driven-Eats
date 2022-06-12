function fecharPedido() {
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
    if (divFilha!==null){
        divFilha.classList.remove("itemselecionado");
        elemento.classList.add("itemselecionado");
    }
    else { 
        elemento.classList.add("itemselecionado");
    }
    fecharPedido();
}

function selectitem2(elemento) {
    const divPai = document.getElementById("bebida");
    const divFilha = divPai.querySelector(".itemselecionado");
    if (divFilha!==null){
        divFilha.classList.remove("itemselecionado");
        elemento.classList.add("itemselecionado");
    }
    else {
        elemento.classList.add("itemselecionado");
    }
    fecharPedido();
}

function selectitem3(elemento) {
    const divPai = document.getElementById("sobremesa");
    const divFilha = divPai.querySelector(".itemselecionado");
    if (divFilha!==null){
        divFilha.classList.remove("itemselecionado");
        elemento.classList.add("itemselecionado");
    }
    else {
        elemento.classList.add("itemselecionado");
    }
    fecharPedido();
}