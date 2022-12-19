const citys = document.querySelector(".cidade")
const input = document.querySelector("input");
const btn = document.querySelector("button");
const img = document.querySelector("img");

btn.addEventListener('click', function(){
    if(!input.value) return;
    
    getTempo(input.value)
})





async function getTempo(city){
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f987db7b0b1985697be1a3e2a371b858`)
    const response  = await url.json();
   console.log(response)
    getDados(response)

}

function getDados(dados){
    citys.innerHTML = dados.name;
    img.src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`

}
    
