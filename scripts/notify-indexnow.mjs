#!/usr/bin/env node
/**
 * Notifies IndexNow (Bing, Yandex, DuckDuckGo, Naver, Seznam) of all site URLs.
 * Run manually after deploy: `node scripts/notify-indexnow.mjs`
 * Or wire into Vercel deploy hook / GitHub Action.
 *
 * Notes:
 * - IndexNow accepts up to 10,000 URLs per request.
 * - Submitting the same URL repeatedly within a short window is rate-limited.
 *   Only run after meaningful content updates.
 */

import { destinations } from "../lib/data/destinations.js";
import { guides } from "../lib/data/guides.js";

const HOST = "visitbatanes.vercel.app";
const SITE_URL = `https://${HOST}`;
const KEY = "f444cada7e18067a73fd144696ebb689";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

const STATIC_PATHS = [
  "/",
  "/destinations",
  "/tours",
  "/travel-guide",
  "/about",
  "/faq",
  "/contact",
];

const urlList = [
  ...STATIC_PATHS.map((p) => `${SITE_URL}${p}`),
  ...destinations.map((d) => `${SITE_URL}/destinations/${d.slug}`),
  ...guides.map((g) => `${SITE_URL}/travel-guide/${g.slug}`),
];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

console.log(`→ Submitting ${urlList.length} URLs to IndexNow…`);

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

if (res.status === 200 || res.status === 202) {
  console.log(`✅ Accepted (HTTP ${res.status}) — ${urlList.length} URLs queued.`);
  console.log(
    "   Bing, Yandex, DuckDuckGo, Naver, Seznam will crawl within minutes."
  );
} else {
  const text = await res.text().catch(() => "");
  console.error(`❌ Failed (HTTP ${res.status})`);
  if (text) console.error(text);
  process.exit(1);
}
