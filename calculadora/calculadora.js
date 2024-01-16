
document.querySelector('#buton').addEventListener('click',function(){
    const altura =document.querySelector("#altura").value;
    const peso =document.querySelector("#peso").value;
    /*if(typeof(altura) !=="number" || typeof(peso) !== "number") {
       return document.querySelector("#rdo").innerHTML='Introduzca peso o altura';
    }*/
    const imc=calcularImc(altura,peso);
    document.querySelector("#rdo").innerHTML=imc.toFixed(1);
});

function calcularImc(altura,peso){
    let imc = peso/(altura**2);
    return imc;
}