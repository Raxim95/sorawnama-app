// jm - juwabi menen
export default function shablon(i:number, s:string[], lang = "QQ") {
	let var_text = "variant";
	if (lang === "RUS") var_text = "вариант";
  
	return `
  \\textbf{${i + 1}-${var_text}}\\\\
  
  \\bgroup
  \\def\\arraystretch{1.6} % 1 is the default, change whatever you need
  
  \\begin{tabular}{|m{5.7cm}|m{9.5cm}|}
  \\hline
  Shifr & \\\\
  \\hline
  \\end{tabular}
  
  \\vspace{1cm}
  
  \\begin{tabular}{|m{0.7cm}|m{10cm}|m{4cm}|}
  \\hline
  № & Soraw & Juwap \\\\
  \\hline
  1. & ${s[0]} &  \\\\
  \\hline
  2. & ${s[1]} &  \\\\
  \\hline
  3. & ${s[2]} &  \\\\
  \\hline
  4. & ${s[3]} &  \\\\
  \\hline
  5. & ${s[4]} &  \\\\
  \\hline
  6. & ${s[5]} &  \\\\
  \\hline
  7. & ${s[6]} &  \\\\
  \\hline
  8. & ${s[7]} &  \\\\
  \\hline
  9. & ${s[8]} &  \\\\
  \\hline
  10. & ${s[9]} &  \\\\
  \\hline
  \\end{tabular}
  
  \\vspace{1cm}
  
  \\begin{tabular}{lll}
  Tuwrı juwaplar sanı: \\underline{\\hspace{1.5cm}} & 
  Bahası: \\underline{\\hspace{1.5cm}} & 
  Imtixan alıwshınıń qolı: \\underline{\\hspace{2cm}} \\\\
  \\end{tabular}
  
  \\egroup
  
  \\newpage
  
  `;
  }