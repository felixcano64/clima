const axios = require('axios');


const getClima = async(ciudad) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=a9aa92cfb9d027a08b8f7b2d2b643d5a&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}