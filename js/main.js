document.querySelector("input").onblur = function(){
    let date = new Date();
let url = `https://api.openweathermap.org/data/2.5/find?q=${this.value}&units=metric&appid=83c8a4d19562d3afe93d1ddbf209bca8`;

fetch(url).then(function(res){
    return res.json();
}).then(function(data){
    document.querySelector(".content").classList.remove("x");
    document.querySelector("h2").textContent =  `${data.list[0].name}, ${data.list[0].sys.country}`;
    document.querySelector("span").textContent = `${date.getFullYear()} / ${date.getMonth()} / ${date.getDate()}`
    document.querySelector("h1").innerHTML = Math.floor(data.list[0].main.temp) + "<sup> ْ </sup>c";
    document.querySelector("h3").textContent = data.list[0].weather[0].description;
    document.querySelector("h3").innerHTML = `${data.list[0].main.temp_min}<sup> ْ</sup>c/${data.list[0].main.temp_max}<sup> ْ</sup>`;
    let src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
    document.querySelector("img").setAttribute("src",src);
    console.log(data.list[0].weather[0].icon);
}).catch(function(){
    document.querySelector(".content").classList.add("x");
    document.querySelector("p").textContent = "not found";
    let x = setTimeout(function(){
            document.querySelector("p").textContent = '';
    },2500);
})
} 







