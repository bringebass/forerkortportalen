"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ScrollToFormButton } from "@/components/ScrollToFormButton";
import { Calendar, Clock, ArrowLeft, Share2, List, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { FormProvider, useFormContext } from "@/contexts/FormContext";
import { useMemo, useState, useEffect, use } from "react";
import ArticleStickyCTA from "@/components/ArticleStickyCTA";
import ArticleFormOverlay from "@/components/ArticleFormOverlay";
import CompactFormCTA from "@/components/CompactFormCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { articles as articlesMetadata } from "../page";
import { articles } from "./articles";

// Helper function to create image HTML from inArticleImages
function createImageHTML(imagePath: string, alt: string, caption: string): string {
  return `
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="${imagePath}" alt="${alt}" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          ${caption}
        </figcaption>
      </figure>
  `;
}


// Function to extract headings from HTML content (H2 and H3)
function extractHeadings(htmlContent: string): Array<{ id: string; text: string; level: number }> {
  const headingRegex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
  const headings: Array<{ id: string; text: string; level: number }> = [];
  let match;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2]
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    headings.push({ id, text, level });
  }

  return headings;
}

function ArticleFormWrapper() {
  const { isDesktopFocused, setIsDesktopFocused } = useFormContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      className={`bg-gradient-to-br from-slate-900 to-slate-600 backdrop-blur-md rounded-3xl shadow-2xl shadow-slate-900/50 p-6 sm:p-8 transition-all duration-300 cursor-pointer ${isDesktopFocused && !isMobile ? 'opacity-0 pointer-events-none' : ''}`}
      onClick={(e) => {
        if (!isMobile && !isDesktopFocused) {
          const target = e.target as HTMLElement;
          // Check if the click is on an interactive form element
          const interactiveElement = target.closest('input, button, select, textarea, a, label, [role="button"], [type="submit"]');
          
          // Only trigger focus mode if NOT clicking on interactive elements
          // Interactive elements will trigger focus mode through their onFocus handlers
          if (!interactiveElement) {
            setIsDesktopFocused(true);
          }
        }
      }}
    >
      <h2 className="text-2xl font-semibold text-white mb-0.5 text-center lg:text-center">
        Motta tilbud fra flere trafikkskoler
      </h2>
      <p className="text-base text-slate-300 mb-0.5 text-center">
        Tjenesten er gratis og uforpliktende
      </p>
      <LeadForm hideHeading={true} />
    </div>
  );
}

function ArticleContent({ params }: { params: { id: string } }) {
  const article = articles[params.id];
  const { isDesktopFocused } = useFormContext();
  const [isMobile, setIsMobile] = useState(false);
  
  // Merge article data with metadata from page.tsx to get correct images
  const articleWithMetadata = useMemo(() => {
    if (!article) return null;
    const metadata = articlesMetadata.find(a => a.id === article.id);
    if (!metadata) return article;
    
    // Get the merged article with updated image
    let mergedArticle = { ...article, image: metadata.image };
    
    // Replace in-article images if they exist in metadata
    if (metadata.inArticleImages && metadata.inArticleImages.length > 0) {
      let processedContent = article.content;
      let imagesInserted = 0;
      
      metadata.inArticleImages.forEach((imgData, index) => {
        const imageHTML = createImageHTML(imgData.image, imgData.alt, imgData.caption);
        
        // Strategy 1: Use placeholder pattern {{IN_ARTICLE_IMAGE:index}}
        const placeholder = `{{IN_ARTICLE_IMAGE:${index}}}`;
        
        // Strategy 2: Replace by matching existing image path pattern
        const imagePathEscaped = imgData.image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const pathPattern = new RegExp(`<figure[^>]*>.*?<img[^>]*src=["']${imagePathEscaped}["'][^>]*>.*?<\\/figure>`, 'is');
        
        // Strategy 3: Replace by alt text
        const altEscaped = imgData.alt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const altPattern = new RegExp(`<img[^>]*alt=["']${altEscaped}["'][^>]*>`, 'i');
        const figureWithAltPattern = new RegExp(`<figure[^>]*>.*?<img[^>]*alt=["']${altEscaped}["'][^>]*>.*?<\\/figure>`, 'is');
        
        let wasReplaced = false;
        
        if (processedContent.includes(placeholder)) {
          // Replace placeholder
          processedContent = processedContent.replace(placeholder, imageHTML.trim());
          wasReplaced = true;
        } else if (pathPattern.test(processedContent)) {
          // Replace existing figure with matching image path
          processedContent = processedContent.replace(pathPattern, imageHTML.trim());
          wasReplaced = true;
        } else if (figureWithAltPattern.test(processedContent)) {
          // Replace existing figure with matching alt text
          processedContent = processedContent.replace(figureWithAltPattern, imageHTML.trim());
          wasReplaced = true;
        } else if (altPattern.test(processedContent)) {
          // Replace existing img tag with matching alt text
          processedContent = processedContent.replace(altPattern, imageHTML.trim());
          wasReplaced = true;
        } else {
          // Strategy 4: Insert image after first h2 heading if no match found
          // This ensures images are always displayed even if article content doesn't have matching patterns
          const h2Pattern = /(<h2[^>]*>.*?<\/h2>)/i;
          const h2Match = processedContent.match(h2Pattern);
          
          if (h2Match && imagesInserted === 0) {
            // Insert after first h2
            const insertPosition = processedContent.indexOf(h2Match[0]) + h2Match[0].length;
            processedContent = 
              processedContent.slice(0, insertPosition) + 
              imageHTML.trim() + 
              processedContent.slice(insertPosition);
            wasReplaced = true;
            imagesInserted++;
          } else if (imagesInserted === 0) {
            // Fallback: Insert after first paragraph if no h2 found
            const pPattern = /(<p[^>]*>.*?<\/p>)/i;
            const pMatch = processedContent.match(pPattern);
            if (pMatch) {
              const insertPosition = processedContent.indexOf(pMatch[0]) + pMatch[0].length;
              processedContent = 
                processedContent.slice(0, insertPosition) + 
                imageHTML.trim() + 
                processedContent.slice(insertPosition);
              wasReplaced = true;
              imagesInserted++;
            }
          }
        }
      });
      mergedArticle = { ...mergedArticle, content: processedContent };
    }
    
    return mergedArticle;
  }, [article]);

  // Use merged article instead of original
  const finalArticle = articleWithMetadata || article;

  // Extract headings for table of contents
  const headings = useMemo(() => {
    if (!finalArticle) return [];
    return extractHeadings(finalArticle.content);
  }, [finalArticle]);

  // Check if mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!article) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="py-12 sm:py-16 lg:py-20 text-center">
          <div className="container mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              Artikkel ikke funnet
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Denne artikkelen eksisterer ikke.
            </p>
            <Link
              href="/artikler"
              className="inline-flex items-center justify-center rounded-full bg-[#3bb54a] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#3bb54a]/30 transition hover:bg-[#2d8f3d]"
            >
              Tilbake til artikler
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": finalArticle.title,
    "description": finalArticle.excerpt,
    "image": finalArticle.image ? `https://forerkortportalen.no${finalArticle.image}` : undefined,
    "datePublished": finalArticle.date,
    "author": {
      "@type": "Organization",
      "name": "Førerkortportalen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Førerkortportalen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://forerkortportalen.no/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://forerkortportalen.no/artikler/${finalArticle.id}`
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumbs
        items={[
          { name: "Artikler", url: "https://forerkortportalen.no/artikler" },
          { name: finalArticle.title, url: `https://forerkortportalen.no/artikler/${finalArticle.id}` },
        ]}
      />
      <Navbar />
      <ArticleFormOverlay />
      <ArticleStickyCTA />
      <CompactFormCTA />
      <StickyMobileCTA />
      
      <article className={`py-8 sm:py-12 lg:py-16 bg-slate-50 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
          <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
              {/* Main Article Content */}
              <div className="lg:col-span-8">
          {/* Back Link */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/artikler"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-[#3bb54a] transition text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tilbake til artikler</span>
            </Link>
          </div>

          {/* Article Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            
            {/* Header */}
            <header className="px-6 sm:px-8 lg:px-10 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 border-b border-slate-200">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold mb-4">
                {finalArticle.category}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-tight">
                {finalArticle.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{finalArticle.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{finalArticle.readTime}</span>
                </div>
              </div>
            </header>

                  {/* Article Image */}
                  {finalArticle.image && (
                    <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden bg-slate-100">
                      <Image
                        src={finalArticle.image}
                        alt={finalArticle.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    </div>
                  )}

                  {/* Table of Contents - SEO-friendly with details/summary */}
                  {headings.length > 0 && (
                    <div className="mx-6 sm:mx-8 lg:mx-10 mt-8 mb-6">
                      <details className="group">
                        <summary className="w-full flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:border-[#3bb54a] transition cursor-pointer list-none">
                          <div className="flex items-center gap-2 text-slate-900 font-semibold">
                            <List className="h-5 w-5 text-[#3bb54a]" />
                            Innholdsfortegnelse
                          </div>
                          <svg
                            className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-180"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 8l4 4 4-4" />
                          </svg>
                        </summary>
                        <nav className="space-y-2 px-4 py-3 overflow-y-auto max-h-[70vh] border border-slate-200 border-t-0 rounded-b-xl bg-white">
                          {headings.map((heading, index) => (
                            <a
                              key={index}
                              href={`#${heading.id}`}
                              className={`block text-sm text-slate-700 hover:text-[#3bb54a] transition py-1.5 border-l-2 border-slate-200 hover:border-[#3bb54a] ${
                                heading.level === 2 ? 'pl-3 font-semibold' : 'pl-6 text-slate-600'
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(heading.id);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  window.history.pushState(null, '', `#${heading.id}`);
                                }
                              }}
                            >
                              {heading.text}
                            </a>
                          ))}
                        </nav>
                      </details>
                    </div>
                  )}

            {/* Content */}
            <div className="px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
              <div
                className="prose prose-slate prose-lg max-w-none 
                  prose-headings:text-slate-900 prose-headings:font-semibold prose-headings:mt-12 prose-headings:mb-6
                  prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:font-bold prose-h1:mt-14 prose-h1:mb-7
                  prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-bold prose-h2:scroll-mt-24
                  prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-9 prose-h3:mb-5 prose-h3:font-semibold prose-h3:text-slate-900 prose-h3:scroll-mt-24
                  prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base sm:prose-p:text-lg
                  prose-a:text-[#3bb54a] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900 prose-strong:font-semibold
                  prose-em:text-slate-600 prose-em:italic
                  prose-ul:text-slate-700 prose-ul:my-5 prose-ul:space-y-2
                  prose-li:mb-2 prose-li:pl-1
                  prose-blockquote:border-l-4 prose-blockquote:border-[#3bb54a] prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:bg-emerald-50 prose-blockquote:rounded-r-lg prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-slate-700
                  prose-lead:text-lg sm:prose-lead:text-xl prose-lead:font-medium prose-lead:text-slate-800 prose-lead:mb-6
                  prose-img:rounded-xl prose-img:shadow-md prose-img:my-8 prose-img:w-full
                  prose-hr:border-slate-200 prose-hr:my-8"
                      dangerouslySetInnerHTML={{ 
                        __html: finalArticle.content
                          .replace(
                            /<h2([^>]*)>(.*?)<\/h2>/gi,
                            (match, attrs, text) => {
                              const id = text
                                .replace(/<[^>]*>/g, '')
                                .trim()
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/^-|-$/g, '');
                              // Preserve existing classes and add scroll-mt-24
                              const hasClass = /class=["']/.test(attrs);
                              const scrollClass = 'scroll-mt-24';
                              if (hasClass) {
                                const newAttrs = attrs.replace(/class=["']([^"']*)["']/, `class="$1 ${scrollClass}"`);
                                return `<h2 id="${id}"${newAttrs}>${text}</h2>`;
                              } else {
                                return `<h2 id="${id}"${attrs} class="${scrollClass}">${text}</h2>`;
                              }
                            }
                          )
                          .replace(
                            /<h3([^>]*)>(.*?)<\/h3>/gi,
                            (match, attrs, text) => {
                              const id = text
                                .replace(/<[^>]*>/g, '')
                                .trim()
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/^-|-$/g, '');
                              // Preserve existing classes and add scroll-mt-24
                              const hasClass = /class=["']/.test(attrs);
                              const scrollClass = 'scroll-mt-24';
                              if (hasClass) {
                                const newAttrs = attrs.replace(/class=["']([^"']*)["']/, `class="$1 ${scrollClass}"`);
                                return `<h3 id="${id}"${newAttrs}>${text}</h3>`;
                              } else {
                                return `<h3 id="${id}"${attrs} class="${scrollClass}">${text}</h3>`;
                              }
                            }
                          )
                      }}
              />
            </div>

                </div>
              </div>

              {/* Form Sidebar */}
              <div className="lg:col-span-4 mt-8 lg:mt-14">
                <div className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-96px)] lg:overflow-y-auto lg:pr-1 space-y-6">
                  <ArticleFormWrapper />

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">3 gode grunner til å velge Førerkortportalen</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Flere tilbud – ett skjema</p>
                          <p className="text-sm text-slate-600">Få tilbud fra kvalitetssikrede trafikkskoler uten å ringe rundt.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Trygt og uforpliktende</p>
                          <p className="text-sm text-slate-600">Ingen kostnad for deg – velg tilbudet som passer best.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Spar tid og penger</p>
                          <p className="text-sm text-slate-600">Sammenlign pris, oppstart og fleksibilitet på ett sted.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  return (
    <FormProvider>
      <main className="min-h-screen bg-white">
        <ArticleContent params={resolvedParams} />
      </main>
    </FormProvider>
  );
}

