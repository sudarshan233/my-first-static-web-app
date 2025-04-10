// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".red-feedback\r\n{\r\n    color: red;\r\n}\r\n.green-feedback\r\n{\r\n    color: green;\r\n}\r\n.prepared\r\n{\r\n    text-decoration: line-through;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}