let cityInput = document.getElementById('city search')
let SearchButton = document.getElementById('SearchBtn')
let weatherdata = document.getElementById('Weatherdata')
let forecastdata = document.getElementById('forecastdata')
let api_key = '20bc1581ca112f70b65a3f004dcb5165'

function getSingleDayData(cityName){
let Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=imperial
`

fetch(Url).then(res=>res.json()).then(data=>{
    console.log(data)
    weatherdata.innerHTML = ""

    weatherdata.style.border = '1px solid black'
    let cityNameParagraph = document.createElement('p')
    cityNameParagraph.innerHTML = `City name: ${data.name}`

    let tempPara = document.createElement('p')
    tempPara.innerHTML = `Temperature: ${data.main.temp}`

    let humidityPara = document.createElement('p')
    humidityPara.innerHTML = `Humidity: ${data.main.humidity}`

    let windspeedPara = document.createElement('p')
    windspeedPara.innerHTML = `Wind speed: ${data.wind.speed}`

    weatherdata.append(cityNameParagraph, tempPara, windspeedPara, humidityPara)
    showforecastdata(cityName)
})
}

function showforecastdata(cityName){
let Url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api_key}&units=imperial`;

fetch(Url).then(res=>res.json()).then(data=>{
    console.log(data)
})
}

function init(event){
    event.preventDefault()

    let cityName = cityInput.value;
    getSingleDayData(cityName)
}

SearchButton.addEventListener('click',init)