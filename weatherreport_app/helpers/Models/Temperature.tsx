class Temperature {
    C: number;
    F: number;
    K: number;

    private TemperatureNameDict = [
        {}
    ];

    constructor(c: number) {
        this.C = c;
        this.F = this.converToFahrenheit(c);
        this.K=this.convertToKelvin(c)
    }
    converToFahrenheit = (c: number): number => {
        return (c * 9 / 5) + 32
    }
    convertToCelcius = (k: number): number => {
        return k - 273.15
    }
    convertToKelvin = (c: number): number => {
        return c + 273.15
    }
}

export default Temperature