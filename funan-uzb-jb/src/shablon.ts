export default function shablon(i: number, S: string[], lang: string = "QQ") {
	let var_text = "bilet";
	if (lang === "RUS") var_text = "вариант";

	return `
\\begin{tabular}{m{17cm}}
\\textbf{${i + 1}-${var_text}}

\\vspace{0.5cm}

\\textbf{T1.} ${S[0]} \\\\
\\textbf{T2.} ${S[1]} \\\\
\\textbf{A1.} ${S[2]} \\\\
\\textbf{A2.} ${S[3]} \\\\
\\textbf{A3.} ${S[4]} \\\\
\\textbf{B1.} ${S[5]} \\\\
\\textbf{B2.} ${S[6]} \\\\
\\textbf{B3.} ${S[7]} \\\\
\\textbf{C1.} ${S[8]} \\\\
\\textbf{C2.} ${S[9]} \\\\
\\textbf{C3.} ${S[10]} \\\\

\\end{tabular}
\\vspace{1cm}

`;
}
