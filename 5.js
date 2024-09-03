function mostrar (){
const num = parseInt(document.getElementById("num").value);
let resultado 
if (num%2==0){  
    resultado = 'Par'
}else{
    resultado = 'Impar'
}
document.getElementById("resultado").textContent = `Resultado é ${resultado}`;

}
