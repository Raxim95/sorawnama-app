import * as fs from "fs"

const read = (path: string) => fs.readFileSync(__dirname + path, "utf8").replaceAll("\r\n", "\n");

let a = read("/material/uzb.tex")
a = a.replace(/([TABC][123]\.)/g, "====$1");
let b = a.split("====")


let c = {}
c["T1"] = [];
c["T2"] = [];
c["A1"] = [];
c["A2"] = [];
c["A3"] = [];
c["B1"] = [];
c["B2"] = [];
c["B3"] = [];
c["C1"] = [];
c["C2"] = [];
c["C3"] = [];

b.forEach(v => {
    if (v.startsWith("T1")) { c["T1"].push(v.replace(/T1\.\s?/, "").trim()) }
    if (v.startsWith("T2")) { c["T2"].push(v.replace(/T2\.\s?/, "").trim()) }
    if (v.startsWith("A1")) { c["A1"].push(v.replace(/A1\.\s?/, "").trim()) }
    if (v.startsWith("A2")) { c["A2"].push(v.replace(/A2\.\s?/, "").trim()) }
    if (v.startsWith("A3")) { c["A3"].push(v.replace(/A3\.\s?/, "").trim()) }
    if (v.startsWith("B1")) { c["B1"].push(v.replace(/B1\.\s?/, "").trim()) }
    if (v.startsWith("B2")) { c["B2"].push(v.replace(/B2\.\s?/, "").trim()) }
    if (v.startsWith("B3")) { c["B3"].push(v.replace(/B3\.\s?/, "").trim()) }
    if (v.startsWith("C1")) { c["C1"].push(v.replace(/C1\.\s?/, "").trim()) }
    if (v.startsWith("C2")) { c["C2"].push(v.replace(/C2\.\s?/, "").trim()) }
    if (v.startsWith("C3")) { c["C3"].push(v.replace(/C3\.\s?/, "").trim()) }
})

let d = ""

for (const key in c) {
    const element = c[key];

}

fs.writeFileSync(__dirname + "/material/uzb.json", JSON.stringify(c, null, 2), "utf-8")


