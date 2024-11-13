class WindSpeed {
    level: number;
    KmperH: number;
    knots: number;
    name: string;

    private windSpeedToBeaufortNameDict = [
        { KmPerH: 1, name: "Calm", level: 0, description: "smoke rises vertically" },
        { KmPerH: 5, name: "Light air", level: 0, description: "smoke drift in the direction of the wind" },
        { KmPerH: 11, name: "Light breeze", level: 1, description: "wind felt on face" },
        { KmPerH: 19, name: "Gentle breeze", level: 1, description: "leaves and small twigs in constant motion" },
        { KmPerH: 28, name: "Moderate breeze", level: 1, description: "raised dust and  light garbage" },
        { KmPerH: 38, name: "Fresh breeze", level: 1, description: "small trees and leaves begin to sway" },
        { KmPerH: 49, name: "Strong breeze", level: 1, description: "large branches in motion" },
        { KmPerH: 61, name: "Near gale", level: 2, description: "whole trees in motion" },
        { KmPerH: 74, name: "Gale", level: 2, description: "twigs break off trees" },
        { KmPerH: 88, name: "Strong gale", level: 2, description: "slight structural damage" },
        { KmPerH: 102, name: "Storm", level: 3, description: "trees uprooted, considerable structural damage" },
        { KmPerH: 117, name: "Violent storm", level: 3, description: "widespread damage" },
        { KmPerH: 10000, name: "Hurricane", level: 3, description: "devastation" }
    ];

    constructor(KmperH: number) {
        this.KmperH = KmperH;
        this.knots = this.converToKnots(KmperH);
        const item = this.windSpeedToBeaufortNameDict.findLast((item) => { this.KmperH < item.KmPerH }) || this.windSpeedToBeaufortNameDict[this.windSpeedToBeaufortNameDict.length - 1]
        this.level = item.level
        this.name = item.name
    }
    converToKnots = (KmperH: number): number => {
        return KmperH * (1.852 / 1)
    }
    convertToKmperH = (knots: number): number => {
        return knots * 1.852
    }
}

export default WindSpeed