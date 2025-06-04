import * as _ from "lodash";

// PFSHA: Pseudo-randomized Flat SHuffle Array
export class PFSHA<T> {
  private i: number;
  private questions: T[];

  constructor(_questions: T[]) {
    this.i = 0;
    this.questions = _.shuffle(_questions.filter((q) => q != null));
  }

  next(count: number = 1): T[] | null {
    if (count <= 0) return null;
    if (count === 1) return [this.give()];

    const result: T[] = [];
    for (let j = 0; j < count; j++) {
      const q = this.give();
      if (q !== null) result.push(q);
    }

    return result.length > 0 ? result : null;
  }

  private give(): T | null {
    if (this.questions.length === 0) return null;
    if (this.i >= this.questions.length) {
      this.i = 0;
      this.questions = _.shuffle(this.questions);
    }
    return this.questions[this.i++];
  }
}

// PFSHAA: Pseudo-randomized Flat SHuffle Array of Arrays
export class PFSHAA<T> {
  private indexes: PFSHA<number>;
  private kategoriyalar: PFSHA<T>[];

  constructor(kategoriyalar: T[][]) {
    this.indexes = new PFSHA(_.range(kategoriyalar.length));
    this.kategoriyalar = kategoriyalar.map((v) => new PFSHA(v));
  }

  give(): T | null {
    const index = this.indexes.next()[0] as number | null;
    if (index === null) return null;

    const [nextQ] = this.kategoriyalar[index]?.next();
    return typeof nextQ === "string" ? nextQ : nextQ?.[0] ?? null;
  }

  next(count: number = 1): T[] | null {
    if (count <= 0) return null;
    if (count === 1) return [this.give()];

    const result: T[] = [];
    for (let j = 0; j < count; j++) {
      const q = this.give();
      if (q) result.push(q);
    }

    return result.length > 0 ? result : null;
  }
}
