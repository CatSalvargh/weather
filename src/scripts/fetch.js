const key = '5Y8YDVCZTPV7Q5EJ6KZRARNHH'

async function fetch_weather(loc, unit) {
   try { 
        const url =  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=${unit}&key=${key}&contentType=json`

        const response = await fetch(url)
        const data = await response.json()

        const datapoints = {
            city: data.resolvedAddress, 
            conditions: data.currentConditions.conditions,
            temp: data.currentConditions.temp, 
            feels: data.currentConditions.feelslike, 
            humidity: data.currentConditions.humidity, 
            rain: data.currentConditions.precipprob, 
            windspeed: data.currentConditions.windspeed, 
            snow: data.currentConditions.snow,  
            icon: data.currentConditions.icon,
            forecast: data.days
        }

        return datapoints

   } catch (error) {
        console.log("Hey, I cant find that", error)
        throw new Error
   }
}

async function get_icon(weather) {
  return new Promise(function(resolve, reject) {
      switch(weather) {
        case 'snow':
          resolve('☃️')
          break
        case 'rain':
          resolve('🌧️')
          break
        case 'fog':
          resolve('🌫️')
          break
        case 'wind':
          resolve('💨')
          break
        case 'cloudy':
          resolve('☁️')
          break
        case 'partly-cloudy-day':
          resolve('🌥️')
          break
        case 'partly-cloudy-night':
          resolve('🌩️')
          break
        case 'clear-day':
          resolve('🌞')
          break
        case 'clear-night':
          resolve('🌝')
          break
        default:
          reject('No weather icon found 😒')
      }
    })
}

export async function display_weather(city, units) {
    const display_div = document.getElementById('current-container')

    const datapoints = await fetch_weather(city.toLowerCase(), units)
    const icon = await get_icon(datapoints.icon)

    display_div.innerHTML = `
        <div class="city">${datapoints.city}
        <h4>${datapoints.conditions}</h4></div>
        <div class="temperature">
            <h1 style="font-size: 3rem">${datapoints.temp}°C</h1>
            <h1 style="font-size: 10rem">${icon}</h1>
        </div>
        <table id="results-table">
            <tr><td class="td-header">Feels like: </td> <td>${datapoints.feels}°C</td>
            <tr><td class="td-header">Humidity: </td> <td>${datapoints.humidity}%</td>
            <tr><td class="td-header">Rain prob: </td> <td>${datapoints.rain}%</td>
            <tr><td class="td-header">Wind speed: </td> <td>${datapoints.windspeed}Km/h</td>
            </tr>
        </table>`
}