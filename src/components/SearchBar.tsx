"use client";

import { useState, useEffect, useRef } from "react";
import { Search, FileText, HelpCircle, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Import article data
const articles = [
  {
    id: 1,
    title: "Billigste måte å ta førerkort på – myter vs. fakta (2025-guide)",
    excerpt: "En ærlig guide som rydder opp i myter om billig førerkort. Lær hva som faktisk sparer deg penger og hva som bare høres lure ut.",
    category: "Guider",
    href: "/artikler/1",
  },
  {
    id: 2,
    title: "Alt du trenger å vite om førerkort klasse B",
    excerpt: "En komplett guide til å ta førerkort klasse B, inkludert teori, praksis og hva du kan forvente.",
    category: "Førerkortklasser",
    href: "/artikler/2",
  },
  {
    id: 3,
    title: "Intensivkurs vs. vanlig førerkortkurs",
    excerpt: "Skal du velge intensivkurs eller et mer tradisjonelt opplegg? Vi sammenligner fordelene ved begge.",
    category: "Kursformer",
    href: "/artikler/3",
  },
  {
    id: 4,
    title: "Hva koster førerkort i Norge? (oppdatert guide 2025)",
    excerpt: "Oppdatert oversikt over kostnader ved førerkort klasse B i 2025, obligatoriske utgifter, skjulte kostnader og hvordan du kan spare penger.",
    category: "Økonomi",
    href: "/artikler/4",
  },
  {
    id: 5,
    title: "Forbered deg til førerprøven",
    excerpt: "Praktiske tips og råd for å forberede deg best mulig til førerprøven, både teori og praksis.",
    category: "Tips",
    href: "/artikler/5",
  },
  {
    id: 6,
    title: "Hva skjer etter at du har bestått prøven?",
    excerpt: "Alt du trenger å vite om hva som skjer etter at du har bestått førerprøven og fått førerkortet ditt.",
    category: "Etter opplæring",
    href: "/artikler/6",
  },
  {
    id: 7,
    title: "Er intensivkurs verdt det?",
    excerpt: "En ærlig guide til når intensivkurs gir mening, når det kan bli unødvendig dyrt, og hva du bør vite før du melder deg på.",
    category: "Kursformer",
    href: "/artikler/7",
  },
];

// Import FAQ data
const faq = [
  {
    category: "Om tjenesten",
    items: [
      {
        q: "Hva er Førerkortportalen?",
        a: "Førerkortportalen er en gratis og uforpliktende tjeneste som kobler deg med godkjente trafikkskoler i ditt område. Du fyller ut et skjema én gang — så får du tilbud fra flere trafikkskoler, slik at du kan sammenligne pris, tilgjengelighet og opplæringstilbud uten å kontakte skolene én og én.",
      },
      {
        q: "Koster det noe å bruke portalen?",
        a: "Nei — tjenesten er helt gratis, og det er uforpliktende. Du vurderer selv om du vil takke ja til et tilbud og starte med en trafikkskole.",
      },
    ],
  },
  {
    category: "Når og hvordan du får tilbud",
    items: [
      {
        q: "Hva skjer etter at jeg sender inn skjemaet?",
        a: "Når du har sendt inn skjemaet med postnummer og ønsket førerkortklasse, sender vi forespørselen din til relevante trafikkskoler i området ditt. Skolene kontakter deg (ofte innen 24 timer) for å diskutere opplegg, pris og tilgjengelighet — deretter velger du det tilbudet som passer best for deg.",
      },
    ],
  },
  {
    category: "Hvilke førerkortklasser og typer opplæring",
    items: [
      {
        q: "Hvilke førerkortklasser kan jeg få tilbud på via portalen?",
        a: "Du kan få tilbud på de fleste førerkortklasser — for eksempel bil (klasse B), tilhenger (BE/B96), MC (A, A2, A1) og andre klasser der trafikkskole tilbyr opplæring.",
      },
      {
        q: "Kan jeg få tilbud på intensivkurs eller fleksible kurs?",
        a: "Ja — mange av skolene vi samarbeider med tilbyr intensivkurs, kveldskurs eller fleksible teoripakker. Du kan oppgi ønske om dette i skjemaet, så videresender vi forespørselen til skoler som tilbyr slike løsninger.",
      },
    ],
  },
  {
    category: "Praktiske og \"hva om\"-spørsmål",
    items: [
      {
        q: "Må jeg velge det første tilbudet jeg får?",
        a: "Nei — du er helt fri til å vente på, og sammenligne, flere tilbud. Du kan vurdere pris, opplæringstype, skole og oppstart før du bestemmer deg.",
      },
    ],
  },
  {
    category: "Hvorfor bruke Førerkortportalen?",
    items: [
      {
        q: "Hva er fordelen med å bruke Førerkortportalen?",
        a: "Du sparer tid — i stedet for å kontakte flere skoler separat, fyller du ut ett skjema og mottar flere tilbud. Du får oversikt og mulighet til å sammenligne pris, kursinnhold og tilgjengelighet, så du kan velge det som passer best for deg.",
      },
      {
        q: "Kan jeg spare penger ved å bruke portalen?",
        a: "Ja — ved å sammenligne tilbud fra flere trafikkskoler kan du finne en skole med konkurransedyktige priser eller spesialtilbud, og velge det som gir best verdi for deg.",
      },
    ],
  },
];

interface SearchResult {
  type: "article" | "faq";
  title: string;
  excerpt: string;
  href: string;
  category?: string;
}

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Search function
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search articles
    articles.forEach((article) => {
      const titleMatch = article.title.toLowerCase().includes(lowerQuery);
      const excerptMatch = article.excerpt.toLowerCase().includes(lowerQuery);
      const categoryMatch = article.category.toLowerCase().includes(lowerQuery);

      if (titleMatch || excerptMatch || categoryMatch) {
        searchResults.push({
          type: "article",
          title: article.title,
          excerpt: article.excerpt,
          href: article.href,
          category: article.category,
        });
      }
    });

    // Search FAQ
    faq.forEach((category) => {
      category.items.forEach((item) => {
        const questionMatch = item.q.toLowerCase().includes(lowerQuery);
        const answerMatch = item.a.toLowerCase().includes(lowerQuery);

        if (questionMatch || answerMatch) {
          searchResults.push({
            type: "faq",
            title: item.q,
            excerpt: item.a.substring(0, 120) + (item.a.length > 120 ? "..." : ""),
            href: "/#faq",
          });
        }
      });
    });

    // Sort results: exact title matches first, then by relevance
    searchResults.sort((a, b) => {
      const aTitleLower = a.title.toLowerCase();
      const bTitleLower = b.title.toLowerCase();
      const queryLower = lowerQuery;

      // Exact title match gets highest priority
      if (aTitleLower === queryLower) return -1;
      if (bTitleLower === queryLower) return 1;

      // Title starts with query
      if (aTitleLower.startsWith(queryLower) && !bTitleLower.startsWith(queryLower)) return -1;
      if (bTitleLower.startsWith(queryLower) && !aTitleLower.startsWith(queryLower)) return 1;

      // Title contains query
      if (aTitleLower.includes(queryLower) && !bTitleLower.includes(queryLower)) return -1;
      if (bTitleLower.includes(queryLower) && !aTitleLower.includes(queryLower)) return 1;

      return 0;
    });

    setResults(searchResults.slice(0, 8)); // Limit to 8 results
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
    setIsOpen(true);
  };

  // Handle result click
  const handleResultClick = (href: string) => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
    
    if (href.startsWith("/#")) {
      // Handle hash navigation (FAQ section)
      const hash = href.substring(1);
      if (window.location.pathname === "/") {
        // Already on home page, just scroll
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to home page first, then scroll
        router.push(href);
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    } else {
      router.push(href);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to focus search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      // Escape to close
      if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={searchRef} className="relative">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Søk etter innhold..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => {
            setIsFocused(true);
            if (query) setIsOpen(true);
          }}
          onBlur={() => {
            // Delay to allow result clicks
            setTimeout(() => setIsFocused(false), 200);
          }}
          className="w-full pl-10 pr-10 py-2 text-sm border border-slate-200 rounded-lg bg-white/50 text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:bg-white focus:ring-1 focus:ring-slate-200 transition outline-none"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        {/* Keyboard shortcut hint */}
        {!query && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 pointer-events-none">
            <kbd className="px-1.5 py-0.5 text-xs font-medium text-slate-400 bg-transparent border-0">
              ⌘K
            </kbd>
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query.trim() || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 max-h-[400px] overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result.href)}
                  className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      {result.type === "article" ? (
                        <FileText className="h-5 w-5 text-slate-400 group-hover:text-[#3bb54a] transition" />
                      ) : (
                        <HelpCircle className="h-5 w-5 text-slate-400 group-hover:text-[#3bb54a] transition" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#3bb54a] transition">
                          {result.title}
                        </h3>
                        {result.category && (
                          <span className="px-2 py-0.5 text-xs font-medium text-slate-500 bg-slate-100 rounded-full">
                            {result.category}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2">{result.excerpt}</p>
                      <span className="text-xs text-slate-400 mt-1 inline-block">
                        {result.type === "article" ? "Artikkel" : "FAQ"}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="p-8 text-center">
              <Search className="h-8 w-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm text-slate-600">Ingen resultater funnet</p>
              <p className="text-xs text-slate-500 mt-1">Prøv et annet søkeord</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

