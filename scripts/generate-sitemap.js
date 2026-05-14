import { writeFileSync, readFileSync } from "fs";

const today = new Date().toISOString().split("T")[0];

const fileContent = readFileSync("src/components/BlogDetailAll.jsx", "utf-8");
const urlMatches = [...fileContent.matchAll(/url:\s*"([^"]+)"/g)];
const blogSlugs = urlMatches.map((match) => match[1]);

const staticPages = [
  { loc: "https://redinntravels.com/", priority: "1.0" },
  { loc: "https://redinntravels.com/about", priority: "0.8" },
  { loc: "https://redinntravels.com/packages", priority: "0.5" },
  { loc: "https://redinntravels.com/blogs", priority: "0.5" },
  { loc: "https://redinntravels.com/contact", priority: "0.5" },
];

const blogPages = blogSlugs.map((slug) => ({
  loc: `https://redinntravels.com/blogs/${slug}`,
  priority: "0.5",
}));

const allPages = [...staticPages, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml generated with ${allPages.length} URLs`);

// if any error happens like refreshing in the /blogs page and it shows 404 not found
// 1. comment this whole page
// 2. in the packages.json file remove "generate-sitemap": "node scripts/generate-sitemap.js",
// 3. then replace "build": "node scripts/generate-sitemap.js && vite build", with "build": "vite build",
// 4. that's it
