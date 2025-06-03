import * as fs from "fs";
import * as _ from "lodash";
import PFSHA from "./PFSHA";
import shablon from "./shablon uzb";
import texShablon from "./tex-shablon";

const read = (path: string) => fs.readFileSync(__dirname + path, "utf8").replaceAll("\r\n", "\n");

let All = read("/material/uzb/uzb.tex")
	.replaceAll("\r\n", "\n").split("++++");
// ------------------------------------------------
let All_Quesions = All.map((T) => _.compact(T.split("\n")));
let All_PFSHA = All_Quesions.map((T) => new PFSHA(T));
let T1 = All_PFSHA[0] // teoriya
let T2 = All_PFSHA[1] // teoriya
let T3 = All_PFSHA[2] // teoriya
let T4 = All_PFSHA[3] // teoriya
let I1 = All_PFSHA[4] // integral
let I2 = All_PFSHA[5] // integral
let I3 = All_PFSHA[6] // integral
let Q = All_PFSHA[7] // qatar
let DT = All_PFSHA[8] // diff.teńl
let IT = All_PFSHA[9] // itimallıq

// ------------------------------------------------
let variant = "";
let VARIANT_SANI = 100;

for (let i = 0; i < VARIANT_SANI; i++) {
	let [t1, t2, t3, t4] = [T1.next(), T2.next(), T3.next(), T4.next()]
	let [i1, i2, i3] = [I1.next(), I2.next(), I3.next()]
	let q = Q.next()
	let dt = DT.next()
	let it = IT.next()
	variant += shablon(i, [t1, t2, t3, t4, i1, i2, i3, q, dt, it]);
}
// ------------------------------------------------
fs.writeFileSync(__dirname + `/uzb 26-may.tex`, texShablon(variant));
