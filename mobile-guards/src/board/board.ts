import Square from "./square";
import Zone from "./zones";

export const SPAWN_HEIGHT = 1
export const LANE_ADDITIVE = 1
export const ZONE_WIDTH = 10
export const ZONE_HEIGHT = 4
export const BOARD_HEIGHT = (3 * ZONE_HEIGHT) + (2 * LANE_ADDITIVE) + (2 * SPAWN_HEIGHT)
export const JUNGLE_WIDTH = 2
export const JUNGLE_HEIGHT = Math.floor(BOARD_HEIGHT / 2)

const createLeftJungle = () => {
    const spaces: { [ key: string ]: Square } = {}
    for (let i = 0; i < JUNGLE_HEIGHT; i++) {
        for (let j = 0; j < JUNGLE_WIDTH; j++) {
            const space = new Square(i, j, Zone.LEFT_JUNGLE)
            spaces[space.getId()] = space
        }
    }
    for (let i = JUNGLE_HEIGHT; i < BOARD_HEIGHT; i++) {
        for (let j = 0; j < JUNGLE_WIDTH; j++) {
            console.log(i, j)
            const space = new Square(i, j, Zone.OBSTACLE)
            spaces[space.getId()] = space
        }
    }

    return spaces
}

const createTopSpawn = () => {
    const spaces: { [ key: string ]: Square } = {}
    for (let i = 0; i < SPAWN_HEIGHT; i++) {
        for (let j = JUNGLE_WIDTH; j < ZONE_WIDTH + JUNGLE_WIDTH; j++) {
            const space = new Square(i, j, Zone.TOP_SPAWN)
            spaces[space.getId()] = space
        }
    }

    return spaces
}

const createTopLane = () => {
    const spaces: { [ key: string ]: Square } = {}
    for (let i = SPAWN_HEIGHT; i < ZONE_HEIGHT + SPAWN_HEIGHT + LANE_ADDITIVE; i++) {
        for (let j = JUNGLE_WIDTH; j < ZONE_WIDTH + JUNGLE_WIDTH; j++) {
            const space = new Square(i, j, Zone.TOP_LANE)
            spaces[space.getId()] = space
        }
    }

    return spaces
}

const createCenterLane = () => {
    const spaces: { [ key: string ]: Square } = {}
    for (let i = ZONE_HEIGHT + SPAWN_HEIGHT + LANE_ADDITIVE; i < (ZONE_HEIGHT * 2) + SPAWN_HEIGHT + LANE_ADDITIVE; i++) {
        for (let j = JUNGLE_WIDTH; j < ZONE_WIDTH + JUNGLE_WIDTH; j++) {
            const space = new Square(i, j, Zone.CENTER)
            spaces[space.getId()] = space
        }
    }

    return spaces
}

const createBottomLane = () => {
    const spaces: { [ key: string ]: Square } = {}
    for (let i = (ZONE_HEIGHT * 2) + SPAWN_HEIGHT + LANE_ADDITIVE; i < (ZONE_HEIGHT * 3) + SPAWN_HEIGHT + (LANE_ADDITIVE * 2); i++) {
        for (let j = JUNGLE_WIDTH; j < ZONE_WIDTH + JUNGLE_WIDTH; j++) {
            const space = new Square(i, j, Zone.BOTTOM_LANE)
            spaces[space.getId()] = space
        }
    }

    return spaces
}

const createBottomSpawn = () => {
    const spaces: { [ key: string ]: Square } = {}
    for (let i = (ZONE_HEIGHT * 3) + SPAWN_HEIGHT + (LANE_ADDITIVE * 2); i < (ZONE_HEIGHT * 3) + (SPAWN_HEIGHT * 2) + (LANE_ADDITIVE * 2); i++) {
        for (let j = JUNGLE_WIDTH; j < ZONE_WIDTH + JUNGLE_WIDTH; j++) {
            const space = new Square(i, j, Zone.BOTTOM_SPAWN)
            spaces[space.getId()] = space
        }
    }

    return spaces
}

const createRightJungle = () => {
    const spaces: { [ key: string ]: Square } = {}
    for (let i = 0; i < JUNGLE_HEIGHT; i++) {
        for (let j = JUNGLE_WIDTH + ZONE_WIDTH; j < (JUNGLE_WIDTH * 2) + ZONE_WIDTH; j++) {
            const space = new Square(i, j, Zone.OBSTACLE)
            spaces[space.getId()] = space
        }
    }
    for (let i = JUNGLE_HEIGHT; i < BOARD_HEIGHT; i++) {
        for (let j = JUNGLE_WIDTH + ZONE_WIDTH; j < (JUNGLE_WIDTH * 2) + ZONE_WIDTH; j++) {
            const space = new Square(i, j, Zone.RIGHT_JUNGLE)
            spaces[space.getId()] = space
        }
    }

    return spaces
}

const boardDefinition = {
    ...createLeftJungle(),
    ...createTopSpawn(),
    ...createTopLane(),
    ...createCenterLane(),
    ...createBottomLane(),
    ...createBottomSpawn(),
    ...createRightJungle(),
}

export class Board {
    spaces: { [ key: string ]: Square }

    constructor(spaces: { [ key: string ]: Square }) {
        this.spaces = spaces
    }

    getByLocation(x: number, y: number) {
        const key = `${x}_${y}`
        return this.spaces[key]
    }

    getById(id: string) {
        return this.spaces[id]
    }

    toArray() {
        const arraySpaces: Square[][] = [[]]
        for (const space of Object.values(this.spaces)) {
            if (!arraySpaces[space.x]) {
                arraySpaces[space.x] = []
            }
            arraySpaces[space.x][space.y] = space
        }
        return arraySpaces
    }

    getAdjacentSpaces(space: Square) {
        const spaces = []
        const spaceAbove = this.getByLocation(space.x - 1, space.y)
        if (spaceAbove) {
            spaces.push(spaceAbove)
        }
        const spaceToRight = this.getByLocation(space.x, space.y + 1)
        if (spaceToRight) {
            spaces.push(spaceToRight)
        }
        const spaceBelow = this.getByLocation(space.x + 1, space.y)
        if (spaceBelow) {
            spaces.push(spaceBelow)
        }
        const spaceToLeft = this.getByLocation(space.x, space.y - 1)
        if (spaceToLeft) {
            spaces.push(spaceToLeft)
        }

        return spaces
    }
}

export const board = new Board(boardDefinition)