export default function shablon(i: number, S: string[], lang: string = "QQ") {
	let var_text = "variant";
	if (lang === "RUS") var_text = "вариант";

	return `
\\begin{tabular}{m{17cm}}
\\textbf{${i + 1}-${var_text}}
\\newline

\\textbf{1.} ${S[0]} \\\\
\\textbf{2.} ${S[1]} \\\\
\\textbf{3.} ${S[2]} \\\\
\\textbf{4.} ${S[3]} \\\\
\\textbf{5.} ${S[4]} \\\\

\\end{tabular}
\\vspace{1cm}

`;
}
