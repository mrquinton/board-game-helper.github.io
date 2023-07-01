import Move from "./move";

export default interface Hero {
    id: string,
    name: string,
    activeMoves: Move[],
    upgradeableMoves: Move[]
}