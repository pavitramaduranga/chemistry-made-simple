import type { MetadataRoute } from "next";
import { articles, pages, site } from "./site-data";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap { const routes=["",...Object.keys(pages),"chemistry-guides",...Object.keys(articles).map(x=>`chemistry-guides/${x}`)]; return routes.map((r,i)=>({url:`${site.domain}/${r}${r?"/":""}`,changeFrequency:i===0?"weekly":"monthly",priority:i===0?1:r.includes("chemistry-guides/")?.7:.8})); }
