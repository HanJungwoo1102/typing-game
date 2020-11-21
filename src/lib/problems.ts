import Propblem from "./models/problem";

class Problems {
  private _problems: Propblem[];

  set problems(prob: Propblem[]) {
    this._problems = prob;
  }

  get problems() {
    return this._problems;
  }
}

export default Problems;
