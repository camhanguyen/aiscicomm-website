import { useEffect, useState } from "react";
// Import curriculum components
import guidePdf from "./curriculum/AISciComm_Unit Guide.pdf";
import journalPdf from "./curriculum/AISciComm_Science Journal.pdf";

const images = import.meta.glob('./picture/*', {
  eager: true,
  import: "default",
}) as Record<string, string>

const files = import.meta.glob("./curriculum/*.{pdf,pptx}", {
  eager: true,
  query: "?url",
  import: "default",
});

console.log(files);

const getLessonFiles = (
  num: string,
  studentInstruction?: string,
  introSlides?: string,
): {
  pdf?: string;
  slides?: string;
  studentInstruction?: string;
  introSlides?: string;
} => ({
  pdf: files[`./curriculum/lesson_${num}.pdf`],
  slides: files[`./curriculum/lesson_${num}.pptx`],
  studentInstruction,
  introSlides,
});

type Page = "home" | "publications" | "resources" | "team";

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Resources", page: "resources" },
  { label: "Publications", page: "publications" },
  { label: "Our Team", page: "team" },
];

const PIS = [
  {
    name: "Rossella Santagata",
    title: "Principal Investigator, Professor",
    dept: "School of Education, University of California-Irvine",
    bio: "Dr. Santagata is an educational researcher, studying math and science teaching and learning. She is a leading scholar in the use of video technologies to examine learning interactions and to foster teacher professional competence. ",
    img: images['./picture/santagata.jpeg'],
    website: "https://faculty.sites.uci.edu/santagata/"
  },
  {
    name: "Ha Nguyen",
    title: "Co-Principal Investigator, Assistant Professor",
    dept: "School of Education, University of North Carolina Chapel Hill",
    bio: "Dr. Nguyen designs learning technologies and studies their impact on promoting deeper STEM knowledge and competencies. She applies learning analytics to investigate how people construct knowledge in collaboration with others and with technologies.",
    img: images['./picture/nguyen-ha.png'],
    website: "https://www.ha-nguyen.net"
  },
  {
    name: "Sara Ludovise",
    title: "Co-Principal Investigator, Administrator",
    dept: "Inside the Outdoors, Orange County Department of Education",
    bio: "Ludovise is a nonformal educator, with ten years of experience in curriculum design and facilitation. She leads Inside the Outdoors, a unique and hands-on environmental education program serving over 110,000 participants per school year.",
    img: images['./picture/ludovise.jpg'],
    website: "https://ito.ocde.us/"
  },
];

const RESEARCH_ASSISTANTS = [
  {
    name: "Kayla Ueshiro",
    role: "PhD Student, Education, University of California-Irvine",
    research: "Emergent bilingual education, pedagogical practices",
    img: images['./picture/ueshiro.jpeg'],
  },
  {
    name: "Victoria Nguyen",
    role: "PhD Student, Education, University of California-Irvine",
    research: "Environmental education",
    img: images['./picture/nguyen-victoria.jpg'],
  },
   {
    name: "Erick Valdez",
    role: "Educational Support Manager, Inside the Outdoors, OCDE",
    research: "Nonformal education",
    img: images['./picture/valdez.jpeg'],
  },
  {
    name: "Tilly Duong",
    role: "Lead Field Naturalist, Inside the Outdoors, OCDE",
    research: "Nonformal education, ecology",
    img: images['./picture/duong.jpeg'],
  },
];

const UNDERGRAD_RESEARCHERS = [
  { name: "Jennifer Pei" },
  { name: "Yenvy Pham" },
  { name: "Ashley Hernandez" },
  { name: "Hunter King" },
  { name: "Vy Nguyen" }
]

const PUBLICATIONS = [
  {
    year: "2026",
    authors: "Nguyen, H., Valdez, E., Pei, J., Ludovise, S., & Santagata, R.",
    title: "Supporting systems thinking in environmental science education with Large Language Model chatbots",
    venue: "International Journal of Science Education, 1-24.",
    doi: "https://doi.org/10.1080/09500693.2026.2695951",
    tag: "Article",
  },
  {
    year: "2026",
    authors: "Park, S., & Nguyen, H.",
    title: "Simulating students’ thinking with Large Language Models: Informing iterative design in science education",
    venue: "International Conference on Artificial Intelligence in Education (pp. 137-144). Cham: Springer Nature Switzerland",
    doi: "https://doi.org/10.1007/978-3-032-29788-4_20",
    tag: "Conference Proceeding",
  },
  {
    year: "2025",
    authors: "Nguyen, H., Nguyen, V., Ludovise, S., & Santagata, R.",
    title: "Misrepresentation or inclusion: Promises of generative artificial intelligence in climate education.",
    venue: "Learning, Media and Technology, 50(3), 393-409",
    doi: "https://doi.org/10.1080/17439884.2024.2435834",
    tag: "Article",
  },
  {
    year: "2025",
    authors: "Nguyen, H., Nguyen, V., Ludovise, S., & Santagata, R.",
    title: "Value-sensitive design of chatbots in environmental education: Supporting identity, connectedness, wellbeing, and sustainability",
    venue: "British Journal of Educational Technology, 56(4), 1370-1390.",
    doi: "http://doi.org/10.1111/bjet.13568",
    tag: "Article",
  },
  {
    year: "2025",
    authors: "Anderson, E., Lin, G. C., Farid, A., Fenech, M., Hanks, B., Klopfer, E., Doherty, E., Hirshfield, L., Ko, M. M., Foltz, P., Nguyen, H., Nguyen, V., Ludovise, S., Santagata, R., Cao, L., Scardamalia, M., Soliman, D., Resendes, M., Khanlari, A., Costa, S., Chan, C. K., & Nguyen, A.",
    title: "Exploring GenAI technologies within collaborative learning",
    venue: "Proceedings of the 18th International Conference on Computer-Supported Collaborative Learning - CSCL 2025 (pp. 499-506). International Society of the Learning Sciences.",
    doi: "https://doi.org/10.22318/cscl2025.991659",
    tag: "Conference Proceeding",
  },
  {
    year: "2024",
    authors: "Nguyen, H., Nguyen, V., Lopez-Fierro, S., Ludovise, S., & Santagata, R.",
    title: "Simulating climate change discussion with large language models: Considerations for science communication at scale",
    venue: "Proceedings of the Eleventh ACM Conference on Learning@ Scale (pp. 28-38).",
    doi: "https://doi.org/10.1145/3657604.3662033",
    tag: "Conference Proceeding",
  },
  {
    year: "2024",
    authors: "Nguyen, V., Nguyen, H., Ludovise, S., & Santagata, R.",
    title: "AI for climate justice: Assessing Large Language Models from an intersectional lens",
    venue: "Proceedings of the 18th International Conference of the Learning Sciences - ICLS 2024 (pp. 1055-1058). International Society of the Learning Sciences.",
    doi: "https://doi.org/10.22318/icls2024.120847",
    tag: "Conference Proceeding",
  },
];

const PRESENTATIONS = [
    {year: "2026",
    authors: "Nguyen, H., Valdez, E., Pei, J., Ludovise, S., & Santagata, R.",
    title: "Designing chatbots to promote systems thinking in climate change education",
    venue: "2026 AERA Annual Meeting, Los Angeles, CA, United States",
    },
    {year: "2026",
    authors: "Nguyen, H., Pei, J., Pham, Y., Ludovise, S., & Santagata, R.",
    title: "Facilitating participatory design: A framework to analyze talk moves and roles",
    venue: "2026 AERA Annual Meeting, Los Angeles, CA, United States",
    },
    {year: "2025",
    authors: "Nguyen, H., Nguyen, V., Ludovise, S., & Santagata, R.",
    title: "Tension negotiation and resolution in the co-design of conversational agents for climate justice education",
    venue: "2025 AERA Annual Meeting, Denver, CO, United States",
    },
    {year: "2025",
    authors: "Nguyen, H., Nguyen, V., Ludovise, S., & Santagata, R.",
    title: "Grounding chatbot development in human values: A value-sensitive design approach",
    venue: "2025 AERA Annual Meeting, Denver, CO, United States",
    },
    {year: "2025",
    authors: "Hernandez, A., Pei, J., Nguyen, H., Ludovise, S., & Santagata, R.",
    title: "Designing chatbots for place-based environmental education",
    venue: "The 19th International Conference of the Learning Sciences - ICLS 2025",
    },
];

const LESSONS = [
  {
    unit: "Module 1",
    title: "How is our Ocean Changing?",
    lessons: [
      { num: "1.1", name: "How is our Ocean Changing?", duration: "2 sessions of 50 min", ...getLessonFiles("1.1"), },
      { num: "1.2", name: "Planning Community Interviews", duration: "50 min", ...getLessonFiles("1.2"), },
      { num: "1.3", name: "Analyzing Interview Data", duration: "50 min", ...getLessonFiles("1.3"), },
    ],
  },
  {
    unit: "Module 2",
    title: "Building a Model",
    lessons: [
      {
        num: "2.1", name: "Building our Model", duration: "2 sessions of 50 min", ...getLessonFiles("2.1"),
        studentInstruction: files["./curriculum/lesson_2.1_student-instruction.pdf"]
      },
      { num: "2.2", name: "Refining our Model with AI", duration: "50 min", ...getLessonFiles("2.2"), },
    ],
  },
  {
    unit: "Module 3",
    title: "Refining our Model",
    subtext: "Module 3.3 and 3.4 share the same introductory slides. Students can select their own path to explore either sea level rise/coastal erosion (Module 3.3) or ocean acidification (Module 3.4).",
    lessons: [
      { num: "3.1", name: "The Carbon Cycle", duration: "50 min", ...getLessonFiles("3.1") },
      {
        num: "3.2", name: "Carbon Dioxide and Weather", duration: "2 sessions of 50 min", ...getLessonFiles("3.2"),
        studentInstruction: files["./curriculum/lesson_3.2_student-instruction.pdf"]
      },
      {
        num: "3.3", name: "Carbon Dioxide and Sea Level Rise/Coastal Erosion", duration: "2 sessions of 50 min",
        ...getLessonFiles("3.3"),
        studentInstruction: files["./curriculum/lesson_3.3_student-instruction.pdf"],
        introSlides: files["./curriculum/lesson_3.0.pptx"],
      },
      {
        num: "3.4", name: "Ocean Acidification", duration: "2 sessions of 50 min", ...getLessonFiles("3.4"),
        studentInstruction: files["./curriculum/lesson_3.4_student-instruction.pdf"],
        introSlides: files["./curriculum/lesson_3.0.pptx"],
      },
      { num: "3.5", name: "Update our Model", duration: "50 min", ...getLessonFiles("3.5"), },
    ],
  },
  {
    unit: "Module 4",
    title: "Designing a Solution",
    subtext: "Teacher Rubric and Student Checklist for developing science communication products - referenced throughout Module 4.",
    rubric: files["./curriculum/module_4_rubric_teacher.pdf"],
    checklist: files["./curriculum/module_4_rubric_student.pdf"],
    lessons: [
      { num: "4.1", name: "Identifying Solutions", duration: "50 min", ...getLessonFiles("4.1") },
      { num: "4.2", name: "Choose our Audience and Plan our Approach", duration: "50 min", ...getLessonFiles("4.2") },
      { num: "4.3", name: "Build a Chatbot to Test our Message", duration: "50 min", ...getLessonFiles("4.3") },
      { num: "4.4", name: "Put our Plan into Action", duration: "2 sessions of 50 min", ...getLessonFiles("4.4") },
    ],
  },
];

console.log("INTRO:", files["./curriculum/lesson_3.0.pptx"]);

const SLIDES = [
  {
    label: "Systems Thinking",
    subtitle: "Understanding systems components and interconnectedness",
    body: "Students explore how climate change impacts their local ocean ecosystem. They examine causal relationships, such as how rising temperatures affect marine organisms and coastal erosion.",
    bg: "bg-white",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <svg viewBox="0 0 320 200" className="w-full max-w-sm" fill="none">
          {/* Causal chain nodes */}
          <rect
            x="8" y="62" width="62" height="42" rx="7"
            fill="#f8f8f6" stroke="#1a4fa0" strokeWidth="1.5"
          />
          <rect
            x="88" y="62" width="62" height="42" rx="7"
            fill="#f8f8f6" stroke="#1a4fa0" strokeWidth="1.5"
          />
          <rect
            x="168" y="62" width="62" height="42" rx="7"
            fill="#f8f8f6" stroke="#1a4fa0" strokeWidth="1.5"
          />
          <rect
            x="248" y="62" width="62" height="42" rx="7"
            fill="#f8f8f6" stroke="#1a4fa0" strokeWidth="1.5"
          />

          {/* Causal arrows */}
          <line
            x1="70" y1="83" x2="88" y2="83"
            stroke="#1a4fa0" strokeWidth="1.5"
          />
          <polygon points="88,83 82,79 82,87" fill="#1a4fa0" />

          <line
            x1="150" y1="83" x2="168" y2="83"
            stroke="#1a4fa0" strokeWidth="1.5"
          />
          <polygon points="168,83 162,79 162,87" fill="#1a4fa0" />

          <line
            x1="230" y1="83" x2="248" y2="83"
            stroke="#1a4fa0" strokeWidth="1.5"
          />
          <polygon points="248,83 242,79 242,87" fill="#1a4fa0" />

          {/* Node labels */}
          <text
            x="39" y="79"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
            fontWeight="600"
          >
            Warmer
          </text>
          <text
            x="39" y="91"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
          >
            ocean
          </text>

          <text
            x="119" y="79"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
            fontWeight="600"
          >
            Coral
          </text>
          <text
            x="119" y="91"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
          >
            stress
          </text>

          <text
            x="199" y="79"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
            fontWeight="600"
          >
            Habitat
          </text>
          <text
            x="199" y="91"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
          >
            loss
          </text>

          <text
            x="279" y="79"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
            fontWeight="600"
          >
            Fewer
          </text>
          <text
            x="279" y="91"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
          >
            fish
          </text>

          {/* Feedback loop */}
          <path
            d="M279 105
           C279 155, 199 178, 119 158
           C75 147, 55 126, 55 105"
            stroke="#1a4fa0"
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />

          <polygon
            points="55,105 51,112 59,110"
            fill="#1a4fa0"
          />


          <text
            x="175"
            y="143"
            textAnchor="middle"
            fontSize="7"
            fill="#1a4fa0"
          >
            ecosystem resilience
          </text>

          <text
            x="175"
            y="153"
            textAnchor="middle"
            fontSize="7"
            fill="#1a4fa0"
          >
            declines
          </text>
        </svg>
      </div>
    ),
  },
  {
    label: "Science Communication",
    subtitle: "Making science accessible and relevant across communities",
    body: "Students learn to communicate scientific ideas, in ways that are responsive to the experience of their target audience.",
    bg: "bg-[#e8eef8]",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <svg viewBox="0 0 300 210" className="w-full max-w-sm" fill="none">
          {/* Connecting triangle */}
          <path
            d="M150 28 L65 158 L235 158 Z"
            stroke="#1a4fa0"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />

          {/* Center */}
          <circle
            cx="150"
            cy="108"
            r="38"
            fill="#e8eef8"
            stroke="#1a4fa0"
            strokeWidth="1.5"
          />

          <text
            x="150"
            y="95"
            textAnchor="middle"
            fontSize="9"
            fill="#1a4fa0"
            fontWeight="600"
          >
            Inclusive
          </text>
          <text
            x="150"
            y="108"
            textAnchor="middle"
            fontSize="9"
            fill="#1a4fa0"
            fontWeight="600"
          >
            science
          </text>
          <text
            x="150"
            y="120"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
            fontWeight="600"
          >
            communication
          </text>

          {/* Intentionality */}
          <circle
            cx="150"
            cy="30"
            r="27"
            fill="white"
            stroke="#1a4fa0"
            strokeWidth="1.5"
          />

          <text
            x="150"
            y="30"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
            fontWeight="600"
          >
            Intentionality
          </text>

          {/* Reciprocity */}
          <circle
            cx="58"
            cy="165"
            r="27"
            fill="white"
            stroke="#1a4fa0"
            strokeWidth="1.5"
          />

          <text
            x="58"
            y="166"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
            fontWeight="600"
          >
            Reciprocity
          </text>

          {/* Reflexivity */}
          <circle
            cx="242"
            cy="165"
            r="27"
            fill="white"
            stroke="#1a4fa0"
            strokeWidth="1.5"
          />

          <text
            x="242"
            y="166"
            textAnchor="middle"
            fontSize="8"
            fill="#1a4fa0"
            fontWeight="600"
          >
            Reflexivity
          </text>

        </svg>
      </div>
    ),
  },
  {
    label: "AI Integration",
    subtitle: "Integrating artificial intelligence in environmental education",
    body: "Students interact with and create generative AI chatbots — embodying different community perspectives — to acquire feedback and improve their systems models and science communication products.",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-4 scale-85">
  <div className="w-full max-w-xs bg-[#fcfefd] rounded-xl border border-[#c9dedb] shadow-sm overflow-hidden">
    <div className="bg-[#1a4fa0] px-4 py-2.5 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[#f4c542]" />
      <span className="text-white text-xs font-medium">Kelp Researcher Chatbot</span>
    </div>

    <div className="p-3 space-y-2">
      <div className="flex justify-end">
        <div className="bg-gray-50 border border-gray-100 text-gray-700 text-xs rounded-lg rounded-tr-sm px-3 py-2 max-w-[80%]">
          What feedback do you have for my model?
        </div>
      </div>

      <div className="flex justify-start">
        <div className="bg-[#e8eef8] text-[#1a4fa0] text-xs rounded-lg rounded-tl-sm px-3 py-2 max-w-[85%] leading-relaxed">
          Think about adding a component that focuses on urban areas, like how increased temperatures might affect energy use in cities like Los Angeles. <b>How do you see temperature changes influencing community activities or behaviors in your town?</b>
        </div>
      </div>
            <div className="flex justify-end">
              <div className="bg-gray-50 border border-gray-100 text-gray-700 text-xs rounded-lg rounded-tr-sm px-3 py-2 max-w-[80%]">
                It's been getting hotter!!
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-400">
                Type a message…
              </div>
              <div className="w-4 h-4 bg-[#1a4fa0] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="white">
                  <path d="M1 5h8M5 1l4 4-4 4" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function NavBar({ current, navigate }: { current: Page; navigate: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => navigate("home")} className="flex items-center gap-3">
          <div className="w-36 h-36 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" width="100%" height="100%">
              <rect width="100%" height="100%" fill="#FFFFFF" />
              <g transform="translate(40, 0)">
                <text x="0" y="130" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="140" font-weight="800" letter-spacing="-1">
                  <tspan fill="#1D70B8">A</tspan>
                  <tspan fill="#1D70B8">I</tspan>
                  <tspan fill="#1D70B8">S</tspan>
                  <tspan fill="#0F2537">ci</tspan>
                  <tspan fill="#1D70B8">C</tspan>
                  <tspan fill="#0F2537">omm</tspan>
                </text>
                <text x="5" y="182" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="43" font-weight="500" fill="#0F2537" letter-spacing="0.2">
                  AI for Inclusive Science Communication
                </text>
              </g>
            </svg>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.page}
              onClick={() => navigate(l.page)}
              className={`px-4 py-2 text-sm rounded transition-colors ${current === l.page
                  ? "bg-[#e8eef8] text-[#1a4fa0] font-medium"
                  : "text-gray-600 hover:text-[#1a4fa0] hover:bg-gray-50"
                }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            ) : (
              <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.page}
              onClick={() => { navigate(l.page); setOpen(false); }}
              className={`text-left px-3 py-2 text-sm rounded ${current === l.page
                  ? "bg-[#e8eef8] text-[#1a4fa0] font-medium"
                  : "text-gray-600"
                }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setSlide((current) => (current + 1) % SLIDES.length);
  }, 7000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Slideshow hero */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-0">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 items-center pb-12 min-h-[340px]">
            <div>
              <p className="text-[#1a4fa0] text-xs font-medium tracking-widest uppercase mb-3">
                AISciComm: An AI-Integrated Environmental Science Curriculum for High School
              </p>

              {/* Project Overview */}
              <div className="max-w-3xl mb-10">
                <p className="text-gray-600 text-sm leading-relaxed">
                  This project engages high school students from Southern California schools in an AI-guided science curriculum 
                  for learning and practicing inclusive science communication and marine biodiversity. 
                  Students interact with chatbots that represent different community perspectives around the local marine ecosystems.
                  The project invites students, formal and nonformal educators, and marine scientists to co-design the conversational agents’ interface and exchange. 
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  <b>Research Questions</b>: (1) How can the co-design and implementation of conversational agents with informal educators, community partners, and students be facilitated in equitable, collaborative ways?, 
                  (2) How does the AI-integrated curriculum support inclusive science communication about environmental systems, interest in STEM careers, and AI literacy?, and 
                  (3) What instructional adaptations do teachers make to facilitate these learning outcomes?
                </p>
              </div>

              {/* Dot navigation */}
              <div className="flex items-center gap-3 pb-8">
                {SLIDES.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`transition-all rounded-full ${
                      slide === i 
                      ? "w-10 h-3 bg-[#1a4fa0]" 
                      : "w-3 h-3 bg-gray-200 hover:bg-gray-400"
                      }`}
                    aria-label={s.label}
                    aria-current={slide === i ? "true" : "false"}
                  />
                ))}
                <span className="text-xs text-gray-400 ml-2">{SLIDES[slide].label}</span>
              </div>

              <h1
                className="text-2xl md:text-2xl leading-tight text-gray-900 mb-4"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                {SLIDES[slide].label}
              </h1>
              <p className="text-gray-500 text-base italic mb-4 text-med">{SLIDES[slide].subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-lg text-sm">
                {SLIDES[slide].body}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("resources")}
                  className="px-6 py-3 bg-[#1a4fa0] text-white text-sm font-medium rounded hover:bg-[#163d82] transition-colors"
                >
                  Explore Resources
                </button>
                <button
                  onClick={() => navigate("publications")}
                  className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-[#1a4fa0] hover:text-[#1a4fa0] transition-colors"
                >
                  View Publications
                </button>
                <button
                  onClick={() => navigate("team")}
                  className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-[#1a4fa0] hover:text-[#1a4fa0] transition-colors"
                >
                  Our Team
                </button>
              </div>
            </div>

            <div
              className={`hidden md:flex rounded-xl overflow-hidden ${SLIDES[slide].bg} mt-40`}
              style={{ height: 300 }}
            >
              <div className="w-full h-full">
                {SLIDES[slide].visual}
              </div>
            </div>

          </div>

        </div>
      </section>
                  {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span style={{ fontFamily: "DM Serif Display, serif" }} className="text-gray-700">
            AISciComm
          </span>
          <span>This work has been supported by the National Science Foundation under Grant <a href="https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2241596&HistoricalAwards=false" target="_blank"><u>#2241596</u></a> and the Spencer Foundation. Any opinions, findings, and conclusions expressed in these materials are those of the authors and do not necessarily reflect the views of the Foundations. </span>
          <span>©2026</span>
        </div>
      </footer>
    </div>
  );
}

{/* Team section */}
function TeamPage() {
  return(
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-20">
    {/* Principal Investigators */}
        <section className="mb-12">
        {/*  <p className="text-[#1a4fa0] text-xs font-medium tracking-widest uppercase mb-2">Our Team</p> */}
          <h1
          className="text-4xl text-gray-900 mb-4"
          style={{ fontFamily: "DM Serif Display, serif" }}
        >
          Our Team
        </h1>
          <h2
            className="text-2xl text-gray-900 mb-10"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Principal Investigators
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PIS.map((pi) => (
              <div key={pi.name} className="group">
                <div className="overflow-hidden rounded-xl bg-[#e8eef8] mb-5 aspect-square" style={{ height: 180 }}>
                  <a href={pi.website} target="_blank" rel="noopener noreferrer">
                    <img src={pi.img} alt={pi.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </div>
                <h3
                  className="text-xl text-gray-900 mb-0.5"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  {pi.name}
                </h3>
                <p className="text-[#1a4fa0] text-xs font-medium mb-1">{pi.title}</p>
                <p className="text-gray-400 text-xs mb-3">{pi.dept}</p>
                {/* <p className="text-gray-600 text-sm leading-relaxed mb-3">{pi.bio}</p> */}
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 mb-12" />

        {/* Research Assistants */}
        <section className="mb-12">
          <h2
            className="text-2xl text-gray-900 mb-8"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Research & Curriculum Development
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {RESEARCH_ASSISTANTS.map((ra) => (
              <div key={ra.name} className="group">
                <div
                  className="overflow-hidden rounded-xl bg-[#e8eef8] mb-5 aspect-square"
                  style={{ height: 180 }}
                >
                  <img
                    src={ra.img}
                    alt={ra.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3
                  className="text-xl text-gray-900"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  {ra.name}
                </h3>

                <p className="text-[#1a4fa0] text-xs font-medium mt-0.5 mb-1">
                  {ra.role}
                </p>

                <p className="text-gray-500 text-xs leading-snug">
                  {ra.research}
                </p>
              </div>
            ))}
          </div>
          </section>

        <div className="border-t border-gray-100 mt-12 mb-12" />

          {/* Undergraduate Researchers */}
        <section className="grid md:grid-cols-3 gap-12">
          <div>
            <h2
              className="text-2xl text-gray-900 mb-8"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Undergraduate Researchers
            </h2>

            <div className="space-y-3">
              {UNDERGRAD_RESEARCHERS.map((student) => (
                <div
                  key={student.name}
                >
                  <p className="text-gray-900 text-s font-medium mt-0.5 mb-1"
                    style={{ fontFamily: "DM Serif Display, serif" }}>
                    {student.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* District Partners */}
          <div>
            <h2
              className="text-2xl text-gray-900 mb-6"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Education Partners
            </h2>

            <div className="flex items-center gap-12">
              <div className="overflow-hidden rounded-xl bg-[#e8eef8] w-[120px]">
                <img
                  src={images['./picture/lynwood.png']}
                  alt="Lynwood Unified School District"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-xl bg-[#e8eef8] w-[80px]">
                <img
                  src={images['./picture/ocde.png']}
                  alt="Orange County Department of Education"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            </div>
          </section>
        </main>

          {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span style={{ fontFamily: "DM Serif Display, serif" }} className="text-gray-700">
            AISciComm
          </span>
          <span>This work has been supported by the National Science Foundation under Grant <a href="https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2241596&HistoricalAwards=false" target="_blank"><u>#2241596</u></a> and the Spencer Foundation. Any opinions, findings, and conclusions expressed in these materials are those of the authors and do not necessarily reflect the views of the Foundations. </span>
          <span>©2026</span>
        </div>
      </footer>
    </div>
  );
}


 


function PublicationsPage() {
  const [filter, setFilter] = useState<"All" | "Peer-Reviewed" | "Conference">("All");
  const filtered = filter === "All" ? PUBLICATIONS : PUBLICATIONS.filter((p) => p.tag === filter);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <p className="text-[#1a4fa0] text-xs font-medium tracking-widest uppercase mb-3">
          Scholarship
        </p>
        <h1
          className="text-4xl text-gray-900 mb-4"
          style={{ fontFamily: "DM Serif Display, serif" }}
        >
          Publications
        </h1>
        <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
        </p>

        <div className="flex gap-2 mb-12">
          {(["All", "Article", "Conference Proceeding"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-xs rounded-full border transition-colors ${filter === f
                  ? "bg-[#1a4fa0] text-white border-[#1a4fa0]"
                  : "border-gray-200 text-gray-600 hover:border-[#1a4fa0] hover:text-[#1a4fa0]"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((pub, i) => (
            <div
              key={i}
              className="grid grid-cols-[64px_1fr] gap-6 p-6 border border-gray-100 rounded-xl hover:border-[#1a4fa0] hover:shadow-sm transition-all"
            >
              <div className="text-center">
                <span
                  className="text-2xl text-[#1a4fa0]"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  {pub.year}
                </span>
              </div>
              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-gray-900 font-medium leading-snug">{pub.title}</h3>
                  <span
                    className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${pub.tag === "Journal Articles"
                        ? "bg-[#e8eef8] text-[#1a4fa0]"
                        : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {pub.tag}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-1">{pub.authors}</p>
                <p className="text-gray-400 text-xs italic mb-2">{pub.venue}</p>
                <a href={pub.doi} className="text-xs text-[#1a4fa0] hover:underline font-medium">
                  View PDF / DOI →
                </a>
              </div>
            </div>
          ))}
        </div>

        <h1
          className="text-5xl text-gray-900 mb-4 mt-12"
          style={{ fontFamily: "DM Serif Display, serif" }}
        >
          Presentations
        </h1>

        <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
</p>

        <div className="space-y-4">
          {PRESENTATIONS.map((presentation, i) => (
            <div
              key={i}
              className="grid grid-cols-[64px_1fr] gap-6 p-6 border border-gray-100 rounded-xl hover:border-[#1a4fa0] hover:shadow-sm transition-all"
            >
              <div className="text-center">
                <span
                  className="text-2xl text-[#1a4fa0]"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  {presentation.year}
                </span>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-gray-900 font-medium leading-snug">
                    {presentation.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm mb-1">
                  {presentation.authors}
                </p>

                <p className="text-gray-400 text-xs italic">
                  {presentation.venue}
                </p>
              </div>
            </div>
          ))}
        </div>


        <footer className="border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <span style={{ fontFamily: "DM Serif Display, serif" }} className="text-gray-700">
              AISciComm
            </span>
            <span>This work has been supported by the National Science Foundation under Grant <a href="https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2241596&HistoricalAwards=false" target="_blank"><u>#2241596</u></a> and the Spencer Foundation. Any opinions, findings, and conclusions expressed in these materials are those of the authors and do not necessarily reflect the views of the Foundations. </span>
            <span>©2026</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ResourcesPage() {
  const [openUnit, setOpenUnit] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">

        {/* Curriculum Header */}

          {/* Left: Overview */}
          <div>
            <p className="text-[#1a4fa0] text-xs font-medium tracking-widest uppercase mb-3">
              For Educators
            </p>

            <h1
              className="text-4xl text-gray-900 mb-4"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Curriculum Resources
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
            <p className="text-gray-500 max-w-xl mb-8 leading-relaxed">
              This curriculum is intended for high school environmental science
              (grades 9–12) and has been implemented in AP Environmental Science
              and geology classes. Students explore how climate change is
              affecting Southern California's ocean through conducting
              interviews, constructing and refining models, and designing science
              communication solutions. Students consider how different tools,
              including simulation and generative AI, can help them investigate
              scientific questions. </p>


            <div className="mt-3 items-center gap-1 text-xs text-gray-400">
              <a href="https://aiscicomm.com">AISciComm Curriculum</a> © 2026 by{" "}
              <a>Erick Valdez, Ha Nguyen, Kayla Ueshiro, Victoria Nguyen, Yenvy Pham, Tilly Duong, Sara Ludovise, & Rossella Santagata</a>{" "}
            is licensed under <span className="inline-flex items-center gap-1 whitespace-nowrap">
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
                  <img
                    src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
                    alt="CC"
                    className="w-4 h-4 ml-1"
                  />
                  <img
                    src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
                    alt="BY"
                    className="w-4 h-4"
                  />
                  <img
                    src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
                    alt="NC"
                    className="w-4 h-4"
                  />
                  <img
                    src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
                    alt="SA"
                    className="w-4 h-4"
                  />
                  </span>
            </div>
          </div>
            

             {/* Right: Illustration */}
          <div className="hidden md:block">
            <div className="overflow-hidden rounded-med bg-[#e8eef8]">
              <img
                src={images['./picture/chatbot_screenshot.png']}
                alt="Students exploring environmental science and climate change"
                className="w-full h-[250px] object-cover"
              />
            </div>

            <p className="text-xs text-gray-400 mt-3 text-center">
              Students explore the impact of climate change through refining their models with chatbots. 
            </p>
          </div>
        </div>

            {/* Resource Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  title: "Unit Guide",
                  desc: "Curriculum overview, including alignment with NGSS and AI standards.",
                  link: guidePdf,
                  label: "Unit Guide PDF →",
                },
                {
                  title: "Student Journal",
                  desc: "Contains task activity sheets, student-facing instruction, and post-lesson reflection prompts for the entire unit.",
                  link: journalPdf,
                  label: "Student Journal PDF →",
                },
              ].map((r) => (
                <div
                  key={r.title}
                  className="border border-gray-100 rounded-xl p-6 hover:shadow-sm transition-shadow"
                >
                  <h3
                    className="text-lg text-gray-900 mb-2"
                    style={{ fontFamily: "DM Serif Display, serif" }}
                  >
                    {r.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {r.desc}
                  </p>

                  <a
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#1a4fa0] hover:underline font-medium"
                  >
                    {r.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {LESSONS.map((unit, i) => (
            <button
              key={i}
              onClick={() => setOpenUnit(openUnit === i ? null : i)}
              className={`text-left p-5 rounded-xl border transition-all ${openUnit === i
                  ? "bg-[#1a4fa0] text-white border-[#1a4fa0]"
                  : "border-gray-100 hover:border-[#1a4fa0] bg-white"
                }`}
            >
              <div
                className={`text-xs font-medium uppercase tracking-wider mb-2 ${openUnit === i ? "text-blue-200" : "text-[#1a4fa0]"
                  }`}
              >
                {unit.unit}
              </div>
              <div
                className={`text-base leading-snug ${openUnit === i ? "text-white" : "text-gray-800"
                  }`}
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                {unit.title}
              </div>
              <div className={`text-xs mt-2 ${openUnit === i ? "text-blue-200" : "text-gray-400"}`}>
                {unit.lessons.length} lessons
              </div>
            </button>
          ))}
        </div>

        {openUnit !== null && (
          <div className="border border-[#1a4fa0] rounded-xl overflow-hidden">
            <div className="bg-[#e8eef8] px-6 py-4">
              <span className="text-xs text-[#1a4fa0] font-medium uppercase tracking-wider">
                {LESSONS[openUnit].unit}
              </span>
              <h2
                className="text-xl text-gray-900 mt-0.5"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                {LESSONS[openUnit].title}
              </h2>
              <p className="text-sm text-gray-400">{LESSONS[openUnit].subtext}</p>
              {(LESSONS[openUnit].rubric || LESSONS[openUnit].checklist) && (
                <div className="flex gap-4 mt-3">
                  {LESSONS[openUnit].rubric && (
                    <a
                      href={LESSONS[openUnit].rubric}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#1a4fa0] hover:underline font-medium"
                    >
                      Teacher Rubric PDF →
                    </a>
                  )}

                  {LESSONS[openUnit].checklist && (
                    <a
                      href={LESSONS[openUnit].checklist}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#1a4fa0] hover:underline font-medium"
                    >
                      Student Checklist PDF →
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="divide-y divide-gray-100">
              {LESSONS[openUnit].lessons.map((lesson, j) => (
                <div key={j} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-gray-400 w-8">{lesson.num}</span>
                    <div>
                      <span className="text-gray-800 text-sm">{lesson.name}</span>
                      <span className="text-gray-400 text-xs ml-3">{lesson.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">

                    <a
                      href={lesson.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#1a4fa0] hover:underline font-medium flex items-center gap-1"
                    >
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M5.5 1v6M2.5 5l3 3 3-3M1 9v1a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V9" />
                      </svg>
                      PDF
                    </a>
                    {lesson.introSlides && (
                      <a
                        href={lesson.introSlides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#1a4fa0] hover:underline font-medium flex items-center gap-1"
                      >
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <rect x="1" y="1.5" width="9" height="8" rx="1" />
                          <path d="M3 4h5M3 6.5h3" />
                        </svg>
                        Introduction Slides
                      </a>
                    )}
                    <a
                      href={lesson.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#1a4fa0] hover:underline font-medium flex items-center gap-1"
                    >
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="1" y="1.5" width="9" height="8" rx="1" />
                        <path d="M3 4h5M3 6.5h3" />
                      </svg>
                      Slides
                    </a>

                    {lesson.studentInstruction && (
                      <a
                        href={lesson.studentInstruction}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#1a4fa0] hover:underline font-medium flex items-center gap-1"
                      >
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <rect x="1" y="1.5" width="9" height="8" rx="1" />
                          <path d="M3 4h5M3 6.5h3" />
                        </svg>
                        Student Worksheet
                      </a>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <span style={{ fontFamily: "DM Serif Display, serif" }} className="text-gray-700">
              AISciComm
            </span>
            <span>This work has been supported by the National Science Foundation under Grant <a href="https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2241596&HistoricalAwards=false" target="_blank"><u>#2241596</u></a> and the Spencer Foundation. Any opinions, findings, and conclusions expressed in these materials are those of the authors and do not necessarily reflect the views of the Foundations. </span>
            <span>©2026</span>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="size-full overflow-y-auto" style={{ fontFamily: "Inter, sans-serif" }}>
      <NavBar current={page} navigate={setPage} />
      {page === "home" && <HomePage navigate={setPage} />}
      {page === "resources" && <ResourcesPage />}
      {page === "publications" && <PublicationsPage />}
      {page === "team" && <TeamPage />}
    </div>
  );
}
