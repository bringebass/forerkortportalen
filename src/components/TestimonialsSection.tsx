import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Markus",
    image: "/boy1.png",
    text: "Fant perfekt trafikkskole på noen minutter! Fikk flere tilbud å velge mellom og sparte mye tid.",
  },
  {
    name: "Emma",
    image: "/girl1.png",
    text: "Super enkelt å bruke. Trafikkskolene kontaktet meg raskt og jeg fikk gode tilbud. Anbefaler på det sterkeste!",
  },
  {
    name: "Anders",
    image: "/man.png",
    text: "Endelig en tjeneste som gjør det enkelt å sammenligne trafikkskoler. Sparer både tid og penger.",
  },
];

const StarRating = () => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 py-8 sm:py-12 lg:py-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center mx-auto mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            <span className="text-blue-600">Hva sier</span>{" "}brukerne våre?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Over 1000 fornøyde brukere har funnet sin perfekte trafikkskole gjennom oss
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-200/50 hover:shadow-xl hover:border-emerald-300/50 hover:bg-white/80 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-5">
                {/* Profile Image */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-emerald-100/50 group-hover:ring-emerald-200/70 transition-all duration-300 shadow-lg">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80px, 96px"
                  />
                </div>

                {/* Star Rating */}
                <StarRating />

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Name */}
                <p className="text-base sm:text-lg font-bold text-slate-900">
                  — {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

