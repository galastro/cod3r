const converteEmDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

const calculoSalario = (horasTrabalhadas,valorPorHora) => {
  const valorTotal = converteEmDinheiro(horasTrabalhadas*valorPorHora)
  return `Salário é igual a ${valorTotal}.`
}
  
console.log(calculoSalario(150, 40.5))