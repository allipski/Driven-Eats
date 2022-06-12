function selectitem(elemento) {
    const jaTem = document.getElementById("comida").querySelector("itemselecionado");
    if (jaTem === null){
        jaTem.classList.add("itemselecionado");
    } 

}