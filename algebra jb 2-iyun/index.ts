import * as fs from "fs";
import * as _ from "lodash";
import PFSHA from "./PFSHA";
import shablon from "./shablon";
import texShablon from "./tex-shablon";

const read = (path: string) =>
  fs
    .readFileSync(__dirname + path, "utf8")
    .replaceAll("\r\n", "\n");

let ALL = read("/material/qq.tex")
  .split("++++")
  .map((v) => new PFSHA(v.split("\n")));
// ------------------------------------------------
// ------------------------------------------------
let variant = "";
let VARIANT_SANI = 100;

for (let i = 0; i < VARIANT_SANI; i++) {
  const all = ALL.map((v) => v.next());
  variant += shablon(i, all);
}
// ------------------------------------------------
fs.writeFileSync(
  __dirname + `/algebra qq 3-iyun.tex`,
  texShablon(variant)
);
