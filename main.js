const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

/* GET WEATHER ON DOM LOAD */
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    getWeather();

    $('#exampleModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => ui.paint(results))
        .catch(err => console.log(err));
}