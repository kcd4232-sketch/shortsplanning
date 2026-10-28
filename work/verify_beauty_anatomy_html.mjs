import fs from 'node:fs';
import crypto from 'node:crypto';

const file = process.argv[2] || 'outputs/beauty_reels_5_scenarios_anatomy_2026-10-26.html';
const html = fs.readFileSync(file, 'utf8');
const images = [...html.matchAll(/<img[^>]+src="data:image\/jpeg;base64,([^"]+)/g)].map((match) => Buffer.from(match[1], 'base64'));
const result = {
  file,
  imageTags: images.length,
  uniqueImages: new Set(images.map((data) => crypto.createHash('sha256').update(data).digest('hex'))).size,
  allJpeg: images.every((data) => data[0] === 0xff && data[1] === 0xd8),
  plans: (html.match(/<details class="plan"/g) || []).length,
  anatomyNotes: (html.match(/가운데 이미지에서 볼 위치/g) || []).length,
  oldSheetReferences: /beauty_reels_recent_[23]row_sheet/.test(html),
};
console.log(JSON.stringify(result));
if (result.imageTags !== 30 || result.uniqueImages !== 15 || !result.allJpeg || result.plans !== 5 || result.anatomyNotes !== 5 || result.oldSheetReferences) process.exitCode = 1;
