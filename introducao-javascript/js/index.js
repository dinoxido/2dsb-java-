

let pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(i = 0; i < pacientes.lenght; i++){
  console.log(i)
  let paciente = pacientes[i]
  
  let tdPeso = paciente.querySelector(".info-peso")
  let tdAltura = paciente.querySelector(".info-altura")
  let tdImc= paciente.querySelector(".info-imc");
  
  let peso = tdPeso.textContent;
  let altura = tdAltura.textContent;
  
  let pesoehVdd = true;
  let alturaehVdd = true; 
  
if (peso <= 0 || peso >= 1000){
  console.log("peso inválido");
  tdImc.textContent = "peso inválido";
  pesoehVdd = false;
} 
if (altura <= 0 || altura >= 3){
  console.log("altura inválida");
  tdImc.textContent = "altura inválida";
  alturaehVdd = false;
} 
if (pesoehVdd && alturaehVdd){
  let imc = peso/(altura*altura);
  tdImc.textContent = imc;
}
else{
  tdImc.textContent = "tudo errado";
}

}




/*
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
  }

  // Função para atualizar o IMC na tabela
  function atualizarIMC() {
    const primeiropaciente = document.querySelector(".primeiropaciente");
    const peso = parseFloat(primeiropaciente.querySelector(".info-peso").textContent);
    const altura = parseFloat(primeiropaciente.querySelector(".info-altura").textContent);
}
if (!isNaN(peso) && !isNaN(altura)) {
    const imc = calcularIMC(peso, altura);
    primeiropaciente.querySelector(".info-imc").textContent = imc;
} else {
    primeiropaciente.querySelector(".info-imc").textContent= "peso n corresponde";
}
  ;
  atualizarIMC()*/
/*
  function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
  }

  // Função para atualizar o IMC na tabela
  function atualizarIMC() {
    const pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach((paciente) => {
      const peso = parseFloat(paciente.querySelector(".info-peso").textContent);
      const altura = parseFloat(paciente.querySelector(".info-altura").textContent);

      if (!isNaN(peso) && !isNaN(altura)) {
        const imc = calcularIMC(peso, altura);
        paciente.querySelector(".info-imc").textContent = imc;
      } else {
        paciente.querySelector(".info-imc").textContent = "Peso ou altura inválidos";
      }
    });
  }

  // Chamando a função para calcular e exibir o IMC na inicialização
  atualizarIMC();
*/