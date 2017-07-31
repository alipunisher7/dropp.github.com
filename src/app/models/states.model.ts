export interface IStates {
  name: string;
  id?: number;
}
export class States {
  name: string;
  id?: number;

  constructor(states: IStates) {
    this.id = states.id;
    this.name = states.name
  }
}
