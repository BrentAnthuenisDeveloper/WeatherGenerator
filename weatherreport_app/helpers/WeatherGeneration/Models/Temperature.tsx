class Temperature {
    C: number;
    F: number;
    K: number;
    level: number;

    private TemperatureNameDict = [
        {}
    ];

    constructor(c: number) {
        this.C = c;
        this.F = this.converToFahrenheit(c);
        this.K = this.convertToKelvin(c)
        this.level = -2
        if (this.C > -20) this.level = -1
        if (this.C >= 0) this.level = 1
        if (this.C > 30) this.level = 2
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