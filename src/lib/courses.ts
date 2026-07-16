export type Module = {
  number: string;
  title: string;
  desc: string;
  icon?: string;
  wide?: boolean;
};

export type Feature = {
  icon: string;
  title: string;
  desc: string;
};

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  level: string;
  mode: string;
  price: string;
  heroImg: string;
  cardImg: string;
  badge: string;
  desc: string;
  overview: string[];
  syllabusFocus: string[];
  learningOutcomes: string[];
  modules: Module[];
  instructor: {
    name: string;
    credential: string;
    bio: string;
    img: string;
  };
  features: Feature[];
};

const COURSES: Course[] = [
  {
    slug: "english-language-enhancement",
    title: "English Language Enhancement",
    subtitle: "Speak So the Room Stops Talking",
    category: "Students",
    duration: "12 Weeks",
    level: "All Levels",
    mode: "Hybrid Learning",
    price: "Contact Us",
    badge: "Featured",
    heroImg: "/english-language-enhancement.png",
    cardImg: "/english-language-enhancement.png",
    desc: "Speak so the room stops talking. Our CELTA-certified trainers teach English as a living language, not a subject to memorise.",
    overview: [
      "Speak so the room stops talking. Our CELTA-certified trainers teach English as a living language, not a subject to memorise — and now pair every session with AI conversation practice and pronunciation feedback tools, so you get unlimited reps between classes.",
      "The AI catches your accent drift and grammar slips in real time; your trainer is still the one who tells you when you actually sound convincing.",
    ],
    syllabusFocus: [
      "Spoken Fluency & Pronunciation",
      "Academic and Professional Writing",
      "Reading Comprehension & Critical Analysis",
    ],
    learningOutcomes: [
      "Confident Communication in Any Context",
      "Interview-Ready English",
      "Written Clarity Across Formats",
    ],
    modules: [
      { number: "01", title: "Foundation: Speaking with Intention", desc: "Move beyond survival English. Build the sentence structures, vocabulary range, and vocal habits that make you credible and clear." },
      { number: "02", title: "Pronunciation & Accent Clarity", desc: "Not about sounding foreign — about being understood. Targeted drills on sounds, stress, and intonation that matter most.", icon: "record_voice_over", wide: true },
      { number: "03", title: "AI Conversation Practice", desc: "Structured AI partner sessions where you practice real scenarios — then a certified trainer reviews what the AI let slide.", wide: true },
      { number: "04", title: "Academic Writing Fundamentals", desc: "Essays, reports, and emails written with purpose. Grammar in service of argument, not the other way around." },
      { number: "05", title: "Reading for Meaning", desc: "Comprehension strategies that go beyond skimming — how to extract, analyse, and respond to complex texts." },
      { number: "06", title: "Interview & Presentation English", desc: "The high-stakes version: mock interviews, presentations, and group discussions with real-time coaching and correction." },
    ],
    instructor: {
      name: "Lavanya Rao",
      credential: "CELTA Certified, University of Cambridge | 17+ Years L&D",
      bio: "Bodhi's founder brings 17+ years of Learning & Development leadership from Amazon and ServiceNow to every curriculum. CELTA-certified by the University of Cambridge and a Lean Six Sigma Black Belt, she built Bodhi's frameworks to meet Fortune 500 standards — then made them available to every learner.",
      img: "/lavanya-rao.jpg",
    },
    features: [
      { icon: "verified", title: "CELTA Certified", desc: "Trainers hold University of Cambridge credentials — the global standard." },
      { icon: "smart_toy", title: "AI Practice", desc: "AI conversation partners for unlimited practice between sessions." },
      { icon: "diversity_3", title: "Human Review", desc: "Certified trainers review every AI session and correct what it missed." },
      { icon: "explore", title: "Career Ready", desc: "Interview and presentation coaching built into every module." },
    ],
  },
  {
    slug: "workforce-development",
    title: "Workforce Development",
    subtitle: "Get Hired. Get Promoted. Get Noticed.",
    category: "Employability & Readiness",
    duration: "10 Weeks",
    level: "Beginner to Intermediate",
    mode: "Hybrid Learning",
    price: "Contact Us",
    badge: "Employability",
    heroImg: "/workforce-development.png",
    cardImg: "/workforce-development.png",
    desc: "Get hired. Get promoted. Get noticed. We build resumes, interview presence, and professional readiness the old-fashioned way — through practice.",
    overview: [
      "Get hired. Get promoted. Get noticed. We build resumes, interview presence, and professional readiness the old-fashioned way — through practice — and now with AI-powered mock interviews, resume optimisation tools, and LinkedIn profile building baked into the program.",
      "You'll walk in having rehearsed against an AI interviewer dozens of times, so the real one feels easy. A human coach still tells you what the algorithm can't: how you actually came across.",
    ],
    syllabusFocus: [
      "Professional Communication & Presence",
      "Resume & LinkedIn Optimisation",
      "Interview Performance & Negotiation",
    ],
    learningOutcomes: [
      "Job-Ready in 10 Weeks",
      "Confident Interview Performance",
      "Professional Personal Brand",
    ],
    modules: [
      { number: "01", title: "Employability Foundations", desc: "What employers actually look for — and the gap most graduates don't know they have. Honest diagnostics, clear targets." },
      { number: "02", title: "Resume & LinkedIn That Gets Read", desc: "AI-assisted resume builds reviewed by mentors who know what hiring managers skip and what makes them stop.", icon: "description", wide: true },
      { number: "03", title: "AI Mock Interviews", desc: "Practice with AI interviewers across industries. Mentors review recordings, flag weak answers, and rebuild them.", wide: true },
      { number: "04", title: "Professional Communication", desc: "Emails, meetings, presentations. The workplace English that signals competence before you prove it technically." },
      { number: "05", title: "Critical Thinking & Problem-Solving", desc: "Case study practice, structured reasoning, and the decision-making frameworks that stand out in assessment centres." },
      { number: "06", title: "Offer Negotiation & Career Strategy", desc: "How to evaluate offers, negotiate confidently, and build the first 90-day plan that makes you indispensable." },
    ],
    instructor: {
      name: "Lavanya Rao",
      credential: "CELTA Certified, University of Cambridge | 17+ Years L&D",
      bio: "Bodhi's founder brings 17+ years of Learning & Development leadership from Amazon and ServiceNow to every curriculum. CELTA-certified by the University of Cambridge and a Lean Six Sigma Black Belt, she built Bodhi's frameworks to meet Fortune 500 standards — then made them available to every learner.",
      img: "/lavanya-rao.jpg",
    },
    features: [
      { icon: "smart_toy", title: "AI Mock Interviews", desc: "Unlimited AI interview practice across industries and roles." },
      { icon: "description", title: "Resume Review", desc: "Mentor-reviewed resume and LinkedIn optimisation." },
      { icon: "verified", title: "Proven Track Record", desc: "94% of graduates moved forward within 6 months." },
      { icon: "work", title: "Career Strategy", desc: "Offer negotiation and 90-day onboarding coaching." },
    ],
  },
  {
    slug: "technical-skills",
    title: "Technical Skills",
    subtitle: "Java, Python, SQL & More",
    category: "Technical",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    mode: "Hybrid Learning",
    price: "Contact Us",
    badge: "Technical",
    heroImg: "/technical-skills.png",
    cardImg: "/technical-skills.png",
    desc: "Code isn't optional anymore, and neither is knowing how to use AI to code faster. We teach the fundamentals first — logic, syntax, debugging.",
    overview: [
      "Code isn't optional anymore, and neither is knowing how to use AI to code faster. We teach the fundamentals first — logic, syntax, debugging — then bring in AI pair-programming tools the way real engineering teams use them: to speed up boilerplate, catch bugs, and explore alternatives, never to skip the thinking.",
      "Every project includes a \"prove you understand it\" checkpoint, so you leave able to code without the AI, not dependent on it.",
    ],
    syllabusFocus: [
      "Core Programming in Java, Python & SQL",
      "Data Structures & Algorithmic Thinking",
      "Real-World Project Application",
    ],
    learningOutcomes: [
      "Job-Ready Technical Proficiency",
      "Problem-Solving Under Pressure",
      "Portfolio-Ready Projects",
    ],
    modules: [
      { number: "01", title: "Programming Foundations", desc: "Variables, logic, loops, and the mental models that separate people who code from people who understand code." },
      { number: "02", title: "Java & Object-Oriented Design", desc: "Classes, inheritance, and the OOP principles that form the backbone of enterprise software development.", icon: "terminal", wide: true },
      { number: "03", title: "Python for Data & Automation", desc: "Scripting, data manipulation, and automation workflows using Python — with AI pair-programming support throughout.", wide: true },
      { number: "04", title: "SQL & Database Fundamentals", desc: "Querying, schema design, and the data literacy that every technical role now expects as a baseline." },
      { number: "05", title: "Prove-You-Know-It Checkpoints", desc: "Not a quiz. A mentor-led session where you explain, debug, and extend your code — no AI assist. Skill confirmed." },
      { number: "06", title: "Capstone Project", desc: "Build something real. A portfolio project scoped to your target role, reviewed by a mentor before it goes anywhere." },
    ],
    instructor: {
      name: "Lavanya Rao",
      credential: "CELTA Certified, University of Cambridge | 17+ Years L&D",
      bio: "Bodhi's founder brings 17+ years of Learning & Development leadership from Amazon and ServiceNow to every curriculum. CELTA-certified by the University of Cambridge and a Lean Six Sigma Black Belt, she built Bodhi's frameworks to meet Fortune 500 standards — then made them available to every learner.",
      img: "/lavanya-rao.jpg",
    },
    features: [
      { icon: "smart_toy", title: "AI Pair-Programming", desc: "AI coding assistant keeps pace high between mentor sessions." },
      { icon: "verified", title: "Skill Checkpoints", desc: "Mentor-led checkpoints confirm you own the skill, not just the output." },
      { icon: "terminal", title: "Java, Python & SQL", desc: "Core languages that employers actually hire for." },
      { icon: "work_history", title: "Portfolio Project", desc: "Capstone project reviewed by a mentor — ready for interviews." },
    ],
  },
  {
    slug: "teacher-development",
    title: "Teacher Development",
    subtitle: "Behaviour, 21st-Century Pedagogy & English as a Language",
    category: "Education",
    duration: "10 Weeks",
    level: "Practising Educators",
    mode: "Hybrid Learning",
    price: "Contact Us",
    badge: "Education",
    heroImg: "/teacher-development.png",
    cardImg: "/teacher-development.png",
    desc: "Turn your classroom into your legacy. TKT and CIDTT-certified programs covering behaviour remodelling, 21st-century pedagogy, and English as a language for real communication.",
    overview: [
      "Turn your classroom into your legacy. Our TKT and CIDTT-certified programs cover behaviour remodelling, teaching to the 21st-century learner, and — critically — teaching English as a language for real communication, not a subject to be tested.",
      "We now train teachers to use AI to build lesson plans, differentiated worksheets, and engaging classroom activities in minutes, freeing up time for what AI can't replace: reading a room, managing behaviour, and mentoring a student who's struggling.",
    ],
    syllabusFocus: [
      "Classroom Behaviour & Management",
      "21st-Century Pedagogical Design",
      "English as a Language of Instruction",
    ],
    learningOutcomes: [
      "Richer, More Engaging Lesson Delivery",
      "Higher Student Retention & Participation",
      "Cambridge-Level Teaching Certification",
    ],
    modules: [
      { number: "01", title: "Classroom Behaviour Mastery", desc: "The frameworks that turn disruptive classrooms into high-performance learning environments — without burning out the teacher." },
      { number: "02", title: "21st-Century Pedagogical Design", desc: "Backwards design, inquiry-based learning, and UDL principles applied to the classrooms that actually exist.", icon: "design_services", wide: true },
      { number: "03", title: "AI Lesson Planning", desc: "Use AI to draft, differentiate, and iterate lesson plans faster. A CIDTT-certified trainer reviews every plan before it's taught.", wide: true },
      { number: "04", title: "English as a Language of Instruction", desc: "For teachers whose content language is English: the precision, clarity, and register that keeps students engaged and learning." },
      { number: "05", title: "Assessment for Learning", desc: "Formative strategies that give students ownership of their growth — and give teachers data that's actually useful." },
      { number: "06", title: "TKT & CIDTT Preparation", desc: "Structured preparation for Cambridge Teaching Knowledge Test and Cambridge International Diploma in Teacher Training examinations." },
    ],
    instructor: {
      name: "Lavanya Rao",
      credential: "CELTA Certified, University of Cambridge | 17+ Years L&D",
      bio: "Bodhi's founder brings 17+ years of Learning & Development leadership from Amazon and ServiceNow to every curriculum. CELTA-certified by the University of Cambridge and a Lean Six Sigma Black Belt, she built Bodhi's frameworks to meet Fortune 500 standards — then made them available to every learner.",
      img: "/lavanya-rao.jpg",
    },
    features: [
      { icon: "verified", title: "TKT & CIDTT Certified", desc: "University of Cambridge credentials — the global benchmark for teachers." },
      { icon: "smart_toy", title: "AI Lesson Planning", desc: "AI tools to draft and differentiate lessons faster." },
      { icon: "school", title: "Cambridge Reviewed", desc: "Every AI lesson plan reviewed by a CIDTT-certified trainer." },
      { icon: "diversity_3", title: "Educator Community", desc: "Join a global network of Cambridge-certified educators." },
    ],
  },
  {
    slug: "corporate-training",
    title: "Corporate Training",
    subtitle: "Essential Skills for Corporate Success",
    category: "Corporate",
    duration: "8 Weeks",
    level: "All Levels",
    mode: "On-site & Online",
    price: "Contact Us",
    badge: "Corporate",
    heroImg: "/corporate-training.png",
    cardImg: "/corporate-training.png",
    desc: "Communication training that shows up in your next quarter's numbers. Negotiation, leadership, and cross-cultural skills that get people promoted.",
    overview: [
      "Communication training that shows up in your next quarter's numbers. We build the negotiation, leadership, and cross-cultural communication skills that get people promoted — and we've built AI-assisted drafting, reporting, and presentation-building workflows directly into the training.",
      "So your teams communicate faster without communicating worse.",
    ],
    syllabusFocus: [
      "Executive Communication & Presentation",
      "Leadership & Team Effectiveness",
      "AI Workflow Integration for Teams",
    ],
    learningOutcomes: [
      "Measurable Improvement in Team Performance",
      "Confident Cross-Functional Communication",
      "Strategic AI Use Without Over-Reliance",
    ],
    modules: [
      { number: "01", title: "Diagnosing Your Team's Communication Gaps", desc: "A Six Sigma-informed skills audit that identifies exactly where communication breaks down — and what it's costing you." },
      { number: "02", title: "Executive Communication & Presence", desc: "From boardroom presentations to difficult conversations: the communication skills that move organisations forward.", icon: "corporate_fare", wide: true },
      { number: "03", title: "AI Workflow Integration", desc: "Practical sessions on how AI tools fit into your existing workflows — and where they don't. Guardrails included.", wide: true },
      { number: "04", title: "Leadership Essentials", desc: "The human skills that compound over time: listening, decision-making, psychological safety, and influence without authority." },
      { number: "05", title: "Cross-Functional Collaboration", desc: "Frameworks for communicating across teams, functions, and hierarchies — without losing clarity or accountability." },
      { number: "06", title: "Measuring Learning ROI", desc: "The Lean Six Sigma approach to training: define outcomes before you start, measure them when you finish, repeat what works." },
    ],
    instructor: {
      name: "Lavanya Rao",
      credential: "CELTA Certified, University of Cambridge | 17+ Years L&D",
      bio: "Bodhi's founder brings 17+ years of Learning & Development leadership from Amazon and ServiceNow to every curriculum. CELTA-certified by the University of Cambridge and a Lean Six Sigma Black Belt, she built Bodhi's frameworks to meet Fortune 500 standards — then made them available to every learner.",
      img: "/lavanya-rao.jpg",
    },
    features: [
      { icon: "analytics", title: "Six Sigma Rigor", desc: "Lean Six Sigma Black Belt approach to measuring training outcomes." },
      { icon: "corporate_fare", title: "F500 Heritage", desc: "Built from 17+ years of L&D leadership at Amazon and ServiceNow." },
      { icon: "smart_toy", title: "AI Integration", desc: "Practical AI workflow sessions built into every program." },
      { icon: "design_services", title: "Custom Programs", desc: "Tailored to your organisation's outcomes — not a module library." },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getAllCourses(): Course[] {
  return COURSES;
}

export function getAllSlugs(): string[] {
  return COURSES.map((c) => c.slug);
}
