const re_2 = /.{2}/g;
const re_52 = /.{2,52}/g;

function inGroups(str, re) {
  const arr = [];
  str.replace(re, m => {
    arr.push(m);
    return "";
  });
  return arr;
}

function printer(buf) {
  const hex = buf.toString("hex");
  const one_line = buf.length <= 22;
  const lines = one_line ? [hex] : inGroups(hex, re_52);
  const formatted = lines.map(s => inGroups(s, re_2).join(" ")).join("\n  ");
  return one_line ? `Buffer<${formatted}>` : `Buffer<\n  ${formatted}\n>`;
}

module.exports = {
  print: printer,
  test: Buffer.isBuffer
};
