#!/usr/bin/env node
/**
 * Notifies IndexNow (Bing, Yandex, DuckDuckGo, Naver, Seznam) of all site URLs.
 *
 * Fetches the live sitemap.xml at run time so it always reflects the current
 * deployed routes — no need to keep this script in sync with site data.
 *
 * Usage: node scripts/notify-indexnow.mjs
 */

const HOST = "visitbatanes.vercel.app";
const SITE_URL = `https://${HOST}`;
const KEY = "f444cada7e18067a73fd144696ebb689";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

console.log(`→ Fetching ${SITE_URL}/sitemap.xml…`);

const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`❌ Could not fetch sitemap (HTTP ${sitemapRes.status})`);
  process.exit(1);
}
const xml = await sitemapRes.text();
const urlList = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(
  (m) => m[1]
);

if (urlList.length === 0) {
  console.error("❌ No URLs found in sitemap.xml");
  process.exit(1);
}

console.log(`→ Submitting ${urlList.length} URLs to IndexNow…`);

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }),
});

if (res.status === 200 || res.status === 202) {
  console.log(
    `✅ Accepted (HTTP ${res.status}) — ${urlList.length} URLs queued.`
  );
  console.log(
    "   Bing, Yandex, DuckDuckGo, Naver, Seznam will crawl within minutes."
  );
} else {
  const text = await res.text().catch(() => "");
  console.error(`❌ Failed (HTTP ${res.status})`);
  if (text) console.error(text);
  process.exit(1);
}
