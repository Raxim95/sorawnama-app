export default function shablon(i: number, S: string[], lang: string = "QQ") {
	let var_text = "variant";
	if (lang === "RUS") var_text = "вариант";

	return `
\\begin{tabular}{m{17cm}}
\\textbf{${i + 1}-${var_text}}

${S[0]} \\\\
${S[1]} \\\\
${S[2]} \\\\
${S[3]} \\\\
${S[4]} \\\\
${S[5]} \\\\
${S[6]} \\\\
${S[7]} \\\\
${S[8]} \\\\
${S[9]} \\\\
${S[10]} \\\\

\\end{tabular}
\\vspace{1cm}

`;
}
