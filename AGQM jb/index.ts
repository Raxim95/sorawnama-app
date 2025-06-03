import * as fs from "fs";
import * as _ from "lodash";
import PFSHA from "./PFSHA";
import shablon from "./shablon";
import texShablon from "./tex-shablon";

const read = (path: string) => fs.readFileSync(__dirname + path, "utf8").replaceAll("\r\n", "\n");

let T = new PFSHA(read("/material/qq/t.tex").split("\n"));
let A = new PFSHA(read("/material/qq/a.tex").split("\n"));
let [B11, B21, B31] = read("/material/qq/b.tex").split("++++");
let B1 = new PFSHA(B11.split("\n"))
let B2 = new PFSHA(B21.split("\n"))
let B3 = new PFSHA(B31.split("\n"))
let [C11, C21, C31] = read("/material/qq/c.tex").split("++++");
let C1 = new PFSHA(C11.split("\n"))
let C2 = new PFSHA(C21.split("\n"))
let C3 = new PFSHA(C31.split("\n"))
// ------------------------------------------------
// ------------------------------------------------
let variant = "";
let VARIANT_SANI = 100;

for (let i = 0; i < VARIANT_SANI; i++) {
	let [t1, t2] = [T.next(), T.next()]
	let [a1, a2, a3] = [A.next(), A.next(), A.next()]
	let b1 = B1.next()
	let b2 = B2.next()
	let b3 = B3.next()
	let c1 = C1.next()
	let c2 = C2.next()
	let c3 = C3.next()
	variant += shablon(i, [t1, t2, a1, a2, a3, b1, b2, b3, c1, c2, c3]);
}
// ------------------------------------------------
fs.writeFileSync(__dirname + `/agqm qq 28-may.tex`, texShablon(variant));
