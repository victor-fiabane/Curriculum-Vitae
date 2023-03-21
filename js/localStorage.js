let lista = localStorage.getItem("minhaLista");
const formulario = document.querySelector("form");
const ulCompras = document.querySelector("ul");

if (lista) {
lista = JSON.parse(lista);
} else {
lista = [];
}
listar();

formulario.addEventListener("submit", function(e){
e.preventDefault();
let novaCompra = new Object();
novaCompra.nome = this.nome.value;
novaCompra.codigo = this.codigo.value;
if(this.id.value !== "" && this.id.value >= 0){
lista[this.id.value] = novaCompra;
}else{
lista.push(novaCompra);
}

this.reset();
this.id.value = null;

salvarLS(lista);

listar();
})

function listar(filtro=''){
ulCompras.innerHTML = "";
lista.forEach((item, key) => {

if(item.nome.toUpperCase().indexOf(filtro.toUpperCase()) >= 0 || filtro ==""){


linha = document.createElement('li');

let s = `<button onClick="excluir(${key})">[Excluir]</button>
         <button onClick="editar(${key})">[Editar]</button>`

linha.innerHTML = "Nome: " + item.nome + " Código: " + item.codigo + s;
ulCompras.appendChild(linha);
}
});
}
function excluir(id){
formulario.reset();
lista.splice(id, 1);
salvarLS(lista);
listar();
}

function editar(id){
formulario.id.value = id;
formulario.nome.value = lista[id].nome;
formulario.codigo.value = lista[id].codigo;
}

function salvarLS(lista){
localStorage.setItem("minhaLista", JSON.stringify(lista));
}