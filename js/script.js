const btnLogin = document.querySelector('#btn_login')
const input = document.querySelectorAll('.campoInput')

input.forEach(campos =>{
    campos.addEventListener('input', verificarInput)
})

function verificarInput(){
    let todosPreenchidos = true

    input.forEach(campos =>{
        if(campos.value.trim() === ''){
            todosPreenchidos = false
            return
        }
    });

    if(todosPreenchidos){
        btnLogin.removeAttribute('disabled')
        btnLogin.classList.remove('botao-desabilitado')
        btnLogin.classList.add('botao-habilitado')
    }
    else{
        btnLogin.setAttribute('disabled', 'disabled')
        btnLogin.classList.remove('botao-habilitado')
        btnLogin.classList.add('botao-desabilitado')
    }
}