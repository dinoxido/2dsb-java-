//busca no site pelo armazenamento r dentro da variavel titilo
let titulo = document.querySelector(".titulo");
//mostra os devtools de texto da variavel para fins de teste
console.log(titulo.textContent);
//muda ostexto da variavel titulo para o texto desejado
titulo.textContent ="Fica Grande Nutrição"
let paciente = document.querySelector("#primeiropaciente");
console.log(paciente);

let tdPeso = paciente.querySelector(".info-peso")
let tdAltura = paciente.querySelector(".info-altura")

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso/(altura*altura);
console.log(imc);

let tdImc= paciente.querySelector(".info-imc");
tdImc.textContent = imc;
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