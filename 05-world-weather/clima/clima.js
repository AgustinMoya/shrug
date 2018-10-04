const axios = require('axios')



// http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=b46a5342705946a6f997907c87e336f4
const getClima = async(lat, lon) => {


    let response = await axios.get('http://api.openweathermap.org/data/2.5/weather?units=metric&appid=b46a5342705946a6f997907c87e336f4', {
        params: {
            lat,
            lon
        }
    })

    return response.data.main.temp

}

module.exports = {
    getClima
}