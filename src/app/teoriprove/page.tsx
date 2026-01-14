"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Clock, CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";
import { FormProvider, useFormContext } from "@/contexts/FormContext";
import ArticleFormOverlay from "@/components/ArticleFormOverlay";
import FormSidebar from "@/components/FormSidebar";
import CompactFormCTA from "@/components/CompactFormCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Breadcrumbs from "@/components/Breadcrumbs";

// Quiz questions - 45 questions mimicking the actual theory test
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Hva er hovedregelen når du skal kjøre inn på en motorvei?",
    options: [
      "Du har alltid forkjørsrett",
      "Du skal tilpasse farten din til trafikken på motorveien og gi tegn",
      "Du kan kjøre inn i hvilken som helst fil",
      "Du må stoppe helt før innkjøring"
    ],
    correct: 1,
    explanation: "Når du skal inn på motorvei, skal du tilpasse farten og gi tegn. Du har ikke forkjørsrett."
  },
  {
    id: 2,
    question: "Hvor lang avstand skal du holde til forankjørende i normal kjøring på motorvei?",
    options: [
      "Minst 2 sekunder",
      "Minst 3 sekunder",
      "Minst 1 sekund",
      "Så lenge du kan se bilen foran"
    ],
    correct: 1,
    explanation: "Du skal holde minst 3 sekunders avstand til forankjørende på motorvei."
  },
  {
    id: 3,
    question: "Hva er alkoholfri promillegrense for fører av personbil?",
    options: [
      "0,2 promille",
      "0,0 promille",
      "0,5 promille",
      "1,0 promille"
    ],
    correct: 1,
    explanation: "Alkoholfri promillegrense er 0,0 promille for fører av motorvogn."
  },
  {
    id: 4,
    question: "Hva betyr et gul blinkende lys i et lyskryss?",
    options: [
      "Stopp, vent på grønt lys",
      "Kjøre med forsiktighet, gi vikeplikt for alle",
      "Kjøre rett frem uten å stoppe",
      "Kun høyre- eller venstresving er tillatt"
    ],
    correct: 1,
    explanation: "Gult blinkende lys betyr at du skal kjøre med forsiktighet og gi vikeplikt for alle."
  },
  {
    id: 5,
    question: "Når skal du bruke nødblinklysene?",
    options: [
      "Når du kjører i tunnel",
      "Når du stopper eller parkerer på steder hvor kjøretøyet kan utgjøre en fare eller være til hinder",
      "Når du skal svinge",
      "Når du kjører forbi en annen bil"
    ],
    correct: 1,
    explanation: "Nødblinklys skal brukes når du stopper eller parkerer på steder hvor kjøretøyet kan utgjøre en fare."
  },
  {
    id: 6,
    question: "Hva er minimumsalderen for å ta førerkort klasse B?",
    options: [
      "16 år",
      "17 år",
      "18 år",
      "19 år"
    ],
    correct: 2,
    explanation: "Minimumsalderen for å ta førerkort klasse B er 18 år."
  },
  {
    id: 7,
    question: "Hvor fort kan du maksimalt kjøre på en vei uten særskilt fartsgrense i boligstrøk?",
    options: [
      "30 km/t",
      "40 km/t",
      "50 km/t",
      "60 km/t"
    ],
    correct: 0,
    explanation: "I boligstrøk er fartsgrensen 30 km/t hvis ikke annet er skiltet."
  },
  {
    id: 8,
    question: "Hva skal du gjøre når du ser dette skiltet? (Rød sirkel med hvit bakgrunn og rød strek over bil)",
    options: [
      "Kjøre forbi",
      "Stoppe forbi",
      "Kjøring forbudt",
      "Parkeringsforbud"
    ],
    correct: 2,
    explanation: "Skiltet betyr 'Kjøring forbudt' - alle motorvogner er forbudt."
  },
  {
    id: 9,
    question: "Hvor langt fra et fotgjengerfelt skal du stoppe hvis det er fotgjengere som skal over?",
    options: [
      "Minst 5 meter",
      "Minst 10 meter",
      "Du skal stoppe foran fotgjengerfeltet",
      "Du kan kjøre forbi hvis du sakter ned"
    ],
    correct: 2,
    explanation: "Du skal stoppe foran fotgjengerfeltet når det er fotgjengere som skal over."
  },
  {
    id: 10,
    question: "Hva betyr et rødt kryss over kjørefelt på motorvei?",
    options: [
      "Feltet er stengt, du skal ikke kjøre i det",
      "Feltet er reservert for kjøretøy med flere personer",
      "Feltet er kun for busser",
      "Feltet er for biler med elektrisk drift"
    ],
    correct: 0,
    explanation: "Rødt kryss over kjørefelt betyr at feltet er stengt og du skal ikke kjøre i det."
  },
  {
    id: 11,
    question: "Hva er påkrevd utstyr i en bil?",
    options: [
      "Varseltrekant, førstehjelpsskrin, refleksvest",
      "Kun varseltrekant",
      "Kun førstehjelpsskrin",
      "Ingen spesielt utstyr er påkrevd"
    ],
    correct: 0,
    explanation: "Påkrevd utstyr inkluderer varseltrekant, førstehjelpsskrin og refleksvest."
  },
  {
    id: 12,
    question: "Når skal du bruke lyset på bilen?",
    options: [
      "Kun om natten",
      "Når det er dårlig sikt, eller når det er mørkt, eller når det er nødvendig for å gjøre kjøretøyet godt synlig",
      "Kun i tunnel",
      "Kun på motorvei"
    ],
    correct: 1,
    explanation: "Du skal bruke lys når det er dårlig sikt, mørkt, eller når det er nødvendig for å gjøre kjøretøyet synlig."
  },
  {
    id: 13,
    question: "Hva er vikeplikten ved en rundkjøring?",
    options: [
      "Kjøretøy i rundkjøringen har vikeplikt",
      "Kjøretøy som skal inn i rundkjøringen har vikeplikt for kjøretøy i rundkjøringen",
      "Bare busser har forkjørsrett",
      "Det er ingen spesielle vikepliktsregler"
    ],
    correct: 1,
    explanation: "Kjøretøy som skal inn i rundkjøring har vikeplikt for kjøretøy som allerede er i rundkjøringen."
  },
  {
    id: 14,
    question: "Hvor langt fra et kryss kan du parkere?",
    options: [
      "5 meter",
      "10 meter",
      "15 meter",
      "20 meter"
    ],
    correct: 0,
    explanation: "Du skal ikke parkere nærmere enn 5 meter fra et kryss."
  },
  {
    id: 15,
    question: "Hva betyr et gul-grønt skilt med en bil og 50-tallet?",
    options: [
      "Parkeringsforbud 50 meter",
      "Minimumsfart 50 km/t",
      "Maksimal hastighet 50 km/t",
      "Avstand 50 meter til neste parkering"
    ],
    correct: 2,
    explanation: "Gul-grønt skilt med tall angir maksimal hastighet (fartsgrense)."
  },
  {
    id: 16,
    question: "Hva skal du gjøre når du hører utrykningskjøretøy med sirene bak deg?",
    options: [
      "Kjøre videre i samme hastighet",
      "Kjøre til høyre side og stoppe eller redusere hastigheten betydelig",
      "Kjøre raskere for å komme unna",
      "Kun blinke med lysene"
    ],
    correct: 1,
    explanation: "Når utrykningskjøretøy nærmer seg, skal du kjøre til høyre side og stoppe eller redusere hastigheten betydelig."
  },
  {
    id: 17,
    question: "Hva er maksimal tillatt hastighet på motorvei i Norge?",
    options: [
      "100 km/t",
      "110 km/t",
      "120 km/t",
      "130 km/t"
    ],
    correct: 1,
    explanation: "Maksimal tillatt hastighet på motorvei er 110 km/t, men kan være lavere hvis skiltet."
  },
  {
    id: 18,
    question: "Når skal du gi tegn før sving?",
    options: [
      "Minst 30 meter før",
      "Minst 50 meter før",
      "Minst 100 meter før",
      "Du trenger ikke gi tegn hvis det ikke er trafikk"
    ],
    correct: 1,
    explanation: "Du skal gi tegn minst 50 meter før sving, eller tidligere hvis det er nødvendig."
  },
  {
    id: 19,
    question: "Hva betyr en heltrukken hvit linje midt på veien?",
    options: [
      "Du kan kjøre over linjen for å kjøre forbi",
      "Du skal ikke kjøre over linjen",
      "Du kan kjøre over linjen når du vil",
      "Linjen angir kun veiens midtpunkt"
    ],
    correct: 1,
    explanation: "Heltrukken linje midt på veien skal ikke kjøres over, unntatt når du skal svinge til venstre."
  },
  {
    id: 20,
    question: "Hva er prøvetiden for nye førere?",
    options: [
      "1 år",
      "2 år",
      "3 år",
      "Ingen prøvetid"
    ],
    correct: 1,
    explanation: "Prøvetiden for nye førere er 2 år fra den dagen du fikk førerkortet."
  },
  {
    id: 21,
    question: "Hva skal du gjøre hvis du kjører forbi en buss som stopper på holdeplass?",
    options: [
      "Kjøre forbi i full fart",
      "Sakte ned og vike hvis bussen gir tegn om å kjøre ut",
      "Kun blinke med lysene",
      "Stoppe helt"
    ],
    correct: 1,
    explanation: "Du skal sakte ned og vike for buss som gir tegn om å kjøre ut fra holdeplass."
  },
  {
    id: 22,
    question: "Hva er maksimal tillatt hastighet på landevei uten spesielle skilt?",
    options: [
      "70 km/t",
      "80 km/t",
      "90 km/t",
      "100 km/t"
    ],
    correct: 1,
    explanation: "På landevei uten spesielle skilt er fartsgrensen 80 km/t."
  },
  {
    id: 23,
    question: "Hva betyr rødt lys i et lyskryss?",
    options: [
      "Kjøre med forsiktighet",
      "Stoppe før stopplinjen eller før krysset",
      "Kun stoppe hvis det er trafikk",
      "Kjøre forbi hvis det er klart"
    ],
    correct: 1,
    explanation: "Rødt lys betyr at du skal stoppe før stopplinjen eller før krysset."
  },
  {
    id: 24,
    question: "Hvor langt fra et jernbanekryss kan du parkere?",
    options: [
      "10 meter",
      "20 meter",
      "30 meter",
      "50 meter"
    ],
    correct: 3,
    explanation: "Du skal ikke parkere nærmere enn 50 meter fra et jernbanekryss."
  },
  {
    id: 25,
    question: "Hva skal du gjøre hvis du blir stoppet av politiet?",
    options: [
      "Kjøre videre",
      "Stoppe umiddelbart og følge politiets instruksjoner",
      "Kun stoppe hvis du har gjort noe galt",
      "Stoppe når det passer deg"
    ],
    correct: 1,
    explanation: "Du skal stoppe umiddelbart når politiet ber deg om det, og følge deres instruksjoner."
  },
  {
    id: 26,
    question: "Hva er minimumsalderen for å øve privat (øvingskjøring) for klasse B?",
    options: [
      "15 år",
      "16 år",
      "17 år",
      "18 år"
    ],
    correct: 1,
    explanation: "Minimumsalderen for øvingskjøring er 16 år, og du må ha fullført trafikalt grunnkurs."
  },
  {
    id: 27,
    question: "Hva betyr et blått skilt med hvit pil som peker oppover?",
    options: [
      "Kun rett frem",
      "Påbudt kjøring rett frem",
      "Parkeringsforbud",
      "Fartsgrense"
    ],
    correct: 1,
    explanation: "Blått skilt med hvit pil som peker oppover betyr påbudt kjøring rett frem."
  },
  {
    id: 28,
    question: "Hva er vikeplikten når du skal svinge til venstre i et kryss?",
    options: [
      "Du har alltid forkjørsrett",
      "Du skal vike for møtende trafikk og trafikk fra høyre",
      "Kun for møtende trafikk",
      "Kun for trafikk fra høyre"
    ],
    correct: 1,
    explanation: "Når du svinger til venstre, skal du vike for møtende trafikk og trafikk fra høyre."
  },
  {
    id: 29,
    question: "Hvor langt fra et stoppskilt skal du stoppe?",
    options: [
      "5 meter før",
      "Ved stopplinjen eller før krysset hvis det ikke er stopplinje",
      "10 meter før",
      "Du trenger ikke stoppe helt"
    ],
    correct: 1,
    explanation: "Ved stoppskilt skal du stoppe ved stopplinjen eller før krysset hvis det ikke er stopplinje."
  },
  {
    id: 30,
    question: "Hva er maksimal tillatt hastighet i tettbygd strøk uten spesielle skilt?",
    options: [
      "30 km/t",
      "50 km/t",
      "60 km/t",
      "70 km/t"
    ],
    correct: 1,
    explanation: "I tettbygd strøk er fartsgrensen 50 km/t hvis ikke annet er skiltet."
  },
  {
    id: 31,
    question: "Hva skal du gjøre hvis frontlysene på bilen din ikke fungerer?",
    options: [
      "Kjøre videre, du har baklys",
      "Få dem reparert umiddelbart før du kjører",
      "Kun kjøre om dagen",
      "Kun kjøre i nødsituasjoner"
    ],
    correct: 1,
    explanation: "Hvis frontlysene ikke fungerer, må du få dem reparert før du kjører. Det er farlig å kjøre uten fungerende frontlys."
  },
  {
    id: 32,
    question: "Hva betyr et rødt skilt med hvit strek over bil?",
    options: [
      "Parkeringsforbud",
      "Kjøring forbudt",
      "Stoppforbud",
      "Tunell"
    ],
    correct: 0,
    explanation: "Rødt skilt med hvit strek over bil betyr parkeringsforbud."
  },
  {
    id: 33,
    question: "Når skal du bruke dødvinkelassistent?",
    options: [
      "Dødvinkelassistent erstatter alltid speilene",
      "Dødvinkelassistent er et hjelpemiddel, men du skal fortsatt bruke speilene",
      "Kun om natten",
      "Kun på motorvei"
    ],
    correct: 1,
    explanation: "Dødvinkelassistent er et hjelpemiddel, men du skal fortsatt bruke speilene og sjekke dødvinkler."
  },
  {
    id: 34,
    question: "Hva er vikeplikten når du kommer fra en privat veg inn på en offentlig veg?",
    options: [
      "Du har forkjørsrett",
      "Du skal vike for trafikk på den offentlige veien",
      "Det er ingen spesielle regler",
      "Kun for biler"
    ],
    correct: 1,
    explanation: "Fra privat veg inn på offentlig veg skal du vike for trafikk på den offentlige veien."
  },
  {
    id: 35,
    question: "Hva betyr et gul-grønt skilt med 'SLIT'?",
    options: [
      "Slitasje på veien",
      "Slippery when wet - glatt ved vått føre",
      "Slow - sakte",
      "Stop - stopp"
    ],
    correct: 1,
    explanation: "SLIT-skiltet advarer om at veien kan være glatt ved vått føre."
  },
  {
    id: 36,
    question: "Hvor mange obligatoriske kjøretimer må du ha med trafikkskole for klasse B?",
    options: [
      "3 timer",
      "5 timer",
      "7 timer",
      "10 timer"
    ],
    correct: 1,
    explanation: "Du må ha minst 5 obligatoriske kjøretimer med trafikkskole for klasse B."
  },
  {
    id: 37,
    question: "Hva skal du gjøre når du skal svinge til høyre og det er syklister i sykkelfeltet?",
    options: [
      "Kjøre forbi syklistene",
      "Vike for syklister som skal rett frem",
      "Kun blinke med lysene",
      "Syklefeltet har ikke forkjørsrett"
    ],
    correct: 1,
    explanation: "Når du skal svinge til høyre, skal du vike for syklister i sykkelfeltet som skal rett frem."
  },
  {
    id: 38,
    question: "Hva betyr et rødt skilt med hvit sirkel og rød strek over '30'?",
    options: [
      "Minimumsfart 30 km/t",
      "Maksimal hastighet 30 km/t",
      "Parkering 30 minutter",
      "Avstand 30 meter"
    ],
    correct: 1,
    explanation: "Rødt skilt med hvit sirkel og tall angir maksimal hastighet (fartsgrense)."
  },
  {
    id: 39,
    question: "Hva er regelen for bruk av mobiltelefon under kjøring?",
    options: [
      "Du kan bruke den hvis du er forsiktig",
      "Du kan bruke den hvis den er i hands-free oppsett",
      "Bruk av mobiltelefon uten hands-free er forbudt under kjøring",
      "Kun om natten"
    ],
    correct: 2,
    explanation: "Bruk av mobiltelefon uten hands-free oppsett er forbudt under kjøring."
  },
  {
    id: 40,
    question: "Hva skal du gjøre hvis bilen din brekker sammen på motorveien?",
    options: [
      "Stå i veibanen og vente",
      "Kjøre bilen ut av veibanen, sette på nødblinklys og plassere varseltrekant",
      "Kun sette på nødblinklys",
      "Gå tilbake og lete etter hjelp"
    ],
    correct: 1,
    explanation: "Hvis bilen brekker sammen, skal du kjøre den ut av veibanen, sette på nødblinklys og plassere varseltrekant."
  },
  {
    id: 41,
    question: "Hva betyr et gul-grønt skilt med 'KRYS'?",
    options: [
      "Kryss",
      "Kryssende trafikk",
      "Kryssvei",
      "Kryss med vikeplikt"
    ],
    correct: 1,
    explanation: "KRYS-skiltet advarer om kryssende trafikk."
  },
  {
    id: 42,
    question: "Hva er regelen for omkjøring til høyre?",
    options: [
      "Alltid tillatt",
      "Tillatt på motorvei og i veier med flere kjørefelt i samme retning",
      "Aldri tillatt",
      "Kun om natten"
    ],
    correct: 1,
    explanation: "Omkjøring til høyre er tillatt på motorvei og i veier med flere kjørefelt i samme retning."
  },
  {
    id: 43,
    question: "Hva skal du gjøre når du skal parkere på en bakke?",
    options: [
      "Kun sette håndbrekken",
      "Sette håndbrekken og vri hjulene mot kantsteinen",
      "Kun sette i gir",
      "Ingen spesielle tiltak er nødvendig"
    ],
    correct: 1,
    explanation: "Når du parkerer på bakke, skal du sette håndbrekken og vri hjulene mot kantsteinen (nedover bakke) eller vekk fra kantsteinen (oppover bakke)."
  },
  {
    id: 44,
    question: "Hva er vikeplikten ved en T-kryss?",
    options: [
      "Kjøretøy fra hovedveien har alltid forkjørsrett",
      "Kjøretøy fra sideveien skal vike for trafikk på hovedveien",
      "Det er ingen spesielle regler",
      "Den som kommer først har forkjørsrett"
    ],
    correct: 1,
    explanation: "Ved T-kryss skal trafikk fra sideveien vike for trafikk på hovedveien, med mindre annet er skiltet."
  },
  {
    id: 45,
    question: "Hva er minimum avstand til forankjørende i kø på motorvei?",
    options: [
      "Ingen spesifikk avstand",
      "Minst 2 sekunder",
      "Minst 3 sekunder",
      "Minst 5 sekunder"
    ],
    correct: 1,
    explanation: "Du skal holde minst 3 sekunders avstand til forankjørende på motorvei, også i kø."
  }
];

const TOTAL_QUESTIONS = QUIZ_QUESTIONS.length;
const PASSING_SCORE = 38; // Need 38 out of 45 to pass
const TIME_LIMIT = 90 * 60; // 90 minutes in seconds

function TeoriproveContent() {
  const { isDesktopFocused } = useFormContext();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(TOTAL_QUESTIONS).fill(-1));
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);

  useEffect(() => {
    setSelectedAnswer(answers[currentQuestion] !== undefined ? answers[currentQuestion] : -1);
  }, [currentQuestion, answers]);

  const handleFinish = () => {
    setIsFinished(true);
    setIsStarted(false);
    setShowResults(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStarted && !isFinished && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleFinish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStarted, isFinished]);

  const handleStart = () => {
    setIsStarted(true);
    setTimeRemaining(TIME_LIMIT);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < TOTAL_QUESTIONS - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] !== undefined ? answers[currentQuestion + 1] : -1);
    } else {
      handleFinish();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] !== undefined ? answers[currentQuestion - 1] : -1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    QUIZ_QUESTIONS.forEach((question, index) => {
      if (answers[index] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const score = calculateScore();
  const passed = score >= PASSING_SCORE;
  const progress = ((currentQuestion + 1) / TOTAL_QUESTIONS) * 100;

  if (showResults) {
    return (
      <>
        <Navbar />
        <ArticleFormOverlay />
        <CompactFormCTA />
        <StickyMobileCTA />
        <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-8">
            <div className="rounded-3xl bg-white border-2 border-slate-200 p-8 sm:p-10 lg:p-12 shadow-lg">
              <div className="text-center mb-8">
                {passed ? (
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                    <XCircle className="w-12 h-12 text-red-600" />
                  </div>
                )}
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  {passed ? "Gratulerer!" : "Ikke bestått"}
                </h1>
                <p className="text-lg text-slate-600 mb-2">
                  Du fikk <strong className="text-slate-900">{score} av {TOTAL_QUESTIONS}</strong> riktig
                </p>
                <p className="text-base text-slate-500">
                  For å bestå trenger du minst {PASSING_SCORE} riktige svar
                </p>
              </div>

              <div className="space-y-6">
                {QUIZ_QUESTIONS.map((question, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correct;
                  return (
                    <div
                      key={question.id}
                      className={`rounded-xl border-2 p-5 ${
                        isCorrect
                          ? "border-green-200 bg-green-50/50"
                          : "border-red-200 bg-red-50/50"
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900 mb-3">
                            Spørsmål {index + 1}: {question.question}
                          </p>
                          <div className="space-y-2">
                            {question.options.map((option, optIndex) => (
                              <div
                                key={optIndex}
                                className={`p-3 rounded-lg ${
                                  optIndex === question.correct
                                    ? "bg-green-100 border-2 border-green-300"
                                    : optIndex === userAnswer && !isCorrect
                                    ? "bg-red-100 border-2 border-red-300"
                                    : "bg-slate-50 border border-slate-200"
                                }`}
                              >
                                <p className="text-sm text-slate-700">
                                  {optIndex === question.correct && (
                                    <span className="font-semibold text-green-700 mr-2">✓ Riktig svar:</span>
                                  )}
                                  {optIndex === userAnswer && !isCorrect && (
                                    <span className="font-semibold text-red-700 mr-2">✗ Ditt svar:</span>
                                  )}
                                  {option}
                                </p>
                              </div>
                            ))}
                          </div>
                          {question.explanation && (
                            <p className="mt-3 text-sm text-slate-600 italic bg-blue-50 p-3 rounded-lg border border-blue-200">
                              {question.explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers(new Array(TOTAL_QUESTIONS).fill(-1));
                      setTimeRemaining(TIME_LIMIT);
                      setIsStarted(false);
                      setIsFinished(false);
                      setShowResults(false);
                      setSelectedAnswer(-1);
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Ta prøven på nytt
                  </button>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#3bb54a] text-white font-semibold rounded-xl hover:bg-[#2d8f3d] transition-colors"
                  >
                    Tilbake til forsiden
                  </a>
                </div>
              </div>
            </div>
              </div>
              <FormSidebar />
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (!isStarted) {
    // Structured data for Quiz/EducationalActivity
    const quizStructuredData = {
      "@context": "https://schema.org",
      "@type": "Quiz",
      "name": "Teoriprøve Klasse B - Treningsprøve",
      "description": "Gratis treningsprøve med 45 spørsmål som ligner på den virkelige teoriprøven for klasse B hos Statens vegvesen. 90 minutter og minst 38 riktige svar for å bestå.",
      "educationalLevel": "Beginner",
      "educationalUse": "Assessment",
      "learningResourceType": "Quiz",
      "teaches": "Trafikkregler, vikeplikt, skilting, fartsgrenser, sikkerhet i trafikken",
      "numberOfQuestions": TOTAL_QUESTIONS,
      "timeRequired": "PT90M",
      "educationalCredentialAwarded": "Self-assessment for driver's license theory test preparation",
      "provider": {
        "@type": "Organization",
        "name": "Førerkortportalen",
        "url": "https://forerkortportalen.no"
      }
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(quizStructuredData) }}
        />
        <Breadcrumbs
          items={[
            { name: "Teoriprøve", url: "https://forerkortportalen.no/teoriprove" },
          ]}
        />
        <Navbar />
        <ArticleFormOverlay />
        <CompactFormCTA />
        <StickyMobileCTA />
        <section className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
          <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-8">
            <div className="rounded-3xl bg-white border-2 border-slate-200 p-8 sm:p-10 lg:p-12 shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <AlertCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                  Teoriprøve <span className="text-blue-600">Klasse B</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Test deg selv med {TOTAL_QUESTIONS} spørsmål som ligner på den virkelige teoriprøven hos Statens vegvesen
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">Prøveinformasjon</h2>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>{TOTAL_QUESTIONS} spørsmål</strong> - Flervalgsoppgaver med ett riktig svar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>90 minutter</strong> tilgjengelig tid</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Du må få <strong>minst {PASSING_SCORE} riktige</strong> for å bestå prøven</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Du kan gå tilbake og endre svar underveis i prøven</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <p className="text-sm text-amber-800">
                    <strong>Merk:</strong> Dette er en treningsprøve for å forberede deg til den virkelige teoriprøven. 
                    Den offisielle teoriprøven tas på en trafikkstasjon hos Statens vegvesen.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <button
                  onClick={handleStart}
                  className="w-full sm:w-auto mx-auto block px-8 py-4 bg-[#3bb54a] text-white font-semibold text-lg rounded-xl hover:bg-[#2d8f3d] transition-colors shadow-lg shadow-[#3bb54a]/25 hover:shadow-xl hover:shadow-[#3bb54a]/30"
                >
                  Start teoriprøven
                </button>
              </div>

              {/* SEO-friendly content section */}
              <div className="mt-10 space-y-8 text-slate-700 prose prose-slate max-w-none prose-a:text-[#3bb54a] prose-a:hover:text-[#2d8f3d] prose-a:font-medium prose-a:underline">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Hva er teoriprøven for førerkort klasse B?</h2>
                  <p className="text-base leading-relaxed mb-4">
                    Teoriprøven for førerkort klasse B er et obligatorisk steg i prosessen mot å få førerkort for personbil. 
                    Prøven består av {TOTAL_QUESTIONS} flervalgsoppgaver som tester din kunnskap om trafikkregler, skilting, 
                    vikeplikt, fartsgrenser og sikkerhet i trafikken. Den offisielle teoriprøven gjennomføres på en 
                    trafikkstasjon hos Statens vegvesen, og du må bestå den før du kan ta den praktiske førerprøven.
                  </p>
                  <p className="text-base leading-relaxed">
                    For å bestå teoriprøven må du få minst {PASSING_SCORE} av {TOTAL_QUESTIONS} spørsmål riktig. Du har 
                    90 minutter tilgjengelig tid, noe som gir deg god tid til å lese gjennom alle spørsmålene nøye og 
                    tenke deg om før du svarer. Alle spørsmålene er flervalgsoppgaver med kun ett riktig svaralternativ.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Hvordan forberede deg til teoriprøven</h2>
                  <p className="text-base leading-relaxed mb-4">
                    En god forberedelse er nøkkelen til å bestå teoriprøven på første forsøk. Det anbefales å bruke 
                    teoribøker, øve på digitale plattformer og ta treningsprøver som denne for å bli kjent med 
                    spørsmålsformuleringene og fokusområdene. Vi anbefaler også å lese vår guide om <a href="/artikler/5" className="text-[#3bb54a] hover:text-[#2d8f3d] underline font-medium">hvordan du forbereder deg til førerprøven</a> for ytterligere tips og råd. Mange elever finner det nyttig å fokusere spesielt på 
                    områder som:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                    <li>Trafikkregler og vikepliktsregler i ulike situasjoner</li>
                    <li>Skilting og betydningen av ulike trafikkskilt</li>
                    <li>Fartsgrenser for ulike veityper og situasjoner</li>
                    <li>Sikkerhet i trafikken og bruk av sikkerhetsutstyr</li>
                    <li>Miljøvennlig kjøring og energieffektivitet</li>
                    <li>Spesielle situasjoner som rutebusser, syklister og fotgjengere</li>
                  </ul>
                  <p className="text-base leading-relaxed">
                    Treningsprøver som denne hjelper deg med å vurdere hvor godt du er forberedt, identifisere 
                    kunnskapsområder du bør jobbe mer med, og gi deg trygghet før den offisielle prøven.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Gjennomføring av teoriprøven</h2>
                  <p className="text-base leading-relaxed mb-4">
                    Når du er klar til å ta den offisielle teoriprøven, må du bestille time hos Statens vegvesen. 
                    Prøven gjennomføres på en datamaskin på trafikkstasjonen, og du får resultatet umiddelbart etter 
                    at du har fullført prøven. Hvis du består, kan du begynne på den praktiske kjøreopplæringen og 
                    planlegge oppkjøringen. Les mer om hele prosessen i vår <a href="/artikler/10" className="text-[#3bb54a] hover:text-[#2d8f3d] underline font-medium">steg-for-steg guide til førerkortprosessen</a> eller få detaljert informasjon om <a href="/artikler/2" className="text-[#3bb54a] hover:text-[#2d8f3d] underline font-medium">førerkort klasse B</a>.
                  </p>
                  <p className="text-base leading-relaxed">
                    Teoriprøven er tilgjengelig på flere språk, inkludert norsk bokmål, nynorsk, engelsk, arabisk, 
                    sorani og tyrkisk. Hvis du trenger tilrettelagt teoriprøve, for eksempel muntlig gjennomføring, 
                    kan du søke om dette når du bestiller time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Tips for å bestå teoriprøven</h2>
                  <p className="text-base leading-relaxed mb-4">
                    Her er noen viktige tips som kan hjelpe deg til å bestå teoriprøven:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                    <li><strong>Les spørsmålene nøye:</strong> Ta deg tid til å forstå hva hvert spørsmål faktisk spør om</li>
                    <li><strong>Tenk på realiteten i trafikken:</strong> Mange spørsmål handler om praktiske situasjoner du vil møte som sjåfør</li>
                    <li><strong>Husk trafikkreglene:</strong> Hovedregler som høyreregel, vikeplikt og fartsgrenser er ofte tema</li>
                    <li><strong>Vær konsentrert:</strong> 90 minutter er mye tid, men bruk den fornuftig og unngå stress</li>
                    <li><strong>Gå tilbake og sjekk:</strong> Hvis du er usikker på et svar, kan du markere det og gå tilbake senere</li>
                  </ul>
                  <p className="text-base leading-relaxed">
                    Husk at denne treningsprøven er et verktøy for å forberede deg. Den gir deg en god indikasjon 
                    på om du er klar, men den offisielle prøven hos Statens vegvesen kan ha noe annerledes formuleringer. 
                    Viktigst av alt er at du har solid kunnskap om trafikkreglene og kan anvende dem i ulike situasjoner.
                  </p>
                </div>
              </div>
            </div>
              </div>
              <FormSidebar />
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const currentQ = QUIZ_QUESTIONS[currentQuestion];

  return (
    <>
      <Navbar />
      <ArticleFormOverlay />
      <CompactFormCTA />
      <StickyMobileCTA />
      <section className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 pt-8 sm:pt-12 pb-12 sm:pb-16 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8">
          {/* Progress and Timer Bar */}
          <div className="mb-6 bg-white rounded-xl border-2 border-slate-200 p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between text-sm text-slate-600 mb-1">
                    <span>Spørsmål {currentQuestion + 1} av {TOTAL_QUESTIONS}</span>
                    <span>{Math.round(progress)}% fullført</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-[#3bb54a] h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-red-600" />
                <span className={timeRemaining < 600 ? "text-red-600" : ""}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div className="rounded-3xl bg-white border-2 border-slate-200 p-6 sm:p-8 lg:p-10 shadow-lg mb-6">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Spørsmål {currentQuestion + 1}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-relaxed">
                {currentQ.question}
              </h2>
            </div>

            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedAnswer === index
                      ? "border-[#3bb54a] bg-green-50 shadow-md"
                      : answers[currentQuestion] === index
                      ? "border-blue-300 bg-blue-50"
                      : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        selectedAnswer === index || answers[currentQuestion] === index
                          ? "border-[#3bb54a] bg-[#3bb54a]"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {selectedAnswer === index || answers[currentQuestion] === index ? (
                        <div className="w-3 h-3 rounded-full bg-white" />
                      ) : null}
                    </div>
                    <span className="text-base text-slate-700 flex-1">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between pt-6 border-t border-slate-200">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Forrige
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#3bb54a] text-white font-semibold rounded-xl hover:bg-[#2d8f3d] transition-colors shadow-lg shadow-[#3bb54a]/25"
              >
                {currentQuestion === TOTAL_QUESTIONS - 1 ? (
                  <>
                    Lever svar
                    <ArrowRight className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Neste
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Question Navigation Grid */}
          <div className="bg-white rounded-xl border-2 border-slate-200 p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-700 mb-3">Naviger til spørsmål:</p>
            <div className="grid grid-cols-5 sm:grid-cols-9 lg:grid-cols-15 gap-2">
              {QUIZ_QUESTIONS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentQuestion(index);
                    setSelectedAnswer(answers[index] !== undefined ? answers[index] : -1);
                  }}
                  className={`aspect-square rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    index === currentQuestion
                      ? "bg-[#3bb54a] text-white ring-2 ring-[#3bb54a] ring-offset-2"
                      : answers[index] !== -1
                      ? "bg-blue-100 text-blue-700 border-2 border-blue-300"
                      : "bg-slate-100 text-slate-600 border border-slate-300 hover:bg-slate-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#3bb54a]"></div>
                <span>Nåværende</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-100 border-2 border-blue-300"></div>
                <span>Besvart</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-slate-100 border border-slate-300"></div>
                <span>Ikke besvart</span>
              </div>
            </div>
          </div>
            </div>
            <FormSidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default function TeoriprovePage() {
  return (
    <FormProvider>
      <TeoriproveContent />
    </FormProvider>
  );
}
