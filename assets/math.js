const mathContent = document.getElementById("main");

if (mathContent && typeof renderMathInElement === "function") {
    renderMathInElement(mathContent, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\begin{equation}", right: "\\end{equation}", display: true },
            { left: "\\begin{equation*}", right: "\\end{equation*}", display: true },
            { left: "\\begin{align}", right: "\\end{align}", display: true },
            { left: "\\begin{align*}", right: "\\end{align*}", display: true },
            { left: "\\begin{gather}", right: "\\end{gather}", display: true },
            { left: "\\begin{gather*}", right: "\\end{gather*}", display: true }
        ],
        throwOnError: false,
        trust: false,
        output: "htmlAndMathml"
    });
}
