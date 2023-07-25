import Zone from "./zones";

export default class Square {
    x: number
    y: number
    zone: Zone

    constructor(x: number, y: number, zone: Zone) {
        this.x = x
        this.y = y
        this.zone = zone
    }

    getId() {
        return `${this.x}_${this.y}`
    }
}