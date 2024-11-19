import Cloudiness from "./Models/Cloudiness";
import { getEffect } from "./Models/Effect";
import Precipitation from "./Models/Precipitation";
import Temperature from "./Models/Temperature";
import Weather from "./Models/Weather";
import WeatherReport from "./Models/WeatherReport";
import WindDirection from "./Models/WindDirection";
import WindSpeed from "./Models/WindSpeed";

class WeatherGenerator {
	weatherReports: WeatherReport[];
	currentWeatherReport: WeatherReport | undefined;
	constructor() {
		this.weatherReports = [];
		this.AddDummyWeatherReports(5);
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
		return this.randomNormal(8, 12);
	};
	private generateWindSpeed = () => {
		let windspeed = this.randomNormal(34, (117 - 34) / 2);
		if (windspeed < 0) {
			windspeed = 0;
		}
		return windspeed;
	};
	private generateWindDirection = () => {
		const windDirection = Math.floor(Math.random() * 361);
		return windDirection;
	};
	private generatePrecipitation = () => {
		let precipitation = this.randomNormal(5, 25) - 10;
		if (precipitation < 0) {
			precipitation = 0;
		}
		return precipitation;
	};
	generatePrecipitationType = (temperature: Temperature): string => {
		if (temperature.C > 0) return "rain";
		return "snow";
	};
	generateCloudiness = (precipitation: Precipitation): Cloudiness => {
		if (precipitation.mmperH > 6) return new Cloudiness(100);
		if (precipitation.mmperH > 0.5)
			return new Cloudiness(this.randomNormal(50, 25));
		return new Cloudiness(this.randomNormal(0, 50));
	};

	GenerateRandomWeather = (): Weather => {
		const temperature: Temperature = new Temperature(
			this.generateTemperature()
		);
		const windSpeed: WindSpeed = new WindSpeed(this.generateWindSpeed());
		const windDirection: WindDirection = new WindDirection(
			this.generateWindDirection()
		);
		const precipitation: Precipitation = new Precipitation(
			this.generatePrecipitation()
		);
		const precipationtype = this.generatePrecipitationType(temperature);
		const cloudiness = this.generateCloudiness(precipitation);

		//generate Practical weather
		let effects = [];
		if (cloudiness.level == 2) effects.push(getEffect("heavy clouds"));
		else effects.push(getEffect("clear skies"));
		if (temperature.level == -2) effects.push(getEffect("freezing cold"));
		else if (temperature.level == 2) effects.push(getEffect("scorching heat"));
		if (precipitation.level > 0) {
			if (precipationtype == "rain") {
				if (precipitation.level == 1) effects.push(getEffect("rain"));
				if (precipitation.level == 2) effects.push(getEffect("heavy_rain"));
			} else if (precipationtype == "snow") effects.push(getEffect("snow"));
			if (windSpeed.level == 3) {
				if (precipationtype == "rain") effects.push(getEffect("thunderstorm"));
				else if (precipationtype == "snow") effects.push(getEffect("blizzard"));
			}
		} else if (windSpeed.level == 2) effects.push(getEffect("high winds"));

		const generatedWeather: Weather = {
			temperature,
			windSpeedIn_Kmperh: windSpeed,
			windDirection,
			precipitationIn_mmperH: precipitation,
			precipationtype: precipationtype,
			cloudiness: cloudiness,
			effects: effects,
		};
		return generatedWeather;
	};
	GenerateRandomWeatherReport = (datetime: Date): WeatherReport => {
		const newWeatherReport: WeatherReport = {
			dateTime: datetime,
			weather: this.GenerateRandomWeather(),
		};
		this.weatherReports.push(newWeatherReport);
		this.currentWeatherReport = newWeatherReport;
		return newWeatherReport;
	};
	AddDummyWeatherReports = (count: number): void => {
		for (let index = 0; index < count; index++) {
			const rndDate = this.randomDate(new Date(1900, 0, 1), new Date());
			this.GenerateRandomWeatherReport(rndDate);
		}
	};
	randomDate = (start: Date, end: Date): Date => {
		return new Date(
			start.getTime() + Math.random() * (end.getTime() - start.getTime())
		);
	};
}

export default WeatherGenerator;
