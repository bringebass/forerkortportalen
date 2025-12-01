"use client";

export default function CTASection() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("skjema");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-slate-900 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl rounded-3xl bg-white px-4 py-10 text-center shadow-lg sm:px-6 sm:py-12 lg:px-10">
        <h2 className="text-[30px] font-semibold text-slate-900 sm:text-[32px] lg:text-[36px]">
          Klar for å motta tilbud?
        </h2>
        <p className="mt-4 text-base text-slate-600 sm:text-base lg:text-lg px-2">
          Åpne skjemaet øverst og send inn på under ett minutt – helt gratis og
          uforpliktende.
        </p>
        <a
          href="#skjema"
          onClick={scrollToForm}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#3bb54a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2d8f3d] shadow-sm sm:px-8 sm:py-3.5 sm:text-base"
        >
          Start skjema
        </a>
      </div>
    </section>
  );
}

