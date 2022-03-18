import { Column } from "./column.model";

/**
 * This class represents as boards of square
 */
export class Board {
    /**
     * this params for create a new board
     * @param name 
     * @param columns 
     */
    constructor(public name: string, public columns: Column[]) {}
}