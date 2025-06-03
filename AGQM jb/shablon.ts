export default function shablon(i: number, S: string[]) {
	let var_text = "variant";

	return `
\\begin{tabular}{m{17cm}}
\\textbf{${i + 1}-${var_text}}
\\newline

T1. ${S[0]} \\\\
T2. ${S[1]} \\\\
A1. ${S[2]} \\\\
A2. ${S[3]} \\\\
A3. ${S[4]} \\\\
B1. ${S[5]} \\\\
B2. ${S[6]} \\\\
B3. ${S[7]} \\\\
C1. ${S[8]} \\\\
C2. ${S[9]} \\\\
C3. ${S[10]} \\\\

\\end{tabular}
\\vspace{1cm}

`;
}
