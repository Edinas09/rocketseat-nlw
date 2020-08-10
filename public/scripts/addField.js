//procurar o botao
document.querySelector("#add-time")
//quando clocar no botao
.addEventListener('click', cloneField)
//executar uma açao
function cloneField(){
    //console.log("cheguei aqui")
    //duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo limpar
    fields.forEach(function(currentField) {
        //pegar o field do momento e limpa
        currentField.value = ""
    })
    
    //colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
