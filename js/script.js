var horas = document.getElementById("horas").value;
var valorHora= document.getElementById("valorHora").value;
var numFilhos = document.getElementById("numeroFilhos").value;


function calcular(){
    horas = document.getElementById("horas").value;
    valorHora= document.getElementById("valorHora").value;
    numFilhos = document.getElementById("numeroFilhos").value;


    var salarioFamilia = numFilhos * 60;
    var salarioBruto = (horas * valorHora) + salarioFamilia;
    var descontoInss = null;
    var descontoIr = null;



    console.log(salarioFamilia);
    console.log(salarioBruto);

    if (salarioBruto <= 1302.00){
        descontoInss = salarioBruto * 0.075;
    }else if(salarioBruto > 1302.00 && salarioBruto <= 2571.29){
        descontoInss = salarioBruto * 0.09;
    }else if(salarioBruto > 2571.29 && salarioBruto <= 3856.94){
        descontoInss = salarioBruto * 0.12;
    }else if(salarioBruto > 3856.94){
        descontoInss = salarioBruto * 0.14;
    }
    
    if (salarioBruto <= 1903.98){
        descontoIr = 0;
    }else if(salarioBruto > 1903.98 && salarioBruto <= 2826.65){
        descontoIr = salarioBruto * 0.075;
    }else if(salarioBruto > 2826.65 && salarioBruto <= 3751.05){
        descontoIr = salarioBruto * 0.15;
    }else if(salarioBruto > 3751.05 && salarioBruto <= 4664.68){
        descontoIr = salarioBruto * 0.14;
    }else if(salarioBruto > 3751.05 && salarioBruto <= 4664.68){
            descontoIr = salarioBruto * 0.225;
    }else{
            descontoIr = salarioBruto * 0.275;
    }

    var  salarioLiquido = salarioBruto - descontoInss - descontoIr; 

    console.log(descontoInss);
    console.log(descontoIr);


    document.getElementById("salario").value = salarioBruto;
    document.getElementById("descontoInss").value = descontoInss;
    document.getElementById("descontoIr").value = descontoIr;
    document.getElementById("salarioFamilia").value = salarioFamilia;
    document.getElementById("salarioLiquido").value = salarioLiquido;
}