const buscarPalavrasSemelhantes = (inicio, palavras) => palavras
.filter(palavra => palavra.includes(inicio))
  
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))

console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))