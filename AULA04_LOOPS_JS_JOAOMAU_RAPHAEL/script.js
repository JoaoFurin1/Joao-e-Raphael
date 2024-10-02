//laço while = enquanto
var x = 0;
document.write('<br>testando loop com while')
while (x <= 10) {
    document.write('<br> O valor de x é: '+x);
    x = x+1;
}

//laço for = para
var controle = 10;
document.write('<br><h3>testando loop com FOR</h3>');
for(a=0;a<controle;a++) {
    document.write('<br>O valor de a é:'+a);
}

//laço switch = escolha
//criar a função pedir()
function pedir(){
    //alert("a casa caiu mano!!!");
    var valor = prompt('Digite a opção de 1 a 4');
    // console.log(valor);
    // console.log(typeof(valor));
    // console.log(Number(valor));
    // console.log(typeof(Number)(valor));

    switch(Number(valor)){
        case 1:
            alert ('Você escolheu suco');
            break;

            case 2:
            alert ('Você escolheu água gelada');
            break;

            case 3:
            alert ('Você escolheu sorvete');
            break;

            case 4:
            alert ('Você está chamando o garçom');
            break;

            default:
                alert("digite números entre 1 e 4")
    }
}