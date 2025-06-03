import * as fs from "fs";
import * as _ from "lodash";
import shablon from "./shablon";
import texShablon from "./tex-shablon";

let rus = fs.readFileSync(__dirname + "/uzb.tex", "utf-8");
let rus2 = rus.replaceAll("\r\n", "\n").split("\n");

rus2 = rus2.filter((v) => v !== "====");
let rus3 = _.chunk(rus2, 11);

let variant = "";

let VARIANT_SANI = 50;

let j = 0;

for (let i = 0; i < VARIANT_SANI; i++) {
	if (j === rus3.length) j = 0;

	let S = rus3[j];
	variant += shablon(i, S, "QQ");
	j++;
}

fs.writeFileSync(__dirname + `/mom-uzb-keshki-jb.tex`, texShablon(variant));
