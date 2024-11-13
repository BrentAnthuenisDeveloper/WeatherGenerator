import Temperature from "../../WeatherGeneration/Models/Temperature";
import WindDirection from "../../WeatherGeneration/Models/WindDirection";

;

type Weather = {
	cloudLevel: number;
	precipitationLevel: number;
	PrecipitationType: string;
	windDirection: WindDirection;
	windLevel: number;
	temperature: Temperature;
};
export default Weather;
