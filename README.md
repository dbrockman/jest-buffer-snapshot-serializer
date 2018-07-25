# jest-buffer-snapshot-serializer

A jest snapshot serializer for buffers.

```js
test("snapshot of a Buffer with 20 bytes", () => {
  const buf = Buffer.from("6b2b91396d530a360211cf1b09ab02eaf661d58b", "hex");

  expect(buf).toMatchInlineSnapshot(
    `Buffer<6b 2b 91 39 6d 53 0a 36 02 11 cf 1b 09 ab 02 ea f6 61 d5 8b>`
  );
});

test("snapshot of a Buffer with 256 bytes", () => {
  const buf = Buffer.from(
    "f7ce0b653d2d72a4108cf5abe912ffdd777616dbbb27a70e8204f3ae2d0f6fad89f68f4811d1e87bcc3bd7400a9ffd29094f0184639574f39ae5a1315217bcd7894991447213bb226c25b54da86370fbcd984380374666bb8ffcb5bf40c254b067d27c51ce4ad5fed829c90b505a571b7f4d1cad6a523cda770e67bceaaf7e89caec28444f4649d810d9bfffa91a530a3dd6d2ab152f16156bbfca0773e47c0ea99e54150de274252a20ed4df3dd7ab0ad489573aba17ca078d6745bc1365dec727dac00aea5f69d7fc3d75e25552e5b787b6ebd39ea6a6fe6caef00b898c3e8917a3cc1213d30033c3c948ed38403e89967bfcea53547d79a3f3575b3fdbdd0",
    "hex"
  );

  expect(buf).toMatchInlineSnapshot(`
Buffer<
  f7 ce 0b 65 3d 2d 72 a4 10 8c f5 ab e9 12 ff dd 77 76 16 db bb 27 a7 0e 82 04
  f3 ae 2d 0f 6f ad 89 f6 8f 48 11 d1 e8 7b cc 3b d7 40 0a 9f fd 29 09 4f 01 84
  63 95 74 f3 9a e5 a1 31 52 17 bc d7 89 49 91 44 72 13 bb 22 6c 25 b5 4d a8 63
  70 fb cd 98 43 80 37 46 66 bb 8f fc b5 bf 40 c2 54 b0 67 d2 7c 51 ce 4a d5 fe
  d8 29 c9 0b 50 5a 57 1b 7f 4d 1c ad 6a 52 3c da 77 0e 67 bc ea af 7e 89 ca ec
  28 44 4f 46 49 d8 10 d9 bf ff a9 1a 53 0a 3d d6 d2 ab 15 2f 16 15 6b bf ca 07
  73 e4 7c 0e a9 9e 54 15 0d e2 74 25 2a 20 ed 4d f3 dd 7a b0 ad 48 95 73 ab a1
  7c a0 78 d6 74 5b c1 36 5d ec 72 7d ac 00 ae a5 f6 9d 7f c3 d7 5e 25 55 2e 5b
  78 7b 6e bd 39 ea 6a 6f e6 ca ef 00 b8 98 c3 e8 91 7a 3c c1 21 3d 30 03 3c 3c
  94 8e d3 84 03 e8 99 67 bf ce a5 35 47 d7 9a 3f 35 75 b3 fd bd d0
>
`);
});
```
