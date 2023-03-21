var limpa = document.getElementById('reset');
limpa.addEventListener('click', function(){
    document.getElementById('nome').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('dataNasc').value = "";
})

function calcularIMC() {

	var txtNome = document.getElementById('nome');
	var TxtdataNasc = document.getElementById("dataNasc").value;
	var sexo = document.querySelectorAll('input[name="sexo"]');
	var nome = txtNome.value;

	var sexoSelecionado;
    for (var i = 0; i < sexo.length; i++){
        if(sexo[i].checked){
            sexoSelecionado = sexo[i].value;
            break;
        }
    }

	var data = new Date(TxtdataNasc);
 	var hoje = new Date();
  	var anoNasc = data.getFullYear();
  	var idade = hoje.getFullYear() - anoNasc;
	
	if(sexoSelecionado == 'masc'){
		sexoSelecionado = "Sr. " + nome + " você nasceu no ano de " + anoNasc + 
		" você tem " + idade + " anos de idade, você está com o peso"
	}else{
		sexoSelecionado = "Sra. " + nome + " você nasceu no ano de " + anoNasc + 
		" você tem " + idade + " anos de idade, você está com o peso"
	}

	let peso = document.getElementById("peso").value;
	let altura = document.getElementById("altura").value / 100; 

	let imc = peso / (altura * altura);
	let imgResultado = document.getElementById("imgResultado");
	let textoResultado = document.getElementById("textoResultado");

	if (imc < 18.5) {	
		imgResultado.src = "img/Skinny Guy.png";
		textoResultado.innerText = sexoSelecionado + " abaixo do normal, seu imc é de " + imc.toFixed(2);
	} else if (imc < 25) {
		imgResultado.src = "img/Normal Guy.png";
		textoResultado.innerText = sexoSelecionado + " normal, seu imc é de " + imc.toFixed(2);
	} else if (imc < 30) {
		imgResultado.src = "img/Fat.png";
		textoResultado.innerText = sexoSelecionado + " ligeiramente acima do normal, seu imc é de " + imc.toFixed(2);;
	} else if (imc < 35) {
		imgResultado.src = "img/Fat Guy.png";
		textoResultado.innerText = sexoSelecionado + " moderadamente acima normal, seu imc é de " + imc.toFixed(2);
	} else if (imc < 40) {
		imgResultado.src = "img/Fat Man.png";
		textoResultado.innerText = sexoSelecionado + " consideravelmente acima normal, seu imc é de " + imc.toFixed(2);
	} else {
		imgResultado.src = "img/Niko Fat.png";
		textoResultado.innerText = sexoSelecionado + " tremendamente acima do normal, seu imc é de " + imc.toFixed(2);
	}
	openModal();
}

function openModal() {
	document.getElementById("myModal").style.display = "block";
}
function closeModal() {
	document.getElementById("myModal").style.display = "none";
}
window.onclick = function(event) {
	if (event.target == document.getElementById("myModal")) {
		closeModal();
	}
}