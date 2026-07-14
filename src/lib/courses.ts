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
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDo9-cQ3D84u7VzsgTKVqazdhUWdENuQi3zakXz_3BJMDQGWWf0-LSqebgqjbawlbzeWetXqpq7yR_S--WTfdStuGXaevoF-jcRhdnRHIop1XJemRjmEHUgz6m1wYuBFoumxkr8TDHI_xLeUrm1BRndRB4Hci3ekaZ6Hd-YSTKR5T_aUBavql_XwLdXXoHMeqGGCUM3_EnzJJatbhX56cpM1lKSv8PMYrFSTvNcsIH5UweA8s4s-GPszxerFqP7dkgW2ydhD5YByg",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDo9-cQ3D84u7VzsgTKVqazdhUWdENuQi3zakXz_3BJMDQGWWf0-LSqebgqjbawlbzeWetXqpq7yR_S--WTfdStuGXaevoF-jcRhdnRHIop1XJemRjmEHUgz6m1wYuBFoumxkr8TDHI_xLeUrm1BRndRB4Hci3ekaZ6Hd-YSTKR5T_aUBavql_XwLdXXoHMeqGGCUM3_EnzJJatbhX56cpM1lKSv8PMYrFSTvNcsIH5UweA8s4s-GPszxerFqP7dkgW2ydhD5YByg",
    desc: "Fluency isn't the goal — command is. CELTA-certified trainers build your spoken and written English to the standard that gets you heard.",
    overview: [
      "English Language Enhancement is built for students who want more than grammatical competence — they want presence, precision, and the ability to own any room they walk into. This isn't a vocabulary drill. It's a full-stack communication upgrade.",
      "Led by CELTA-certified trainers, every session integrates AI-powered conversation practice with human feedback that catches what the AI misses. You leave with English that works — in interviews, in classrooms, and in the world.",
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
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznnzKwZi4FDVUEzX_X5u1y4X-sKL1neqtKvUvTgUaZs3fnFC3DEuOucEy4Lg0zsSHL9pMsQo25nx6crBsW_KcAg1aqFIcxAoGu81q7vM_tsRzfeEJ0ko5VGDpvVhXpcNfuiG6z2rsKA3qL8VeVSn7bb3ImGNWFArPkey_PyOSxajsMQxmOu2qsYkGwkvpTIiCPWCxih_OWrg9Gb3to5AJ0Iot1be6e-V0piMdhgJpTjz7xNsJz5VtZseNNxNlsOg3YzHlTOAbzA",
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
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2OiiFDlYPmjLzkvggfF_nxEJOBuq5tHbpjNsb8CQmqA114FU6xXnrY63rXfOZLZPT-HH1s7BRRN3kERlMMU0XRN_dHhbcw3cK1W2RHTBjjMGnm-z9foznK72490kgd7Ff6RTswARym6ld8PbcME40o-bMq-pgH4n2yuF8hjJH7-nO-J33RMUAG1aCMETYCiNNArI-zcIob-Mg82PPpVZJ8wdztrNicDvS75KI29twK1cGHOiL3QsGR9IRqVaNflJZP7sxfZQutg",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2OiiFDlYPmjLzkvggfF_nxEJOBuq5tHbpjNsb8CQmqA114FU6xXnrY63rXfOZLZPT-HH1s7BRRN3kERlMMU0XRN_dHhbcw3cK1W2RHTBjjMGnm-z9foznK72490kgd7Ff6RTswARym6ld8PbcME40o-bMq-pgH4n2yuF8hjJH7-nO-J33RMUAG1aCMETYCiNNArI-zcIob-Mg82PPpVZJ8wdztrNicDvS75KI29twK1cGHOiL3QsGR9IRqVaNflJZP7sxfZQutg",
    desc: "The gap between a degree and a job isn't knowledge — it's readiness. We close it with real skills, real practice, and a track record that proves it.",
    overview: [
      "Workforce Development is for graduates, job-seekers, and early-career professionals who need more than a CV — they need to walk into a room and perform. We build the communication, critical thinking, and professional readiness skills that employers actually screen for.",
      "AI-powered mock interviews and resume optimisation tools accelerate your preparation. Certified mentors then sharpen what the AI surfaces and hold you to the standard that gets offers.",
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
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznnzKwZi4FDVUEzX_X5u1y4X-sKL1neqtKvUvTgUaZs3fnFC3DEuOucEy4Lg0zsSHL9pMsQo25nx6crBsW_KcAg1aqFIcxAoGu81q7vM_tsRzfeEJ0ko5VGDpvVhXpcNfuiG6z2rsKA3qL8VeVSn7bb3ImGNWFArPkey_PyOSxajsMQxmOu2qsYkGwkvpTIiCPWCxih_OWrg9Gb3to5AJ0Iot1be6e-V0piMdhgJpTjz7xNsJz5VtZseNNxNlsOg3YzHlTOAbzA",
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
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUj-7Ch2rGVO6KnIZqpvxyWInEqhkwPsCGaNAmlsSBmqOShnvmsUbUCnGgsIQ_Q4Pxq7kt7KnqEML3bEuVIZQbKRg-oqn1ObbsSBkaYghIGHob4QLPuWhboV_HY53Iw_JnTmo8Y9QHmRjX5NjXBmU1G0Kf8aU3THTNqfzlV0WAEJI2RdVDyik0dSS_ebI0Xy4KVXfr6sZNn0P0dFpFWRmREUdaof0qwGVIcmSbw5co62lACmQeNWKP53T9curOxZttz8YTs_NUjw",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUj-7Ch2rGVO6KnIZqpvxyWInEqhkwPsCGaNAmlsSBmqOShnvmsUbUCnGgsIQ_Q4Pxq7kt7KnqEML3bEuVIZQbKRg-oqn1ObbsSBkaYghIGHob4QLPuWhboV_HY53Iw_JnTmo8Y9QHmRjX5NjXBmU1G0Kf8aU3THTNqfzlV0WAEJI2RdVDyik0dSS_ebI0Xy4KVXfr6sZNn0P0dFpFWRmREUdaof0qwGVIcmSbw5co62lACmQeNWKP53T9curOxZttz8YTs_NUjw",
    desc: "Code with confidence. AI pair-programming keeps the pace high — prove-you-know-it checkpoints make sure the skill is actually yours.",
    overview: [
      "Technical Skills training is for learners who need to build or sharpen coding ability across Java, Python, SQL, and more — and want to do it at a pace that actually sticks. We don't lecture you into competence. We build it through doing.",
      "AI pair-programming tools keep the momentum going between mentor sessions. But every checkpoint is human-reviewed: a certified trainer confirms you understand the code, not just that you ran it.",
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
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznnzKwZi4FDVUEzX_X5u1y4X-sKL1neqtKvUvTgUaZs3fnFC3DEuOucEy4Lg0zsSHL9pMsQo25nx6crBsW_KcAg1aqFIcxAoGu81q7vM_tsRzfeEJ0ko5VGDpvVhXpcNfuiG6z2rsKA3qL8VeVSn7bb3ImGNWFArPkey_PyOSxajsMQxmOu2qsYkGwkvpTIiCPWCxih_OWrg9Gb3to5AJ0Iot1be6e-V0piMdhgJpTjz7xNsJz5VtZseNNxNlsOg3YzHlTOAbzA",
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
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBVhucu0kssyHoXzrMkIq2fb4kNJTVkw4-QQzKLy1kCK_Pd-qlRov2zfaPsiW3YfMIy5rQzDIBXkzroqdFpJDK-1SXvWryUdduUgBykiMh5oSx-iV6CmWOkVHMgAtI0EbBrBoMncItEVrv5O8drqrgNKzBxfvCHazROh-FdUcsUZCO-7h_zk8caYBuwFZ_SPV-I8Fj-aF4WnenJb2MmkluZOL89Xx-weoeWcHJncK-OgZRxQUySpUD-htXyls4LtXRjSyhin6oNA",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBVhucu0kssyHoXzrMkIq2fb4kNJTVkw4-QQzKLy1kCK_Pd-qlRov2zfaPsiW3YfMIy5rQzDIBXkzroqdFpJDK-1SXvWryUdduUgBykiMh5oSx-iV6CmWOkVHMgAtI0EbBrBoMncItEVrv5O8drqrgNKzBxfvCHazROh-FdUcsUZCO-7h_zk8caYBuwFZ_SPV-I8Fj-aF4WnenJb2MmkluZOL89Xx-weoeWcHJncK-OgZRxQUySpUD-htXyls4LtXRjSyhin6oNA",
    desc: "Give your teachers tools your competitors' schools don't have. TKT & CIDTT certified training that transforms how classrooms work.",
    overview: [
      "Teacher Development is a rigorous upskilling program for practising educators who want to master classroom behaviour, 21st-century pedagogy, and English as a language of instruction. Certified by TKT and CIDTT — the University of Cambridge benchmarks for teacher excellence.",
      "AI lesson planning tools accelerate preparation time so teachers spend more energy on delivery, not admin. Every lesson plan and classroom strategy is reviewed by a Cambridge-certified trainer who knows the difference between a good plan and a great lesson.",
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
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznnzKwZi4FDVUEzX_X5u1y4X-sKL1neqtKvUvTgUaZs3fnFC3DEuOucEy4Lg0zsSHL9pMsQo25nx6crBsW_KcAg1aqFIcxAoGu81q7vM_tsRzfeEJ0ko5VGDpvVhXpcNfuiG6z2rsKA3qL8VeVSn7bb3ImGNWFArPkey_PyOSxajsMQxmOu2qsYkGwkvpTIiCPWCxih_OWrg9Gb3to5AJ0Iot1be6e-V0piMdhgJpTjz7xNsJz5VtZseNNxNlsOg3YzHlTOAbzA",
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
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXWmpwT6h2x-zTNjPwXcSpWc3cs6thjsWmEiSxTSCWjd3Ojb6LbOP4mv9YCOuNByvRczVCvHXZHNDcesjzKsR40CrvflcyrZ_80gDdFRS3S_v1gl6NCxJ7Se-daglmeZU8gc_qsrY22g2S-cvTMBHwNWxktGD8fsTSXGIRfoQpOv_HwFcsviHhnys_MOOENz967-DvYE-uvOp7ogYTfiprc-jUXC8ZG9bIoB366l1hatanryXORkaR5kpHWqRnhBau8PYJQeGM1A",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXWmpwT6h2x-zTNjPwXcSpWc3cs6thjsWmEiSxTSCWjd3Ojb6LbOP4mv9YCOuNByvRczVCvHXZHNDcesjzKsR40CrvflcyrZ_80gDdFRS3S_v1gl6NCxJ7Se-daglmeZU8gc_qsrY22g2S-cvTMBHwNWxktGD8fsTSXGIRfoQpOv_HwFcsviHhnys_MOOENz967-DvYE-uvOp7ogYTfiprc-jUXC8ZG9bIoB366l1hatanryXORkaR5kpHWqRnhBau8PYJQeGM1A",
    desc: "Built from 17+ years of L&D at Amazon and ServiceNow. Communication and leadership training that shows up in next quarter's numbers.",
    overview: [
      "Corporate Training is the enterprise version of everything Bodhi does best: communication, leadership, critical thinking, and AI-integration — built to Fortune 500 standards because our founder spent 17+ years building L&D at that level.",
      "Every program is designed with your organization's outcomes in mind, not a generic module library. AI workflow integration sessions are built in — so your teams learn not just the skill, but how to apply it alongside the tools already in your stack.",
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
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznnzKwZi4FDVUEzX_X5u1y4X-sKL1neqtKvUvTgUaZs3fnFC3DEuOucEy4Lg0zsSHL9pMsQo25nx6crBsW_KcAg1aqFIcxAoGu81q7vM_tsRzfeEJ0ko5VGDpvVhXpcNfuiG6z2rsKA3qL8VeVSn7bb3ImGNWFArPkey_PyOSxajsMQxmOu2qsYkGwkvpTIiCPWCxih_OWrg9Gb3to5AJ0Iot1be6e-V0piMdhgJpTjz7xNsJz5VtZseNNxNlsOg3YzHlTOAbzA",
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
