import Precipitation from "../WeatherGeneration/Models/Precipitation";
import Temperature from "../WeatherGeneration/Models/Temperature";
import WeatherReport from "../WeatherGeneration/Models/WeatherReport";
import WindSpeed from "../WeatherGeneration/Models/WindSpeed";
import WeatherReportRepresentation from "./Models/WeatherReportRepresentation";
class WeatherRepresentationConverter {
	convertWeatherReport = (
		weatherreport: WeatherReport
	): WeatherReportRepresentation => {
		const converted: WeatherReportRepresentation = {
			dateTime: weatherreport.dateTime,
			weather: {
				windDirection: weatherreport.weather.windDirection,
				temperature: weatherreport.weather.temperature,
				windLevel: this.convertWindLevel(
					weatherreport.weather.windSpeedIn_Kmperh
				),
				precipitationLevel: this.convertPrecipationLevel(
					weatherreport.weather.precipitationIn_mmperH
				),
				cloudLevel:0,
				PrecipitationType:"rain"
			},
		};
		return converted;
	};
	convertPrecipationLevel = (precipation: Precipitation): number => {
		let level = 0;
		if (precipation.mmperH >= 10) level = 2;
		else if (precipation.mmperH >= 2) level = 1;
		else if (precipation.mmperH >= 0) level = 0;
		return level;
	};
	convertWindLevel = (windspeed: WindSpeed): number => {
		let level = 0;
		if (windspeed.level >= 10) level = 3;
		else if (windspeed.level >= 6) level = 2;
		else if (windspeed.level >= 2) level = 1;
		else if (windspeed.level >= 0) level = 0;
		return level;
	};
	ConvertTemperature = (temperature: Temperature): number => {
		const conversionobjects = [
			{ mintemp: 0, maxtemp: 30, level: 1 },
			{ mintemp: -20, maxtemp: 0, level: -1 },
			{ mintemp: -1000, maxtemp: -20, level: -2 },
			{ mintemp: 30, maxtemp: 1000, level: 2 },
		];
		let level = 0;
		conversionobjects.forEach((item) => {
			if (item.mintemp > temperature.C && item.maxtemp < temperature.C)
				level = item.level;
		});
		return level;
	};
}
