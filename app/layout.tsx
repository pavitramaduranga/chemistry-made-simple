import type { Metadata } from "next";
import "./globals.css";
import { site } from "./site-data";

export const metadata: Metadata = { metadataBase:new URL("https://example.com"), title:{default:"Edexcel Chemistry Classes in Nugegoda | IGCSE & IAL",template:"%s | Chemistry Made Simple"},description:"Join specialist Edexcel Chemistry classes in Nugegoda for IGCSE, AS, A2 and IAL students. Structured theory, revision and past-paper practice.",icons:{icon:"/favicon.svg"},other:{"google-site-verification":"[SEARCH_CONSOLE_VERIFICATION]"} };
export default function RootLayout({children}:{children:React.ReactNode}) { const schema={"@context":"https://schema.org","@type":"WebSite",name:site.name,url:site.domain,description:"Independent Edexcel Chemistry tuition in Nugegoda, Sri Lanka"}; return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html> }
