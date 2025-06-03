import * as _ from "lodash";

export default class PFSHA {
	questions: string[];
	i: number;
	needShuffle: boolean;

	constructor(_questions: string[], _needShuffle = true) {
		this.i = 0;
		this.needShuffle = _needShuffle;
		if (this.needShuffle) this.questions = _.shuffle(_questions);
		else this.questions = _questions;

		this.questions = _.compact(this.questions);
	}

	next() {
		if (this.i >= this.questions.length) {
			this.i = 0;
			if (this.needShuffle) this.questions = _.shuffle(this.questions);
		}
		let toReturn = this.questions[this.i];
		this.i++;
		return toReturn;
	}
}
