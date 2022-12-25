const bntEnviar = document.querySelector('.btn');
const input = document.querySelector('input')
bntEnviar.addEventListener('click', function(){
    if(!input.value) return;
    
    pegatempo(input.value)
    window.location.href= 'assets/pages/previsão.html'
})

function pegatempo(city){
    const temp = localStorage.setItem('cidade', city);
}