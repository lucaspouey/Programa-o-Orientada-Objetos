const frm = document.querySelector('form')
const resp= document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    const result = frm.inNome.value
    const farh = (result * 1.8) + 32
    console.log (farh)
    resp.innerText = `A temperatura em C° para F° é: ${farh} `
    e.preventDefault ()


})



