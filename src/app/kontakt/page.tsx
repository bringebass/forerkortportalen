"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.message || "Noe gikk galt. Prøv igjen.");
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error");
      setErrorMessage("Vi klarte ikke å sende meldingen. Prøv igjen senere.");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">
              Kontakt oss
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              Har du spørsmål? Send oss en melding, så svarer vi så raskt som mulig.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Send oss en melding
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Fyll ut skjemaet, så kommer vi tilbake til deg så snart som mulig.
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">E-post</p>
                  <a
                    href="mailto:kontakt@forerkortportalen.no"
                    className="text-[#3bb54a] hover:underline"
                  >
                    kontakt@forerkortportalen.no
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#3bb54a] focus:ring-2 focus:ring-[#3bb54a]/20 transition"
                    placeholder="Ditt navn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#3bb54a] focus:ring-2 focus:ring-[#3bb54a]/20 transition"
                    placeholder="din@epost.no"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#3bb54a] focus:ring-2 focus:ring-[#3bb54a]/20 transition"
                    placeholder="9X XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-2">
                    Emne *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-white text-slate-900 focus:border-[#3bb54a] focus:ring-2 focus:ring-[#3bb54a]/20 transition"
                  >
                    <option value="">Velg emne</option>
                    <option value="sporsmal">Spørsmål om tjenesten</option>
                    <option value="teknisk">Teknisk support</option>
                    <option value="sletting">Be om sletting av data</option>
                    <option value="annet">Annet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                    Melding *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#3bb54a] focus:ring-2 focus:ring-[#3bb54a]/20 transition resize-none"
                    placeholder="Skriv meldingen din her..."
                  />
                </div>

                {status === "error" && errorMessage && (
                  <div className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-800">
                    {errorMessage}
                  </div>
                )}

                {status === "success" && (
                  <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
                    Takk for meldingen! Vi kommer tilbake til deg så snart som mulig.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-xl bg-[#3bb54a] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#3bb54a]/30 transition hover:bg-[#2d8f3d] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? "Sender..." : "Send melding"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

