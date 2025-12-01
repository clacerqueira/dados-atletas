
//classe Atleta
class Atleta{
  //construtor
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas
    
  }


//Calcula as categorias
  calculaCategoria(){
    if(this.idade > 8 && this.idade <= 11){
       return "Infatil"
    }
    else if(this.idade >= 12 && this.idade <= 13){
      return "Juvenil"
    }
    else if(this.idade >= 14 && this.idade <= 15){
      return "Intermediário"
    }
    else if(this.idade >= 16 && this.idade <= 30){
      return "Adulto"
    }
    else if(this.idade > 30){
      return "Sem categoria"
    }
  }


//Calcula o IMC do atleta
  calculaIMC(){
    return this.peso / (this.altura * this.altura)
  }


    //Calcula a média das notas do atleta
    calculaMediaValida(){
      let novaMatrizNotas = this.notas;

      //Ordena a matriz de notas
      novaMatrizNotas.sort((a, b) => a - b);


      //Cria uma nova matriz sem a menor e a maior notas do atleta
      let matrizNovaComTresNotas = novaMatrizNotas.slice(1, 4);

      //Variável que pega o quantidade total de notas
      let quantidadeDeNotas = matrizNovaComTresNotas.length;

      //Variável usada para calcular o total das notas
      let somaDasNotas = 0;

      //Variável usada para calcular a média das notas
      let mediaDasNotas = 0;

      matrizNovaComTresNotas.forEach(function(numero){
        somaDasNotas = somaDasNotas + numero
      })
        return mediaDasNotas = somaDasNotas / quantidadeDeNotas
        
    }


//Exibe o nome e do atleta
  obtemNomeAtleta(){
    return this.nome
  }


//Exibe a idade do atleta
  obtemIdadeAtleta(){
     return this.idade
  }


//Exibe o peso do atleta
  obtemPesoAtleta(){
    return this.peso
  }


//Exibe a altura do atleta
  obtemAlturaAtleta(){
    return this.altura
  }


//Obtém e exibe as notas do atleta
  obtemNotasAtleta(){
    return this.notas
  }


//Obtém e exibe a categoria
  obtemCategoria(){
    return atleta.calculaCategoria()
  }

//Obtém e exibe o IMC
  obtemIMC(){
    return atleta.calculaIMC()
  }

//Obtém e exibe a média
  obtemMediaValida(){
    return atleta.calculaMediaValida()
  }


}


const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);




console.log(`Nome: ${atleta.obtemNomeAtleta()}`)
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`)
console.log(`Peso: ${atleta.obtemPesoAtleta()}`)
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`)
console.log(`Notas: ${atleta.obtemNotasAtleta()}`)
console.log(`Categoria: ${atleta.obtemCategoria()}`)
console.log(`IMC: ${atleta.obtemIMC()}`)
console.log(`Média válida: ${atleta.obtemMediaValida()}`)


