
  function pulalinha() {
     document.write("<br><br>")
  }

  function mostra (frase) {
      document.write(frase)
  
  }
  alert(" OLÁ Seja bem vindo(a) a minha calculadora!")
  var numero1=parseInt(prompt("Digite o  primeiro número"))
  var menu=(prompt("Ecolha uma opçâo:1-Somar / 2- Subtrair/ 3-Dividir / 4 Multiplicar ")) 
  var numero2=parseInt(prompt("Digite o  segundo número"));


  if (menu =="1") {
    mostra("O resultado da adição é " + (numero1 + numero2));
    }

  else if (menu =="2") {
    mostra("O resultado da subtração é " + (numero1-numero2));
  }
  else if (menu =="4") {

    mostra("O resultado da multiplicação é " + (numero1*numero2));
  }
  else if (menu =="3"){
    mostra("O resultado da divisão é " + (numero1/numero2));
  }
  