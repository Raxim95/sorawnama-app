import * as fs from "fs";
import * as _ from "lodash";
import PFSHA from "./PFSHA";
import shablon from "./shablon";
import texShablon from "./tex-shablon";

const read = (path: string) => fs.readFileSync(__dirname + path, "utf8").replaceAll("\r\n", "\n");

let ALL = JSON.parse(read("/material/uzb.json"))
let [T, A1, A2, A3, B1, B2, B3, C1, C2, C3] = Object.keys(ALL).map(key =>
	new PFSHA(ALL[key])
)
// ------------------------------------------------
let variant = "";
let VARIANT_SANI = 100;

for (let i = 0; i < VARIANT_SANI; i++) {
	let [t1, t2] = [T.next(), T.next()]
	let [a1, a2, a3] = [A1.next(), A2.next(), A3.next()]
	let b1 = B1.next()
	let b2 = B2.next()
	let b3 = B3.next()
	let c1 = C1.next()
	let c2 = C2.next()
	let c3 = C3.next()
	variant += shablon(i, [t1, t2, a1, a2, a3, b1, b2, b3, c1, c2, c3]);
}
// ------------------------------------------------
fs.writeFileSync(__dirname + `/variant/sanmay uzb 31-may.tex`, texShablon(variant));
