const drivingSchools = [
  { name: "Oslo Trafikkskole", location: "Oslo", specialties: ["Klasse B", "Intensivkurs"] },
  { name: "Bergen Kjøreskole", location: "Bergen", specialties: ["Klasse B", "Klasse BE"] },
  { name: "Trondheim Trafikkskole", location: "Trondheim", specialties: ["Klasse B", "MC-klasser"] },
  { name: "Stavanger Kjøreskole", location: "Stavanger", specialties: ["Klasse B", "B96"] },
  { name: "Tromsø Trafikkskole", location: "Tromsø", specialties: ["Klasse B", "Klasse C"] },
  { name: "Kristiansand Kjøreskole", location: "Kristiansand", specialties: ["Klasse B", "Intensivkurs"] },
  { name: "Drammen Trafikkskole", location: "Drammen", specialties: ["Klasse B", "Klasse BE"] },
  { name: "Fredrikstad Kjøreskole", location: "Fredrikstad", specialties: ["Klasse B", "MC-klasser"] },
  { name: "Sandnes Trafikkskole", location: "Sandnes", specialties: ["Klasse B", "B96"] },
  { name: "Ålesund Kjøreskole", location: "Ålesund", specialties: ["Klasse B", "Intensivkurs"] },
  { name: "Bodø Trafikkskole", location: "Bodø", specialties: ["Klasse B", "Klasse C"] },
  { name: "Skien Kjøreskole", location: "Skien", specialties: ["Klasse B", "Klasse BE"] },
  { name: "Tønsberg Trafikkskole", location: "Tønsberg", specialties: ["Klasse B", "MC-klasser"] },
  { name: "Haugesund Kjøreskole", location: "Haugesund", specialties: ["Klasse B", "Intensivkurs"] },
  { name: "Moss Trafikkskole", location: "Moss", specialties: ["Klasse B", "B96"] },
  { name: "Arendal Kjøreskole", location: "Arendal", specialties: ["Klasse B", "Klasse BE"] },
  { name: "Hamar Trafikkskole", location: "Hamar", specialties: ["Klasse B", "MC-klasser"] },
  { name: "Larvik Kjøreskole", location: "Larvik", specialties: ["Klasse B", "Intensivkurs"] },
  { name: "Halden Trafikkskole", location: "Halden", specialties: ["Klasse B", "Klasse C"] },
  { name: "Gjøvik Kjøreskole", location: "Gjøvik", specialties: ["Klasse B", "B96"] },
];

export function DrivingSchoolList() {
  return (
    <section id="trafikkskoler" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
          <div>
            <h2 className="text-[28px] font-semibold text-slate-900 sm:text-[32px] lg:text-[36px]">
              Eksempler på skoler som dekker ulike behov
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base lg:text-lg">
              Listen viser bredden i tilbudet og brukes til SEO/dokumentasjon. Vi
              henter inn tilbud fra både lokale og nasjonale aktører.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drivingSchools.map((school) => (
            <div
              key={school.name}
              className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
                {school.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-2">{school.location}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {school.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="inline-flex items-center rounded-full bg-slate-100 px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium text-slate-700"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DrivingSchoolList;
