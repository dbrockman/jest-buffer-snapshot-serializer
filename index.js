const space = 0x20;
const newline = 0x0a;
const gt = 0x3e;
const prefix = Buffer.from('Buffer<', 'ascii');
const empty = 'Buffer<>';

function print(buf) {
  const len = buf.length;
  if (len === 0) return empty;
  const hex = buf.toString("hex");
  const one_line = len <= 22;
  const newlines = (len - 1) / 26 | 0;
  const hexBuf = Buffer.from(hex, "ascii");
  const outLen = prefix.length + len * 3 + newlines * 2 + (one_line ? 0 : 4);
  const outBuf = Buffer.alloc(outLen, space);
  let offset = prefix.copy(outBuf);
  if (!one_line) {
    outBuf[offset] = newline;
    offset += 3;
  }
  for (let i = 0; i < len; i++) {
    if (i !== 0 && i % 26 === 0) {
      outBuf[offset - 1] = newline;
      offset += 2;
    }
    hexBuf.copy(outBuf, offset, i * 2, i * 2 + 2);
    offset += 3;
  }
  one_line ? offset-- : outBuf[offset - 1] = newline;
  outBuf[offset] = gt;
  return outBuf.toString();
}

module.exports = {
  print,
  test: Buffer.isBuffer
};
