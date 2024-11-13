class Precipitation {
    mmperH: number;
    name: string;
    description?: string;
    level: number;

    private difference = 45
    private deviation = this.difference / 2;
    private precipitationNameDict = [
        { maxIndex: 0.5, name: "No rain" },
        { maxIndex: 2, name: "Weak rain" },
        { maxIndex: 6, name: "Moderate rain" },
        { maxIndex: 10, name: "Heavy rain" },
        { maxIndex: 18, name: "Very Heavy rain" },
        { maxIndex: 30, name: "Shower" },
        { maxIndex: 10000, name: "Cloudburst" },
    ];
    constructor(mmPerH: number) {
        this.mmperH = mmPerH
        const item = this.precipitationNameDict.findLast((item) => { this.mmperH < item.maxIndex }) || this.precipitationNameDict[this.precipitationNameDict.length - 1]
        this.name = item.name
        this.level = 0
        if (this.mmperH > 0.5) this.level = 1
        if (this.mmperH > 6) this.level = 2
    }
}
export default Precipitation;
