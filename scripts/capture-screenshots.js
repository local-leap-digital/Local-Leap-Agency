import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';
import { projects } from '../src/data/projects.js';

// Captures a homepage screenshot of every project's live site into public/projects/<id>.png
// Usage: node scripts/capture-screenshots.js [projectId ...]

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome'
].filter(Boolean);

const chrome = chromeCandidates.find((p) => fs.existsSync(p));
if (!chrome) {
  console.error('Chrome not found. Set CHROME_PATH to your Chrome/Edge executable.');
  process.exit(1);
}

const projectsDir = path.resolve('public', 'projects');
fs.mkdirSync(projectsDir, { recursive: true });

const only = process.argv.slice(2);
const targets = only.length ? projects.filter((p) => only.includes(p.id)) : projects;

for (const project of targets) {
  const tmp = path.join(os.tmpdir(), `localleap-${project.id}.png`);
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=1440,900',
    '--virtual-time-budget=15000',
    '--force-prefers-reduced-motion',
    `--screenshot=${tmp}`,
    project.liveUrl
  ], { stdio: 'ignore' });

  const dest = path.join(projectsDir, `${project.id}.png`);
  await sharp(tmp)
    .resize(1280, 800, { fit: 'cover', position: 'top' })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile(dest);
  fs.rmSync(tmp, { force: true });
  console.log(`Captured ${project.liveUrl} -> ${dest}`);
}
