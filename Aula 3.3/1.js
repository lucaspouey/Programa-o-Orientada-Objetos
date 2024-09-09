
prompt = require('prompt-sync')()
const card_num = prompt('Digite o número do seu cartão: ')

if (card_num.length !== 16) {
    console.log('Número de cartão inválido.')
} else {
    if (card_num[0] === '4') {
        console.log('Seu cartão Visa é válido.')
    } else if (card_num[0] === '5') {
        console.log('Seu cartão Mastercard é válido.')
    } else if (card_num[0] === '6') {
        console.log('Seu cartão Discover é válido.')
    } else {
        console.log('Número de cartão inválido.')
    }
}