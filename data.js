let courses = [
  {
    id: 0,
    place: "EC Utbildning AB Helsingborg",
    course: "C#",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "30 YH-poäng",
    description:
      "Kursen syftar till att studerande utvecklar specialiserade kunskaper i objektorienterad  programmering med en fördjupning i programspråket C#. Kursen inleds med att studerande får kunskaper om versionshantering för att kunna programmera säkert.",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "100",
    grade: "VG"
  },
  {
    id: 1,
    place: "EC Utbildning AB Helsingborg",
    course: "ASP.NET (CORE) MVC",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "25 YH-poäng",
    description:
      "Kursen syftar till att ge studenten specialiserad kunskap i att skapa webbapplikationer med ramverket ASP.NET MVC, där studenten utvecklar avancerad teoretisk och praktiskt kunskap som låter denna självständigt arbeta med detta på ett effektivt vis.",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "100",
    grade: "VG"
  },
  {
    id: 2,
    place: "EC Utbildning AB Helsingborg",
    course: "Datalagring med .NET",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "25 YH-poäng",
    description:
      "Kursen syftar till att ge den studerande specialiserad kunskap inom lagring av data i .NET, både med avseende på format (XML, JSON och CSV) och sättet på vilket data lagras. Vidare lär sig studenten skapa effektiva lagringslösningar som stöder applikationen behov, där fokus ligger på relationsdatabasen SQL Server och SQL.",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "100",
    grade: "VG"
  },
  {
    id: 3,
    place: "EC Utbildning AB Helsingborg",
    course: "HTML & CSS",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "25 YH-poäng",
    description:
      "Kursen syftar till att ge den studerande specialiserad kunskap inom HTML & CSS samt hur man jobbar effektivt med dessa teknologier, genom att använda vanligt förekommande bibliotek och metodologier, för att realisera designskisser och skapa attraktiva webbsidor.",
    teacher: "Björn Jönsson",
    teacherLink: "https://www.linkedin.com/in/bj%C3%B6rn-j%C3%B6nsson-7a69501/",
    completion: "100",
    grade: "G"
  },
  {
    id: 4,
    place: "EC Utbildning AB Helsingborg",
    course: "JavaScript",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "25 YH-poäng",
    description:
      "Kursen syftar till att den studerande utvecklar specialiserade kunskaper genom teori och praktiska övningar. Den får utveckla sina kunskaper om, färdigheter i, och kompetenser för att skapa och utveckla enklare front-end tillämpningar.",
    teacher: "Björn Jönsson",
    teacherLink: "https://www.linkedin.com/in/bj%C3%B6rn-j%C3%B6nsson-7a69501/",
    completion: "100",
    grade: "VG"
  },
  {
    id: 5,
    place: "EC Utbildning AB Helsingborg",
    course: "Agil systemutveckling med Scrum",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "25 YH-poäng",
    description:
      "Kursen syftar till att ge nödvändiga teoretiska och praktiska kunskaper inom agil systemutveckling med Scrum, för att lägga grund för arbete inom projekt där denna vanligt förekommande metodologi används. Efter ett antal inledande föreläsningar delas deltagarna upp i grupper som sedan får genomföra ett simulerat projekt där Scrum och alla de koncept som ingår i detta, används.",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "0",
    grade: "VG"
  },
  {
    id: 6,
    place: "EC Utbildning AB Helsingborg",
    course: "ASP.NET Web API",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "20 YH-poäng",
    description:
      "Kursen syftar till att ge den studerande specialiserad kunskap inom webbaserade API:er samt hur man skapar dessa för att tillgodose behovet av data från webbapplikationer.",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "0",
    grade: "VG"
  },
  {
    id: 7,
    place: "EC Utbildning AB Helsingborg",
    course: "React",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "20 YH-poäng",
    description:
      "Kursen syftar till att lära den studerande att bygga SPA i react och förstå ",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "100",
    grade: "VG"
  },
  {
    id: 8,
    place: "EC Utbildning AB Helsingborg",
    course: "CMS",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "25 YH-poäng",
    description:
      "Kursen syftar till att ge studerande praktiska kunskaper inom Content Management System (CMS) och hur dessa kan användas för att snabbt skapa flexibla lösningar som är enkla att underhålla och skapa innehåll för.",
    teacher: "Thomas Frank",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "0",
    grade: "VG"
  },
  {
    id: 9,
    place: "EC Utbildning AB Helsingborg",
    course: "Examensarbete",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "20 YH-poäng",
    description:
      "Målet med kursen är att studerande självständigt utvecklar och fördjupar sin kunskap om och förståelse för hur ett teoretiskt och empiriskt arbete inom utbildningens område samt i rapportskrivning, om möjligt på uppdrag av en extern uppdragsgivare, utförs. Vidare syftar kursen även till att uppfylla utbildningens övergripande examensmål, där den studerande ska kunna identifiera, formulera, analysera, lösa problem och utföra komplexa uppgifter kopplade till studieområdet. Examensarbetet kan var a en empirisk undersökning, ett utvecklingsarbete, en litteratur eller en dokumentstudie.",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "0",
    grade: "Ej Avslutad"
  },
  {
    id: 10,
    place: "EC Utbildning AB Helsingborg",
    course: "LIA 1 Applikationsutveckling",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "35 YH-poäng",
    description:
      "Kursen syftar till att studerande utvecklar kunskap om och förståelse för att självständigt kunna utföra specialiserade arbetsuppgifter inom utbildningens område med hjälp av relevanta arbetsmetoder. Studerande ska kunna arbeta på ett strukturerat och ansvarstagande sätt ute på ett företag med programmering. Kursen omfattar Webbprogrammering eller applikationsprogrammering. Arbetet ska utföras i projektform.",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "0",
    grade: "VG"
  },
  {
    id: 11,
    place: "EC Utbildning AB Helsingborg",
    course: "LIA 2: Mjukvaruutveckling",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "75 YH-poäng",
    description:
      "Kursen syftar till att studerande utvecklar kunskap om och förståelse för att självständigt kunna utföra specialiserade arbetsuppgifter inom utbildningens område med hjälp av relevanta arbetsmetoder. Studerande ska kunna arbeta på ett strukturerat och ansvarstagande sätt ute på ett företag med programmering. Kursen omfattar Webbprogrammering eller applikationsprogrammering. Arbetet ska utföras i projektform.",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "0",
    grade: "Ej avslutad"
  },
  {
    id: 12,
    place: "EC Utbildning AB Helsingborg",
    course: "Mjukvaruanalys",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "25 YH-poäng",
    description:
      " Kursen syftar till att studerande utvecklar specialiserade kunskaper i programlogiska problem med analyser och designmetoder med hjälp av UML och flödesdiagram enligt den objektorienterade modellen. Kursen går delvis parallellt med kursen Agil systemutveckling C#-kursen för att förbereda den studerande i arbete i större projekt.",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "0",
    grade: "VG"
  },
  {
    id: 13,
    place: "EC Utbildning AB Helsingborg",
    course: "Systemintegration",
    courseLink:
      "http://www.ecutbildning.se/utbildningar/webbutvecklare-inom-net",
    length: "25 YH-poäng",
    description:
      "Kursen syftar till att ge kunskap inom systemintegration. Man lär sig hur microservices fungerar, Teknologier som används är Docker, Kubernetes och Azure",
    teacher: "Robert Tublen",
    teacherLink: "https://www.linkedin.com/in/rtublen/",
    completion: "100",
    grade: "VG"
  },
  {
    id: 14,
    place: "Udemy",
    course: "Total Frontend Website Creation HTML CSS JavaScript jQuery",
    courseLink:
      "https://www.udemy.com/frontend-website-developer-html-css-javascript-jquery/",
    length: "8.5 timmar video",
    description:
      "Omfattande kurs om hur man skapar webbsidor, man använder både Html, Css som Javascript och även jQuery berörs lite.",
    teacher: "Laurence Svekis",
    teacherLink: "https://www.udemy.com/user/lars51/",
    completion: "100",
    grade: ""
  },
  {
    id: 15,
    place: "Udemy",
    course: "C# Basics for Beginners: Learn C# Fundamentals by Coding",
    courseLink: "https://www.udemy.com/csharp-tutorial-for-beginners/",
    length: "5.5 timmar video",
    description: "Man lär sig grunderna i C# och .NET Framework.",
    teacher: "Mosh Hamedani",
    teacherLink: "https://www.udemy.com/user/moshfeghhamedani/",
    completion: "100",
    grade: ""
  },
  {
    id: 16,
    place: "Udemy",
    course: "C# Intermediate: Classes, Interfaces and OOP",
    courseLink: "Mosh Hamedani",
    length: "6 timmar video",
    description:
      "Man lär sig det som är lite mer avancerat än grunderna, t ex classes, constructors, fields, properties, methods, indexers osv.",
    teacher: "Mosh Hamedani",
    teacherLink: "https://www.udemy.com/user/moshfeghhamedani/",
    completion: "100",
    grade: ""
  },
  {
    id: 17,
    place: "Udemy",
    course: "C# Advanced Topics: Prepare for Technical Interviews",
    courseLink: "Mosh Hamedani",
    length: "3 timmar video",
    description: "Man lär sig mer avancerade programmering inom C#.",
    teacher: "Mosh Hamedani",
    teacherLink: "https://www.udemy.com/user/moshfeghhamedani/",
    completion: "100",
    grade: ""
  },
  {
    id: 18,
    place: "Udemy",
    course: "Java Programming Masterclass for Software Developers",
    courseLink:
      "https://www.udemy.com/java-the-complete-java-developer-course/",
    length: "77,5 timmar video",
    description:
      "Denna kursen avslutade jag för ett par år sedan så denna kunskap sitter inte färsk i huvudet längre, men man lär sig allt från grunden till mer avancerad programmering inom Java, kursen är på hela 77.5 timmars videomaterial därtill får man lägga massor av labtid. En gedigen kurs som jag gärn går om någon gång för att fräscha upp minnet.",
    teacher: "Tim Buchalka",
    teacherLink: "https://www.udemy.com/user/timbuchalka/",
    completion: "100",
    grade: ""
  },
  {
    id: 19,
    place: "Udemy",
    course: "JavaFx Tutorial For Beginners",
    courseLink: "https://www.udemy.com/draft/665098/",
    length: "7.5 timmar video",
    description:
      "JavaFX är ett mer grafiskt framework för Java som är avsedd att stödja stationära applikationer och webbläsare. Det är generellt en java-plattform för att skapa rika internetapplikationer som kan köras på en mängd olika enheter.",
    teacher: "Yogesh Patel",
    teacherLink: "https://www.udemy.com/user/programmingknowledge/",
    completion: "100",
    grade: ""
  },
  {
    id: 20,
    place: "Udemy",
    course: "3d modelling - a Modo modeling guide",
    courseLink: "https://www.udemy.com/3d-modeling-in-modo/",
    length: "17,5 timmar video",
    description:
      "Man lär sig hur man använder Modo 3d ett avancerat 3d moduleringsverktyg.",
    teacher: "Daniel Cremers",
    teacherLink:
      "https://www.udemy.com/user/ce4194f5-2ef9-4222-b5e2-22b0aa21999a/",
    completion: "100",
    grade: ""
  },
  {
    id: 21,
    place: "Udemy",
    course: "Android N: From Beginner to Paid Professional",
    courseLink: "https://www.udemy.com/learn-android/",
    length: "25 timmar video",
    description:
      "En omfattande kurs i hur man gör appar till Android, denna kurs har även den några år på nacken.",
    teacher: "Mark Price",
    teacherLink: "https://www.udemy.com/user/mark-price-2/",
    completion: "100",
    grade: ""
  },
  {
    id: 22,
    place: "Udemy",
    course: "Learn the Swift Programming Language for Beginners",
    courseLink: "https://www.udemy.com/draft/503666/",
    length: "4,5 timmar video",
    description:
      "En liten titt på Apples programmeringsspråk Swift, denna kurs har några år på nacken, så kunskapen sitter inte så fräscht i huvudet.",
    teacher: "Jason Rybka",
    teacherLink: "https://www.udemy.com/user/jasonrybka/",
    completion: "100",
    grade: ""
  },
  {
    id: 23,
    place: "Udemy",
    course: "The Complete JavaScript Course - Beginner to Professional",
    courseLink: "https://www.udemy.com/javascript-training/",
    length: "33,5 timmar video",
    description: "En omfattande kurs i Javascript.",
    teacher: "Laurence Svekis",
    teacherLink: "https://www.udemy.com/user/lars51/",
    completion: "100",
    grade: ""
  },
  {
    id: 24,
    place: "Udemy",
    course: "C# Developers: Learn the Art of Writing Clean Code",
    courseLink: "https://www.udemy.com/clean-code/",
    length: "5.5 timmar video",
    description:
      "Man lär sig tekniker hur man skriver snyggare, bättre kod i C#.",
    teacher: "Mosh Hamedani",
    teacherLink: "https://www.udemy.com/user/moshfeghhamedani/",
    completion: "100",
    grade: ""
  },
  {
    id: 25,
    place: "Udemy",
    course: "Complete C# Masterclass",
    courseLink: "https://www.udemy.com/complete-csharp-masterclass/",
    length: "28,5 timmar video",
    description:
      "En omfattande kurs i C#! Man får lära sig WPF, Databashantering, Linq, och en del spelprogrammering.",
    teacher: "Denis Panjuta",
    teacherLink: "https://www.udemy.com/user/denispanjuta/",
    completion: "59",
    grade: ""
  },
  {
    id: 26,
    place: "Udemy",
    course: "ASP NET Core 3 (ASP.NET 5),MVC,C#,Angular & EF Crash Course",
    courseLink:
      "https://www.udemy.com/aspnet-core-aspnet-5mvc-6cweb-api-ef-crash-course/",
    length: "22,5 timmar video",
    description:
      "En kurs i ASP NET Core, man jobbar med bland annat Entity Framwork, Web Api, MVC. Kursen innehåller även också Angular, men där la jag för tillfället inte så mycket energi, då vi ska gå igenom React i vår utbildning sedan. Angular ligger troligen i pipelinen sedan för mig att titta närmare på.",
    teacher: "",
    teacherLink: "",
    completion: "49",
    grade: ""
  },
  {
    id: 27,
    place: "Udemy",
    course: "The Complete jQuery Course: From Beginner To Advanced!",
    courseLink: "https://www.udemy.com/jquery-tutorial/",
    length: "6 timmar video",
    description: "En kurs i jQueary.",
    teacher: "Joe Parys",
    teacherLink: "https://www.udemy.com/user/josephparys/",
    completion: "48",
    grade: ""
  },
  {
    id: 28,
    place: "udemy",
    course: "iOS 10 & Swift 3: From Beginner to Paid Professional",
    courseLink: "https://www.udemy.com/devslopes-ios10/",
    length: "71 timmar video",
    description:
      "En mycket omfattande kurs i hur man gör appar till iOS, man använder uteslutande Swift och Apples egna IDE, man får testa att leka och använda många av telefonens APIer. Denna kurs var det ett tag sedan jag gjorde, så kunskapen ligger inte fräscht i huvudet.",
    teacher: "Mark Price",
    teacherLink: "https://www.udemy.com/user/mark-price-2/",
    completion: "100",
    grade: ""
  },
  {
    id: 29,
    place: "udemy",
    course: "Full Stack Development with React and ASP.NET Core 2",
    courseLink:
      "https://www.udemy.com/full-stack-development-with-react-and-aspnet-core-2/",
    length: "3 timmar video",
    description:
      "En snabb kurs på endast 3 timmar, tar upp hur man bygger upp en React frontend med en ASP.NET (WEBAPI Core backend, något förlegade teckniker används inom frontenden, men skulle göra ett react projekt i skolan och behövde snabbt komma igång med react",
    teacher: "_ _",
    teacherLink:
      "https://www.udemy.com/full-stack-development-with-react-and-aspnet-core-2/#instructor-1",
    completion: "100",
    grade: ""
  },
  {
    id: 30,
    place: "udemy",
    course: "Understanding TypeScript",
    courseLink: "https://www.udemy.com/course/understanding-typescript/",
    length: "7.5 timmar video",
    description: "",
    teacher: "Maximilian Schwarzmüller",
    teacherLink:
      "https://www.udemy.com/course/understanding-typescript/#instructor-1",
    completion: "100",
    grade: ""
  },
  {
    id: 31,
    place: "udemy",
    course: "Unity Game Development Build 2D & 3D Games",
    courseLink: "https://www.udemy.com/devslopes-unity3d/",
    length: "35 timmar video",
    description:
      "En kurs i Unity, man lär sig att göra 2d och 3d spel i programmet Unity, språket som binder ihop alltihop är C#.",
    teacher: "Mark Price",
    teacherLink: "https://www.udemy.com/user/mark-price-2/",
    completion: "35",
    grade: ""
  },
  {
    id: 32,
    place: "udemy",
    course: "Entity Framework in Depth: The Complete Guide",
    courseLink: "https://www.udemy.com/entity-framework-tutorial/",
    length: "6.5 timmar video",
    description: "En kurs där man går lite mer på djupet på Entity Framework.",
    teacher: "Mosh Hamedani",
    teacherLink: "https://www.udemy.com/user/moshfeghhamedani/",
    completion: "30",
    grade: ""
  },
  {
    id: 33,
    place: "udemy",
    course: "React - The Complete Guide",
    courseLink: "https://www.udemy.com/react-the-complete-guide-incl-redux/",
    length: "40.5 timmar video",
    description: "En kurs i react, inklusive Hooks, React Router, Redux",
    teacher: "Maximilian Schwarzmüller",
    teacherLink: "https://www.udemy.com/user/academind/",
    completion: "28",
    grade: ""
  },
  {
    id: 34,
    place: "udemy",
    course: "Complete Blender Creator",
    courseLink: "https://www.udemy.com/blendertutorial/",
    length: "62.5 timmar video",
    description:
      "En kurs i Blender, ett gratis men otroligt kraftfullt 3D program",
    teacher: "Ben Tristem",
    teacherLink: "https://www.udemy.com/blendertutorial/#instructor-1",
    completion: "6",
    grade: ""
  },
  {
    id: 35,
    place: "udemy",
    course: "Learn Pyhton Programming, Masterclass",
    courseLink:
      "https://www.udemy.com/python-the-complete-python-developer-course/",
    length: "42 timmar video",
    description: "En kurs i Pyhton, från nybörjare till avancerad nivå",
    teacher: "Ben Tristem",
    teacherLink:
      "https://www.udemy.com/python-the-complete-python-developer-course/#instructor-1",
    completion: "15",
    grade: ""
  },
  {
    id: 36,
    place: "udemy",
    course: "DesignPatterns in C# and .NET",
    courseLink: "https://www.udemy.com/design-patterns-csharp-dotnet/",
    length: "13 timmar video",
    description:
      "En kurs om Design Patterns, där de tar upp hur man bör göra vissa funktioner osv",
    teacher: "Dmitri Nesteruk",
    teacherLink:
      "https://www.udemy.com/design-patterns-csharp-dotnet/#instructor-1",
    completion: "18",
    grade: ""
  },
  {
    id: 37,
    place: "udemy",
    course: "Unit Testing for C# Developers",
    courseLink: "https://www.udemy.com/unit-testing-csharp/",
    length: "6 timmar video",
    description: "En kurs hur man testar sin kod automatiskt via bla NUnit m.m",
    teacher: "Mosh Hamedani",
    teacherLink: "https://www.udemy.com/unit-testing-csharp/#instructor-1",
    completion: "33",
    grade: ""
  },
  {
    id: 38,
    place: "udemy",
    course: "Typescript: The Complete Developer's Guide [2020]",
    courseLink:
      "https://www.udemy.com/course/typescript-the-complete-developers-guide/",
    length: "25 timmar video",
    description: "Typescript",
    teacher: "Stephen Grider",
    teacherLink:
      "https://www.udemy.com/course/typescript-the-complete-developers-guide/#instructor-1",
    completion: "15",
    grade: ""
  },
  {
    id: 39,
    place: "udemy",
    course: "C# Automapper: Code Smart",
    courseLink: "https://www.udemy.com/course/c-automapper-code-smart/",
    length: "1 timmar video",
    description: "Automapper i C# projekt",
    teacher: "Stephen Grider",
    teacherLink:
      "https://www.udemy.com/course/c-automapper-code-smart/#instructor-1",
    completion: "100",
    grade: ""
  },
  {
    id: 40,
    place: "udemy",
    course: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
    courseLink:
      "https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/",
    length: "18.5 timmar video",
    description: "MERN Backend till Frontend i JS",
    teacher: "Stephen Grider",
    teacherLink:
      "https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/#instructor-1",
    completion: "71",
    grade: ""
  },
  {
    id: 41,
    place: "udemy",
    course: "JavaScript - The Complete Guide 2020 (Beginner + Advanced)",
    courseLink:
      "https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/",
    length: "52 timmar video",
    description: "En stor och ingående Javascriptkurs",
    teacher: "Maximilian Schwarzmuller",
    teacherLink:
      "https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/#instructor-1",
    completion: "23",
    grade: ""
  },
  {
    id: 42,
    place: "udemy",
    course: "NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)",
    courseLink: "https://www.udemy.com/course/nodejs-the-complete-guide/",
    length: "36 timmar video",
    description: "Automapper i C# projekt",
    teacher: "Maximilian Schwarzmuller",
    teacherLink:
      "https://www.udemy.com/course/nodejs-the-complete-guide/#instructor-1",
    completion: "17",
    grade: ""
  },
  {
    id: 43,
    place: "udemy",
    course: "Xamarin Forms: Build Native Cross-platform Apps with C#",
    courseLink: "https://www.udemy.com/course/xamarin-forms-course/",
    length: "7.5 timmar video",
    description: "Hur man bygger Mobila applikationer i Xamarin",
    teacher: "Mosh Hamedani",
    teacherLink:
      "https://www.udemy.com/course/xamarin-forms-course/#instructor-1",
    completion: "68",
    grade: ""
  },
  {
    id: 44,
    place: "udemy",
    course: "C# Developers: Double Your Coding Speed with Visual Studio",
    courseLink: "https://www.udemy.com/course/visual-studio-tips-tricks/",
    length: "1.5 timmar video",
    description:
      "Lite om hur man kan effektivisera sitt arbete i Visual Studio",
    teacher: "Mosh Hamedani",
    teacherLink:
      "https://www.udemy.com/course/visual-studio-tips-tricks/#instructor-1",
    completion: "100",
    grade: ""
  },
  {
    id: 45,
    place: "udemy",
    course: "AZ-300 Azure Architecture Technologies Exam Prep 2020",
    courseLink: "https://www.udemy.com/course/70534-azure/",
    length: "12.5 timmar video",
    description:
      "Azure, kurs för att klara AZ-300 certifiering, kanske inga planer för att göra provet, men känner att kunskap om Azure kan vara bra att ha i bakhuvudet, och för att få bättre förståelse för vilka möjligheter man har med Azure, och för den delen andra stora molntjänster.",
    teacher: "Scott Duffy",
    teacherLink: "https://www.udemy.com/course/70534-azure/#instructor-1",
    completion: "18",
    grade: ""
  }
];

let employment = [
  {
    company: "Skogs Tryckeri, JMS",
    jobtitle: "Tryckeribiträde",
    start: "1999-06-01",
    end: "2008-03-01",
    description:
      "Vad man kan ha med sig från denna arbetsplats som är till nytta inom just programmering?  Nu var det väldigt längesedan jag jobbade på JMS, men några saker man fick lära sig som jag tagit med mig är vikten av noggrannhet och att hårt slit lönar sig för att få ett bra resultat."
  },
  {
    company: "Falck, G4S, Avarn",
    jobtitle: "Väktare",
    start: "2008-05-01",
    end: "2018-08-01",
    description:
      "Vad man kan ha med sig från denna arbetsplats som är till nytta inom just programmering? Lojalitet både till arbetsgivare och till kunder, alltid tänka på sekretessen, allt är inte alltid lämpligt att prata om. Man blir även varse om hur viktigt ens team är, att man genom att stötta och hjälper varandra kan nå väldigt långt och få bra produktivitet."
  }
];
