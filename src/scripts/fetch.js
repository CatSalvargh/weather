const key = '5Y8YDVCZTPV7Q5EJ6KZRARNHH'

export async function fetch_weather() {
   try { 
        const loc = 'london'
        const unit = 'metric'
        const url =  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=${unit}&key=${key}&contentType=json`

        const response = await fetch(url)
        const data = await response.json()

        console.log(data, data.currentConditions.conditions )
        console.log(data.currentConditions.dew)
        console.log(data, data.currentConditions.conditions)
        console.log(data, data.currentConditions.conditions)

   } catch (error) {
        console.log("Hey, I cant find that", error)
        throw new Error
   }
}