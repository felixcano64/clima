const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeURL = encodeURI(direccion);

    const instance = axios.create({

        baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/locale/locales',
        //baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': '5a144511a5msh330c695f0ae1ba0p1eeb8ajsne100197e417a' }

    });

    const resp = await instance.get();

    if (!resp.data) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.data[0];

    code = data.code;

    //const direc = data.name;
    //const lat = data.lat;
    //const lng = data.lon;

    return {
        code
        //direc,
        //lat,
        //lng
    }

}

module.exports = {
    getLugarLatLng
}

// var unirest = require("unirest");
// var req = unirest("GET", "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php");
// req.query({
// 	"location": "New York"
// });
// req.headers({
// 	"x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
// 	"x-rapidapi-key": "5a144511a5msh330c695f0ae1ba0p1eeb8ajsne100197e417a",
// 	"useQueryString": true
// });