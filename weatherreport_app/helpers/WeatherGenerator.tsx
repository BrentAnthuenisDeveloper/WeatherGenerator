import Precipitation from "./Models/Precipitation";
import Temperature from "./Models/Temperature";
import Weather from "./Models/Weather";
import WeatherReport from "./Models/WeatherReport";
import WindDirection from "./Models/WindDirection";
import WindSpeed from "./Models/WindSpeed";

class WeatherGenerator {
    weatherReports: WeatherReport[]
    constructor() {
        this.weatherReports = []
    }
    private randomNormal(mean: number = 0, stdDev: number) {
        // Generate two uniform random numbers in the range (0, 1)
        let u1 = Math.random();
        let u2 = Math.random();

        // Box-Muller transform
        let z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

        // Return the transformed value scaled by the standard deviation and shifted by the mean
        return mean + z0 * stdDev;
    }
    private generateTemperature = () => {
        return this.randomNormal(8, 12)
    }
    private generateWindSpeed = () => {
        let windspeed = this.randomNormal(34, (117 - 34) / 2)
        if (windspeed < 0) {
            windspeed = 0
        }
        return windspeed
    }
    private generateWindDirection = () => {
        const windDirection = Math.floor(Math.random() * 361);
        return windDirection
    }
    private generatePrecipitation = () => {
        let precipitation = this.randomNormal(5, 25) - 10
        if (precipitation < 0) {
            precipitation = 0
        }
        return precipitation
    }
    GenerateRandomWeather = () => {
        const temperature: Temperature = new Temperature(this.generateTemperature())
        const windSpeed: WindSpeed = new WindSpeed(this.generateWindSpeed())
        const windDirection: WindDirection = new WindDirection(this.generateWindDirection())
        const precipitation: Precipitation = new Precipitation(this.generatePrecipitation())
        const generatedWeather: Weather = { temperature, windSpeedIn_Kmperh: windSpeed, windDirection, precipitationIn_mmperH: precipitation }
        return generatedWeather
    };
}

export default WeatherGenerator