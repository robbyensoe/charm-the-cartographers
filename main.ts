// The Isle of Borrowed Luck — entry for make.fun's
// "Charm the Cartographers: A One Day Treasure Map Sprint".
//
// The repository holds entry.png: a hand-drawn chart of an island that
// does not exist, with eight labeled places, a compass rose, a sea
// serpent, and a dotted trail to the Dead Man's Doubloon. This program
// checks the chart is a complete image inside the gate's limits and
// copies it to the output directory as entry.png.

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(src);

// The gate tells PNG from JPEG by the first bytes, not the file name.
const isPng = bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e;
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8;
if (!isPng && !isJpeg) {
  throw new Error('entry.png holds neither a PNG nor a JPEG image');
}
if (bytes.length > 1_048_576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
// A whole PNG ends with its IEND chunk; a truncated chart must not sail.
if (isPng && !bytes.subarray(bytes.length - 12).includes('IEND')) {
  throw new Error('entry.png is truncated: no IEND chunk at its end');
}

// The frame is capped at 1024 by 1024; read its size from the header.
function frameSize(): [number, number] {
  if (isPng) {
    // IHDR: width and height are the two big-endian words at offset 16.
    return [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
  }
  let i = 2; // JPEG: walk segments until a Start Of Frame marker.
  while (i + 9 < bytes.length) {
    if (bytes[i] !== 0xff) break;
    const marker = bytes[i + 1];
    if (marker >= 0xc0 && marker <= 0xc3) {
      return [bytes.readUInt16BE(i + 7), bytes.readUInt16BE(i + 5)];
    }
    i += 2 + bytes.readUInt16BE(i + 2);
  }
  throw new Error('could not read the JPEG frame size');
}
const [w, h] = frameSize();
if (w > 1024 || h > 1024) {
  throw new Error(`entry.png is ${w}x${h}, over the 1024x1024 limit`);
}

const out = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(src, out);
console.log(`wrote ${out} (${bytes.length} bytes, ${w}x${h})`);
