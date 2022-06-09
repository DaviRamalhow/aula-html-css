
    function soma(){
        var n1 = parseInt(prompt("Digite um numero"));
        var n2 = parseInt(prompt("Digite outro numero"));
        var total = n1 + n2;

    
    alert("O total é " +  total);
    console.log("O total é " + total);
    }

    

    function  clique (){
        alert("Oi Galera");
    }



    function add (){

        var input1 = document.getElementById("num1");
        var input2 = document.getElementById("num2");
        console.log(input1.value);
        console.log(input2.value);

        var soma = parseInt(input1.value)+ parseInt(input2.value);
        console.log(soma);

        var resultado = document.getElementById("result");
        resultado.innerHTML = soma;

    
    }
    


    
    function tratar (evento){

        
        if(evento.keyCode <=48 || evento.keyCode >= 57){
        evento.preventDefault();
        }
        console.log(evento);
        console.log("dentro de tratar")

    }

    var input1 = document.getElementById("num1");
    input1.addEventListener("keydown",tratar);