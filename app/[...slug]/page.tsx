import type { Metadata } from "next";
import SitePage from "../site-page";
import { articles, pages, site } from "../site-data";

export async function generateStaticParams() { return [...Object.keys(pages), "chemistry-guides", ...Object.keys(articles).map(x=>`chemistry-guides/${x}`)].map(s=>({slug:s.split("/")})); }
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}):Promise<Metadata>{ const p=await params; const key=p.slug.at(-1)||""; const d=pages[key]||articles[key]; const title=d?.title||"Page not found"; const description=d?.description||"Chemistry Made Simple"; const path=p.slug.join("/"); return {title,description,alternates:{canonical:`${site.domain}/${path}/`},openGraph:{title,description,type:articles[key]?"article":"website",url:`${site.domain}/${path}/`,siteName:site.name},twitter:{card:"summary_large_image",title,description}}; }
export default async function Page({params}:{params:Promise<{slug:string[]}>}) { const p=await params; return <SitePage slug={p.slug.at(-1)||""}/>; }
