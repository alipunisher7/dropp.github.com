export interface IBugs {
  description: string;
  passengerUsername?: string;
  driverUsername?: string;
  state: string;
  id: number;
}
export class Bugs implements IBugs {
  description: string;
  passengerUsername?: string;
  driverUsername?: string;
  state: string;
  id: number;
  private stateNames = {
    "U": "رسیدگی نشده",
    "R": "رسیدگی شده"
  }
  get stateName() {
    return this.stateNames[this.state];
  }
  constructor(bugs: IBugs) {
    this.description = bugs.description;
    this.passengerUsername = bugs.passengerUsername;
    this.driverUsername = bugs.driverUsername;
    this.state = bugs.state;
    this.id = bugs.id;
  }
}
