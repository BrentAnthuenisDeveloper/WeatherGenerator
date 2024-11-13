import Precipitation from "./Precipitation"
import Temperature from "./Temperature"
import WindDirection from "./WindDirection"
import WindSpeed from "./WindSpeed"

export type Weather = {
    temperature: Temperature
    windSpeedIn_Kmperh: WindSpeed
    windDirection: WindDirection
    precipitationIn_mmperH: Precipitation
}
export default Weather