class Cloudiness {
    percent: number;
    level: number;
    constructor(percent: number) {
        this.percent = percent;
        this.level = 0
        if (percent > 15) this.level = 1
        if (percent > 66) this.level = 2
    }
}
export default Cloudiness