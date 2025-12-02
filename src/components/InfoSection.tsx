import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h2 className="text-[28px] sm:text-[30px] lg:text-[36px] font-semibold text-slate-900">
              Sammenlign trafikkskoler og spar penger
            </h2>
            <div className="space-y-4 text-base sm:text-base lg:text-lg text-slate-700 leading-relaxed">
              <p>
                Førerkortportalen er din vei til å finne den beste trafikkskolen til riktig pris. 
                I stedet for å kontakte flere skoler individuelt, kan du fylle ut én enkel forespørsel 
                og få tilbud fra flere kvalitetssikrede trafikkskoler i ditt område.
              </p>
              <p>
                Vi samarbeider med et bredt utvalg av trafikkskoler over hele Norge, fra lokale 
                fagskoler til nasjonale aktører. Alle skolene våre er godkjent av Statens vegvesen 
                og følger læreplanen for føreropplæring.
              </p>
              <p>
                Uansett om du skal ta førerkort klasse B, MC, eller en annen klasse – vi hjelper deg 
                med å finne den opplæringen som passer deg best. Tjenesten er helt gratis og uforpliktende, 
                så du kan sammenligne tilbudene i din egen tid.
              </p>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#3bb54a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">100% gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#3bb54a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Helt uforpliktende</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#3bb54a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Kvalitetssikret</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/car-in-circle.png"
              alt="Bil i sirkel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

