import * as fs from "fs";
import * as _ from "lodash";
import PFSHA from "./PFSHA";
import shablon from "./shablon";
import texShablon from "./tex-shablon";

const read = (path: string) => fs.readFileSync(__dirname + path, "utf8").replaceAll("\r\n", "\n");

let T1 = read("/material/T1.tex");
let T2 = read("/material/T2.tex");
let A1 = read("/material/A1.tex");
let A2 = read("/material/A2.tex");
let A3 = read("/material/A3.tex");
let B1 = read("/material/B1.tex");
let B2 = read("/material/B2.tex");
let B3 = read("/material/B3.tex");
let C1 = read("/material/C1.tex");
let C2 = read("/material/C2.tex");
let C3 = read("/material/C3.tex");
// ------------------------------------------------
let All = [T1, T2, A1, A2, A3, B1, B2, B3, C1, C2, C3];
let All_Quesions = All.map((T) => _.compact(T.split("\n")));
let All_PFSHA = All_Quesions.map((T) => new PFSHA(T));

// ------------------------------------------------
let variant = "";
let VARIANT_SANI = 50;

for (let i = 0; i < VARIANT_SANI; i++) {
	let S = All_PFSHA.map((T) => T.next());
	variant += shablon(i, S);
}
// ------------------------------------------------
fs.writeFileSync(__dirname + `/funan-qq-jb.tex`, texShablon(variant));
