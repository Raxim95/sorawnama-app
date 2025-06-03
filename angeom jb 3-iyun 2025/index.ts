import * as fs from "fs";
import * as _ from "lodash";
import shablon from "./shablon";
import texShablon from "./tex-shablon";
import { PFSHAA } from "./PFSHAA";

const read = (path: string) => fs.readFileSync(__dirname + path, "utf8").replaceAll("\r\n", "\n");

let T = new PFSHAA(
  read("/material/qq/T.tex")
    .split("++++")
    .map((v) => v.split("\n").filter((line) => line.trim() !== ""))
);
let A = new PFSHAA(
  read("/material/qq/A.tex")
    .split("++++")
    .map((v) => v.split("\n").filter((line) => line.trim() !== ""))
);
let B = new PFSHAA(
  read("/material/qq/B.tex")
    .split("++++")
    .map((v) => v.split("\n").filter((line) => line.trim() !== ""))
);
let C = new PFSHAA(
  read("/material/qq/C.tex")
    .split("++++")
    .map((v) => v.split("\n").filter((line) => line.trim() !== ""))
);

// ------------------------------------------------
let variant = "";
let VARIANT_SANI = 100;

for (let i = 0; i < VARIANT_SANI; i++) {
  variant += shablon(i, [...T.next(2), ...A.next(3), ...B.next(3), ...C.next(3)]);
}
// ------------------------------------------------
fs.writeFileSync(__dirname + `/amgeom QQ 3-iyun 2025.tex`, texShablon(variant));
