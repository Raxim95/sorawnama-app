import * as _ from "lodash";

export default class PFSHA {
	questions: string[];
	i: number;
	constructor(_questions: string[]) {
		this.i = 0;
		this.questions = _.compact(_.shuffle(_questions));
	}

	next() {
		if (this.i >= this.questions.length) {
			this.i = 0;
			this.questions = _.shuffle(this.questions);
		}
		let toReturn = this.questions[this.i];
		this.i++;
		return toReturn;
	}
}
