import * as fs from "fs";
import * as _ from "lodash";
import PFSHA from "./PFSHA";
import shablon from "./shablon";
import texShablon from "./tex-shablon";

const read = (path: string) => fs.readFileSync(__dirname + path, "utf8").replaceAll("\r\n", "\n");

let t = read("/t.tex").split("\n");
let e1 = read("/1.tex").split("\n");
let e2 = read("/2.tex").split("\n");
let e3 = read("/3.tex").split("\n");

let T_PFSHA = new PFSHA(t)
let E_PFSHA = [e1,e2,e3].map((T) => new PFSHA(T));

// ------------------------------------------------
let variant = "";
let VARIANT_SANI = 100;

for (let i = 0; i < VARIANT_SANI; i++) {
	let t1 = T_PFSHA.next()
	let t2 = T_PFSHA.next()
	let [e1,e2,e3] = E_PFSHA.map((T) => T.next());
	variant += shablon(i, [t1,t2,e1,e2,e3], "UZB");
}
// ------------------------------------------------
fs.writeFileSync(__dirname + `/algebra-shb-uzb.tex`, texShablon(variant));
