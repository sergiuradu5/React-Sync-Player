import { Player } from "./Player";

export interface IController {
  id: string;
  players: string[];
  isPlaying: boolean;
  currentTime: number;
  duration: number | undefined;
}

export class Controller implements IController {
  public isPlaying: boolean = false;
  public currentTime: number = 0;
  public duration: number | undefined = undefined;
  public players: string[] = [];
  public id!: string;

  constructor(id?: string | number, players?: string[]) {
    if (players?.length) {
      this.players.push(...players);
    }
    this.id = `${id || Math.ceil(Math.random() * 500)}`;
  }
}
