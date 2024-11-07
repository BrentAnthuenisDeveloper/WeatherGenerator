import Precipitation from "./Models/Precipitation";
import Temperature from "./Models/Temperature";
import Weather from "./Models/Weather";
import WindDirection from "./Models/WindDirection";
import WindSpeed from "./Models/WindSpeed";

function randomNormal(mean: number = 0, stdDev: number) {
    // Generate two uniform random numbers in the range (0, 1)
    let u1 = Math.random();
    let u2 = Math.random();

    // Box-Muller transform
    let z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

    // Return the transformed value scaled by the standard deviation and shifted by the mean
    return mean + z0 * stdDev;
}
const generateTemperature = () => {
    return randomNormal(0, 20)
}
const generateWindSpeed = () => {
    let windspeed = randomNormal(34, 17)
    if (windspeed < 0) {
        windspeed = 0
    }
    return windspeed
}
const generateWindDirection = () => {
    const windDirection = Math.floor(Math.random() * 361);
    return windDirection
}
const generatePrecipitation = () => {
    let precipitation = randomNormal(5, 5)
    if (precipitation < 0) {
        precipitation = 0
    }
    return precipitation
}
const GenerateRandomWeather = () => {
    const temperature: Temperature = new Temperature(generateTemperature())
    const windSpeed: WindSpeed = new WindSpeed(generateWindSpeed())
    const windDirection: WindDirection = new WindDirection(generateWindDirection())
    const precipitation: Precipitation = new Precipitation(generatePrecipitation())
    const generatedWeather: Weather = { temperature, windSpeedIn_Kmperh: windSpeed, windDirection, precipitationIn_mmperH: precipitation }
    return generatedWeather
};
export default GenerateRandomWeather