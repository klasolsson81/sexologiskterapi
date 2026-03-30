import { chromium } from 'playwright';

const URL = 'https://sexologiskterapi.netlify.app';
const VIEWPORTS = [
  { name: 'desktop-1920', width: 1920, height: 1080 },
  { name: 'laptop-1280', width: 1280, height: 800 },
  { name: 'mobile-390', width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const vp of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // Scroll slowly through the entire page to trigger all animations
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 300) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(200);
  }
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  await page.screenshot({ path: `screenshots/${vp.name}-full.png`, fullPage: true });
  console.log(`Done: ${vp.name}`);
  await page.close();
}

await browser.close();
