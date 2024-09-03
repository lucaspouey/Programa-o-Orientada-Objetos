const prompt = require("prompt-sync")();
var Bairro = prompt("Bairro de entrega: ");
var taxaEntrega;
 switch (Bairro) { 
    case "Centro":
    taxaEntrega = 5.00;
    break;
    case "Fragata":
    taxaEntrega = 9.00
    break;
    case "Três Vendas":
    taxaEntrega = 7.00;
    break;
    case "Laranjal":
    taxaEntrega = 10.00 ;
    break;
    default:
        taxaEntrega = 8.00;
    
 }

console.log ("Taxa de entrega:" + taxaEntrega.toFixed(2));