import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync('outputs/beauty_reels_10_plans_2026-10-23.html', 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]);
for (const script of scripts) new vm.Script(script);
const ids = [...html.matchAll(/id="idea-(\d+)"/g)].map(match => match[1]);
const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
const result = {
  scriptsParsed: scripts.length,
  ideaCount: ids.length,
  uniqueIdeaCount: new Set(ids).size,
  invalidLinks: hrefs.filter(href => !href.startsWith('https://') && !href.startsWith('#')),
  endsCorrectly: html.endsWith('</html>'),
};
console.log(JSON.stringify(result, null, 2));
if (result.ideaCount !== 10 || result.uniqueIdeaCount !== 10 || result.invalidLinks.length || !result.endsCorrectly) process.exitCode = 1;
