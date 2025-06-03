import * as fs from "fs";

let shablon = fs.readFileSync(__dirname + "/shablon.tex", "utf8");

export default function texShablon(tex = "", preamble = "") {
	return shablon.replace("${preamble}", preamble).replace("${tex}", tex);
}
