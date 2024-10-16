
// function acao(){
//     document.write("executando ....</br>");
// }

//temporizador
//setInterval(acao,1000);

// setInterval(()=>{document.write("exeutando através de arrow function...</br>")
// },1000);

//clearInterval(timer);

//var timer = setInterval(()=>{document.write("exeutando através de arrow function...</br>")
//},1000);

//outro temporizador
function acao2(){
    document.write("Executado com o setTimeout!</br>");
}

setTimeout(acao2, 3000);

setTimeout(()=>{
    document.write("Executando com o arrow function!")
},4000);
