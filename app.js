const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'La ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima('Ottawa')
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const resp = await clima.getClima(direccion);
        const temp = resp.temp;
        return `El clima de ${direccion} es ${resp}`

    } catch (error) {

        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)