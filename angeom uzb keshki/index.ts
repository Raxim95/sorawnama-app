import * as fs from "fs";
import * as _ from "lodash";
import PFSHA from "./PFSHA";
import shablon from "./shablon";
import texShablon from "./tex-shablon";

const read = (path: string) => fs.readFileSync(__dirname + path, "utf8").replaceAll("\r\n", "\n");

let uzb = read("/material/uzb.tex");

let All = _.compact(uzb.split("++++"));
let All_Quesions = All.map((T) => _.compact(T.split("====")));
let All_PFSHA = All_Quesions.map((T) => new PFSHA(T));

// ------------------------------------------------
let variant = "";
let VARIANT_SANI = 50;

for (let i = 0; i < VARIANT_SANI; i++) {
	let S = All_PFSHA.map((T) => T.next());
	variant += shablon(i, S, "");
}
// ------------------------------------------------
fs.writeFileSync(__dirname + `/angeom-uzb-keshki-jb.tex`, texShablon(variant));
