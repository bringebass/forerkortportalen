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
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-[28px] sm:text-[30px] lg:text-[36px] font-semibold text-slate-900 mb-3">
            Hva sier brukerne våre?
          </h2>
          <p className="text-base sm:text-base lg:text-lg text-slate-600">
            Over 1000 fornøyde brukere har funnet sin perfekte trafikkskole gjennom oss
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Profile Image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-slate-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                </div>

                {/* Star Rating */}
                <StarRating />

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Name */}
                <p className="text-sm sm:text-base font-semibold text-slate-900">
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

