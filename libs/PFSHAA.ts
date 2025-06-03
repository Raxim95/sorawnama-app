class PFSHAA<T> {
  private pool: { question: T; categoryIndex: number }[] = [];
  private n: number;

  constructor(private categories: T[][], n: number) {
    if (n > categories.length) {
      throw new Error("Cannot pick more questions than there are categories.");
    }

    // Initialize pool with category-aware entries
    this.resetPool();
  }

  private resetPool() {
    this.pool = this.categories.flatMap((category, catIdx) =>
      category.map(q => ({ question: q, categoryIndex: catIdx }))
    );
  }

  next(): T[] {
    if (this.pool.length < this.n) {
      // throw new Error("Not enough unused questions to generate a new set.");
      this.resetPool(); // if you want it to auto-reset instead
    }

    const selected: { question: T; categoryIndex: number }[] = [];
    const usedCategories = new Set<number>();

    // Try to find `n` questions from distinct categories
    while (selected.length < this.n) {
      const index = Math.floor(Math.random() * this.pool.length);
      const candidate = this.pool[index];

      if (!usedCategories.has(candidate.categoryIndex)) {
        usedCategories.add(candidate.categoryIndex);
        selected.push(candidate);
        this.pool.splice(index, 1); // Remove used question
      }

      // If we're stuck (e.g. not enough unique categories left), break early
      if (this.pool.filter(q => !usedCategories.has(q.categoryIndex)).length === 0) {
        break;
      }
    }

    if (selected.length < this.n) {
      throw new Error("Not enough distinct categories remaining in pool.");
    }

    return selected.map(item => item.question);
  }
}


export default PFSHAA