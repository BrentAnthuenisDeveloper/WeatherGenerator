class Effect {

    name: string;
    description: string;
    gameplayEffect: string;

    constructor(name: string, description: string, gameplayEffect: string) {
        this.name = name
        this.description = description
        this.gameplayEffect = gameplayEffect
    }
}

const EFFECTS = [
    new Effect("clear skies", "it's clear and sunny", "no effect"),
    new Effect("heavy clouds", "it's cloudy", "The sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."),
    new Effect("rain", "it's raining", "Unpleasant to travel in. If you have wagons, your travel pace is slowed by half. If you attempt to take a long rest without cover, you must make a DC 12 Constitution saving throw gain the benefits for a long rest.All fire damage rolls have a –2. Also has the effect of Heavy Clouds."),
    new Effect("heavy rain", "it's raining a lot", "Same as rain, but the DC becomes 16 to benefit from a long rest without shelter and if Heavy Rain occurs two days in a row wagon travel becomes impossible until one day without rain occurs. May cause flooding.All fire damage rolls have a –4. Lightning and Cold damage rolls gain a +2. Also has the effect of Heavy Clouds."),
    new Effect("snow", "it's snowing", "Unpleasant to travel in. All travel speed is halved. If snow occurs for two days in row, all terrain is difficult terrain and wagon travel is impossible until one day without snow passes. Also has the the effect of Heavy Clouds and Freezing Cold.Replace with Rain when in climates without snow."),
    new Effect("freezing cold", "it's freezing cold", "If you attempt to take a long rest without cover and heat, you must make a DC 15 Constitution saving throw gain the benefits for a long rest. If you fail by 5 or more, you gain an additional level of Exhaustion.All cold damage rolls have a +2."),
    new Effect("scorching heat", "it's very hot", "Blistering heat that is unpleasant to travel in. Creatures that attempt to travel during day light hours require twice the ration of water, and creature that travel for 4 or more hours or engage in heavy activity for 1 or more hour during the day and do not immediately take a short or long rest under cover must make a DC 10 Constitution saving throw or gain a level of Exhaustion.All fire damage rolls have a +2. All cold damage rolls have a –2."),
    new Effect("heavy wind", "there's a lot of wind", "Turbulent gusts sweep across the land. Select a wind direction based on locale or roll a d4 and consult the table. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.All ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind."),
    new Effect("thunderstorm", "it's storming", "Lightning flashes and thunder crashes. All creatures are partially obscured if they are more than 20 feet from you.If you travel for 4 or more hours during a Thunderstorm, roll a d20. On a 1, you are struck by a lightning bolt dealing 3d12 lightning damage. Lightning and Thunder damage rolls have a +2. Also has the effect of Rain, High Winds, Heavy Clouds."),
    new Effect("Blizzard", "theres a blizzard going on", "At the end of every hour spend in a Blizzard, make a DC 12 Constitution saving. On failure, you take 3d4 cold damage and gain one level of exhaustion. You make this check with advantage if you have proper gear. All creatures are heavily obscured if they are more than 20 feet from you. All terrain is difficult terrain. Also has the effect of Snow, High Winds, and Freezing Cold. Replace with Thunderstorm when in climates without snow.")
]

export const getEffect = (name: string): Effect | undefined => {
    return EFFECTS.find((value) => value.name == name)
}
export default Effect