class Precipitation {
    mmperH: number;
    name: string;
    description?: string;

    private difference = 45
    private deviation = this.difference / 2;
    private precipitationNameDict = [
        {maxIndex:0.2,name:"No rain"},
        {maxIndex:2,name:"Weak rain"},
        {maxIndex:6,name:"Moderate rain"},
        {maxIndex:10,name:"Heavy rain"},
        {maxIndex:18,name:"Very Heavy rain"},
        {maxIndex:30,name:"Shower"},
        {maxIndex:10000,name:"Cloudburst"},
    ];
    constructor(mmPerH: number) {
        this.mmperH = mmPerH
        const item = this.precipitationNameDict.findLast((item) => { this.mmperH < item.maxIndex }) || this.precipitationNameDict[this.precipitationNameDict.length - 1]
        this.name=item.name
    }
}
export default Precipitation