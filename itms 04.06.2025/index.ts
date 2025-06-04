import * as fs from "fs";
import * as _ from "lodash";
import shablon from "./shablon";
import texShablon from "./tex-shablon";
import { PFSHAA, PFSHA } from "./PFSHAA";

const read = (path: string) => fs.readFileSync(__dirname + path, "utf8").replaceAll("\r\n", "\n");

let path = "/material/qq";

let [T1, T2] = read(path + "/T.tex")
  .split("++++")
  .map((v) => new PFSHA(v.split("====\n").filter((line) => line.trim() !== "")));
let A = new PFSHAA(
  read(path + "/A.tex")
    .split("++++")
    .map((v) => v.split("====\n").filter((line) => line.trim() !== ""))
);
let B = new PFSHAA(
  read(path + "/B.tex")
    .split("++++")
    .map((v) => v.split("====\n").filter((line) => line.trim() !== ""))
);
let C = new PFSHAA(
  read(path + "/C.tex")
    .split("++++")
    .map((v) => v.split("====\n").filter((line) => line.trim() !== ""))
);

// ------------------------------------------------
let variant = "";
let VARIANT_SANI = 100;

for (let i = 0; i < VARIANT_SANI; i++) {
  variant += shablon(i, [...T1.next(), ...T2.next(), ...A.next(3), ...B.next(3), ...C.next(3)]);
}
// ------------------------------------------------
fs.writeFileSync(__dirname + `/itms QQ 04.06.2025.tex`, texShablon(variant));
