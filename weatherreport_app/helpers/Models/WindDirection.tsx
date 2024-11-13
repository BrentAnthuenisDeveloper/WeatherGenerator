class WindDirection {
    degrees: number;
    name: string;
    abreviation: string;

    private difference = 45
    private deviation = this.difference / 2;
    private windDirectionNameDict = [
        { maxdegree: 0 + this.deviation, mindegree: 360 - this.deviation, name: "North", abreviation: "N" },
        { maxdegree: 0 + this.difference * 1 + this.deviation, mindegree: 0 + this.difference * 1 - this.deviation, name: "Northeast", abreviation: "NE" },
        { maxdegree: 0 + this.difference * 2 + this.deviation, mindegree: 0 + this.difference * 2 - this.deviation, name: "East", abreviation: "E" },
        { maxdegree: 0 + this.difference * 3 + this.deviation, mindegree: 0 + this.difference * 3 - this.deviation, name: "Southeast", abreviation: "SE" },
        { maxdegree: 0 + this.difference * 4 + this.deviation, mindegree: 0 + this.difference * 4 - this.deviation, name: "South", abreviation: "S" },
        { maxdegree: 0 + this.difference * 5 + this.deviation, mindegree: 0 + this.difference * 5 - this.deviation, name: "Southwest", abreviation: "SW" },
        { maxdegree: 0 + this.difference * 6 + this.deviation, mindegree: 0 + this.difference * 6 - this.deviation, name: "West", abreviation: "W" },
        { maxdegree: 0 + this.difference * 7 + this.deviation, mindegree: 0 + this.difference * 7 - this.deviation, name: "Northwest", abreviation: "NW" },
    ];
    constructor(degrees: number) {
        this.degrees = degrees
        const item = this.windDirectionNameDict.find((item) => { degrees > item.mindegree && degrees < item.maxdegree }) || this.windDirectionNameDict[0]
        this.name=item.name
        this.abreviation=item.abreviation
    }
}

export default WindDirection