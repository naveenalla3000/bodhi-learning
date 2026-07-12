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
    slug: "advanced-english-proficiency",
    title: "Advanced English Proficiency",
    subtitle: "The Mastery of Discourse",
    category: "Advanced Seminar",
    duration: "12 Weeks",
    level: "Advanced (C1/C2)",
    mode: "Hybrid Learning",
    price: "₹1,04,000",
    badge: "Featured",
    heroImg:
      "https://lh3.googleusercontent.com/aida/AP1WRLsOL87G19BqZUdUnhGWQVviuJebgXH1cbpQMbaDqreToeHvusAi0u7x-HQJlzr-F4FJFKkiXGmrxkqmeaCjp7iYcduB0sbvpKfh8_3PdiDcbbBEUlaVJoM_TLqUUvxWqN-yTwLy4ia0a-QJQqOArlAqxiVh6dLQaAbq0JHalGvStAzbfGwVo2EdWH2pEXIjjpLAiLllc_YZMer4PL9v6y2edGyVtkS_Y7AhJLxRrTZ9h4T8nfZHLe8sqA",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDo9-cQ3D84u7VzsgTKVqazdhUWdENuQi3zakXz_3BJMDQGWWf0-LSqebgqjbawlbzeWetXqpq7yR_S--WTfdStuGXaevoF-jcRhdnRHIop1XJemRjmEHUgz6m1wYuBFoumxkr8TDHI_xLeUrm1BRndRB4Hci3ekaZ6Hd-YSTKR5T_aUBavql_XwLdXXoHMeqGGCUM3_EnzJJatbhX56cpM1lKSv8PMYrFSTvNcsIH5UweA8s4s-GPszxerFqP7dkgW2ydhD5YByg",
    desc: "Elevate your linguistic capabilities with an expert-led curriculum designed for the highest professional standards.",
    overview: [
      "The Advanced English Proficiency seminar is not merely a language course; it is an exploration of the intellectual architecture of the English language. This program is curated for those who have moved beyond grammatical competence and seek to master the subtle art of influence, nuance, and structural clarity.",
      "Our pedagogical approach integrates classical rhetorical theory with contemporary discourse analysis. We believe that true proficiency is found in the ability to adapt tone, register, and lexical precision to any environment — be it the high-stakes boardroom, the academic lecture hall, or the diplomatic assembly.",
    ],
    syllabusFocus: [
      "Syntactic Complexity and Fluidity",
      "Nuanced Lexical Selection",
      "Argumentative Logic Frameworks",
    ],
    learningOutcomes: [
      "Authoritative Professional Presence",
      "Critical Media Literacy",
      "Cross-Cultural Negotiation Mastery",
    ],
    modules: [
      { number: "01", title: "Critical Discourse Analysis", desc: "Analyze the relationship between language and power. Learn to identify implicit bias and structural rhetoric in academic and professional texts." },
      { number: "02", title: "Rhetorical Mastery & Public Address", desc: "The art of persuasion. Drawing from Aristotelian concepts to modern speechwriting, focusing on vocal and structural delivery of complex arguments.", icon: "mic_external_on", wide: true },
      { number: "03", title: "Advanced Academic Writing", desc: "Synthesis of multiple sources, precision in abstract writing, and the technicalities of peer-review level English compositions.", wide: true },
      { number: "04", title: "High-Stakes Business Negotiation", desc: "Simulated corporate environments. Learn the language of leverage, compromise, and definitive professional closing." },
      { number: "05", title: "Sociolinguistic Intelligence", desc: "Understanding cultural idiomatics and regional variations in high-level English usage across global markets." },
      { number: "06", title: "Syntactic Fluidity & Style", desc: "Refining the personal 'voice' in English. Advanced techniques in sentence structure to create rhythmic and engaging prose." },
    ],
    instructor: {
      name: "Dr. Sarah Jenkins",
      credential: "Ph.D. in Applied Linguistics, Oxford University",
      bio: "With over two decades of research in discourse analysis and educational leadership, Dr. Jenkins has pioneered the 'Contextual Mastery' method used at Bodhi Learning. She has served as a consultant for numerous global NGOs and academic institutions, helping leaders find their authentic voice in the English language.",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLv2m514hZdKwdJiVyf447UguL69MXItKYTVotMfJbDhH5eDSF22DOvGqBOhxll2p2IifDQN3y-kg-PlBnt_Yc1BU8L1Fm1aIetkmkLuAJa1Qnujee0gPhpR8s41AHY4CjiIYnFhIb3qrjWdzzh0TyY4ONrF-gIIVULQyL_YH_DW3DF-tM9EseQCx7J7O94eWY60Lq4vNYWLm-IGc7Ph_mOAhEMHHmBe_pMniHRhG6N5PYQ2_rpe3luzmA",
    },
    features: [
      { icon: "verified", title: "Accredited", desc: "Globally recognized certification upon successful completion." },
      { icon: "all_inclusive", title: "Lifetime Access", desc: "Revisit all core lectures and discourse frameworks indefinitely." },
      { icon: "diversity_3", title: "Live Mentorship", desc: "Weekly small-group seminars with Dr. Jenkins and faculty." },
      { icon: "explore", title: "Career Path", desc: "One-on-one career counseling for international placement." },
    ],
  },
  {
    slug: "corporate-communication",
    title: "Corporate Communication",
    subtitle: "Mastering the Language of Business",
    category: "Professional",
    duration: "12 Weeks",
    level: "Intermediate",
    mode: "Online",
    price: "₹79,000",
    badge: "Professional",
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2OiiFDlYPmjLzkvggfF_nxEJOBuq5tHbpjNsb8CQmqA114FU6xXnrY63rXfOZLZPT-HH1s7BRRN3kERlMMU0XRN_dHhbcw3cK1W2RHTBjjMGnm-z9foznK72490kgd7Ff6RTswARym6ld8PbcME40o-bMq-pgH4n2yuF8hjJH7-nO-J33RMUAG1aCMETYCiNNArI-zcIob-Mg82PPpVZJ8wdztrNicDvS75KI29twK1cGHOiL3QsGR9IRqVaNflJZP7sxfZQutg",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2OiiFDlYPmjLzkvggfF_nxEJOBuq5tHbpjNsb8CQmqA114FU6xXnrY63rXfOZLZPT-HH1s7BRRN3kERlMMU0XRN_dHhbcw3cK1W2RHTBjjMGnm-z9foznK72490kgd7Ff6RTswARym6ld8PbcME40o-bMq-pgH4n2yuF8hjJH7-nO-J33RMUAG1aCMETYCiNNArI-zcIob-Mg82PPpVZJ8wdztrNicDvS75KI29twK1cGHOiL3QsGR9IRqVaNflJZP7sxfZQutg",
    desc: "Master the art of internal and external communication within a global corporate structure.",
    overview: [
      "Corporate Communication equips professionals with the strategic communication skills needed to lead teams, manage stakeholders, and represent their organization with clarity and confidence.",
      "From crafting executive presentations to navigating difficult conversations, this course builds a comprehensive toolkit grounded in real-world corporate scenarios and proven communication frameworks.",
    ],
    syllabusFocus: [
      "Executive Presentation Design",
      "Stakeholder Management Language",
      "Crisis Communication Protocols",
    ],
    learningOutcomes: [
      "Confident Board-Level Presentations",
      "Effective Cross-Departmental Messaging",
      "Written and Verbal Clarity Under Pressure",
    ],
    modules: [
      { number: "01", title: "Foundations of Corporate Language", desc: "Understanding the register, tone, and structure that define professional communication in corporate environments." },
      { number: "02", title: "Presentation & Storytelling", desc: "Crafting narratives that resonate with executive audiences. Slide design principles and delivery techniques.", icon: "slideshow", wide: true },
      { number: "03", title: "Email & Written Communication", desc: "Precision and concision in business writing. Learn to write memos, reports, and proposals that drive decisions.", wide: true },
      { number: "04", title: "Difficult Conversations", desc: "Frameworks for delivering feedback, managing conflict, and navigating sensitive discussions with empathy and clarity." },
      { number: "05", title: "Stakeholder Communication", desc: "Mapping and managing diverse stakeholder audiences. Tailoring messaging across organizational hierarchies." },
      { number: "06", title: "Crisis & Change Communication", desc: "Communicating under pressure. Strategies for managing narratives during organizational change and crises." },
    ],
    instructor: {
      name: "Marcus Thorne",
      credential: "Former TEDx Speaker Coach & Executive Trainer",
      bio: "Marcus has spent 15 years coaching C-suite executives at Fortune 500 companies. His structured approach to persuasive communication has helped leaders across industries command the room and inspire action.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEj9ASckaCgEvxHmNBQokfivk3m_A3gfGwRlmkDjqxqEb1dXHYyG0WgcXN4zOpnMZavBN_0-k8OHI9BoxPceqCXJ9KNZIFgUnA2BzQ3QjDjScH9Tg2NpmmSIiVx8aNUrFe9h5BZZyqnrgiHW9LZPy0JI6R0dLivmn-_bzitErNyrmTcR1_rgz1NTEmPyMdbREoPs6HftEyi6GF63NENtdvoFkLiFHGOniGfYlpaml8WcsnWy1U4RY7F_ncELYyZdPPnZ58Xr1Ifw",
    },
    features: [
      { icon: "verified", title: "Accredited", desc: "Globally recognized certification upon successful completion." },
      { icon: "video_call", title: "Live Sessions", desc: "Weekly live workshops with real corporate case studies." },
      { icon: "group", title: "Peer Learning", desc: "Collaborate with professionals across industries globally." },
      { icon: "work", title: "Career Support", desc: "Resume and LinkedIn coaching included for all participants." },
    ],
  },
  {
    slug: "soft-skills-for-leaders",
    title: "Soft Skills for Leaders",
    subtitle: "The Human Edge in Leadership",
    category: "Leadership",
    duration: "8 Weeks",
    level: "Advanced",
    mode: "Hybrid Learning",
    price: "₹71,000",
    badge: "Leadership",
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUj-7Ch2rGVO6KnIZqpvxyWInEqhkwPsCGaNAmlsSBmqOShnvmsUbUCnGgsIQ_Q4Pxq7kt7KnqEML3bEuVIZQbKRg-oqn1ObbsSBkaYghIGHob4QLPuWhboV_HY53Iw_JnTmo8Y9QHmRjX5NjXBmU1G0Kf8aU3THTNqfzlV0WAEJI2RdVDyik0dSS_ebI0Xy4KVXfr6sZNn0P0dFpFWRmREUdaof0qwGVIcmSbw5co62lACmQeNWKP53T9curOxZttz8YTs_NUjw",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUj-7Ch2rGVO6KnIZqpvxyWInEqhkwPsCGaNAmlsSBmqOShnvmsUbUCnGgsIQ_Q4Pxq7kt7KnqEML3bEuVIZQbKRg-oqn1ObbsSBkaYghIGHob4QLPuWhboV_HY53Iw_JnTmo8Y9QHmRjX5NjXBmU1G0Kf8aU3THTNqfzlV0WAEJI2RdVDyik0dSS_ebI0Xy4KVXfr6sZNn0P0dFpFWRmREUdaof0qwGVIcmSbw5co62lACmQeNWKP53T9curOxZttz8YTs_NUjw",
    desc: "Enhance your emotional intelligence, empathy, and strategic decision-making capabilities.",
    overview: [
      "Soft Skills for Leaders is a transformative program for those who already possess technical competence and want to master the human dimension of leadership — the qualities that inspire loyalty, build culture, and drive extraordinary outcomes.",
      "Drawing from neuroscience, organizational psychology, and executive coaching, this course equips leaders to navigate complexity with empathy, make high-stakes decisions with clarity, and build teams that thrive.",
    ],
    syllabusFocus: [
      "Emotional Intelligence & Self-Awareness",
      "Active Listening & Empathetic Response",
      "Decision-Making Under Uncertainty",
    ],
    learningOutcomes: [
      "Stronger Team Trust and Psychological Safety",
      "Confident Conflict Navigation",
      "Resilient, Adaptive Leadership Presence",
    ],
    modules: [
      { number: "01", title: "The Science of Emotional Intelligence", desc: "Understanding the neurological foundations of EQ and how self-awareness drives leadership effectiveness." },
      { number: "02", title: "Empathy as a Leadership Tool", desc: "Moving beyond sympathy to strategic empathy. Build rapport and psychological safety within your teams.", icon: "favorite", wide: true },
      { number: "03", title: "Communication & Active Listening", desc: "Deepen your ability to listen beyond words. Techniques for uncovering what teams truly need.", wide: true },
      { number: "04", title: "Conflict Resolution Frameworks", desc: "Navigate interpersonal and organizational conflict with structured, de-escalating communication strategies." },
      { number: "05", title: "Resilience & Adaptive Thinking", desc: "Building mental toughness and cognitive flexibility to lead through ambiguity and organizational change." },
      { number: "06", title: "Coaching & Developing Others", desc: "Shift from directing to coaching. Frameworks for developing talent and unlocking potential in your team." },
    ],
    instructor: {
      name: "Prof. Elena Rossi",
      credential: "Expert in Pedagogy, Organizational Behavior & Leadership",
      bio: "Prof. Rossi brings two decades of expertise in instructional design and organizational development. Her research on psychological safety and inclusive leadership has been published internationally and applied in leadership programs across 30 countries.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyIUTsjum8qCVEdt6nz-HwuaKr4MQCDuL9FX7YQ_Hv793BUZHpgNuoOZ6JO_9N6Ko8-VaGhaETanwq-lhUk2viDJDogOWY8-vfn1sVMpjwy6PteQwUqXwmG0k9Z4iK-iiALDzdKOXyxZ5tL-t9nxBUw-gS-3GFKfxoYgF4nO3U4pWA2jxrI0kMo_KLLc2Gx28vRVoPXNUTMxxoX322KZ5H_0CZ8Hy7qHouRa3NijMPWPI6ut89C11xXLmQ",
    },
    features: [
      { icon: "psychology", title: "Evidence-Based", desc: "Grounded in organizational psychology and neuroscience research." },
      { icon: "diversity_3", title: "Cohort Learning", desc: "Learn alongside a curated cohort of senior professionals." },
      { icon: "all_inclusive", title: "Lifetime Access", desc: "Return to materials as your leadership journey evolves." },
      { icon: "explore", title: "Career Path", desc: "Personalized leadership development roadmap upon completion." },
    ],
  },
  {
    slug: "public-speaking-mastery",
    title: "Public Speaking Mastery",
    subtitle: "Commanding Any Room with Confidence",
    category: "Communication",
    duration: "6 Weeks",
    level: "Beginner",
    mode: "Online",
    price: "₹54,000",
    badge: "Communication",
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBVhucu0kssyHoXzrMkIq2fb4kNJTVkw4-QQzKLy1kCK_Pd-qlRov2zfaPsiW3YfMIy5rQzDIBXkzroqdFpJDK-1SXvWryUdduUgBykiMh5oSx-iV6CmWOkVHMgAtI0EbBrBoMncItEVrv5O8drqrgNKzBxfvCHazROh-FdUcsUZCO-7h_zk8caYBuwFZ_SPV-I8Fj-aF4WnenJb2MmkluZOL89Xx-weoeWcHJncK-OgZRxQUySpUD-htXyls4LtXRjSyhin6oNA",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBVhucu0kssyHoXzrMkIq2fb4kNJTVkw4-QQzKLy1kCK_Pd-qlRov2zfaPsiW3YfMIy5rQzDIBXkzroqdFpJDK-1SXvWryUdduUgBykiMh5oSx-iV6CmWOkVHMgAtI0EbBrBoMncItEVrv5O8drqrgNKzBxfvCHazROh-FdUcsUZCO-7h_zk8caYBuwFZ_SPV-I8Fj-aF4WnenJb2MmkluZOL89Xx-weoeWcHJncK-OgZRxQUySpUD-htXyls4LtXRjSyhin6oNA",
    desc: "Build unshakeable confidence in front of any audience with structured delivery techniques.",
    overview: [
      "Public Speaking Mastery takes you from nervous first steps to confident, compelling delivery. Whether you're facing a team meeting, a client pitch, or a keynote stage, this course gives you the tools to speak with authority and authenticity.",
      "Using video feedback, live practice sessions, and proven vocal and structural frameworks, participants rapidly overcome speaking anxiety and develop a commanding presence that commands attention.",
    ],
    syllabusFocus: [
      "Vocal Projection and Pacing",
      "Structuring Compelling Narratives",
      "Managing Speaking Anxiety",
    ],
    learningOutcomes: [
      "Confident Delivery in Any Setting",
      "Engaging Storytelling for Professional Contexts",
      "Strong Stage Presence and Body Language",
    ],
    modules: [
      { number: "01", title: "Overcoming Speaking Anxiety", desc: "Evidence-based techniques to reframe nervousness as energy and build lasting confidence in front of audiences." },
      { number: "02", title: "Voice, Pace & Presence", desc: "Master the mechanics of voice: projection, resonance, pacing, and the strategic use of silence.", icon: "record_voice_over", wide: true },
      { number: "03", title: "Structure & Story Arc", desc: "How to build a speech that flows: opening hooks, narrative arcs, and closing calls to action.", wide: true },
      { number: "04", title: "Body Language & Stage Command", desc: "Using posture, gesture, and movement purposefully to reinforce your message and project confidence." },
      { number: "05", title: "Q&A and Impromptu Speaking", desc: "Handling unexpected questions with composure. Frameworks for thinking on your feet in any situation." },
      { number: "06", title: "Live Practice & Video Review", desc: "Recorded practice sessions with structured peer and coach feedback to lock in your new skills." },
    ],
    instructor: {
      name: "Marcus Thorne",
      credential: "Former TEDx Speaker Coach & Executive Trainer",
      bio: "Marcus has coached over 500 speakers across 40 countries, from first-time presenters to TED stage veterans. His methodical, confidence-first approach makes even the most apprehensive speaker feel ready to own the room.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEj9ASckaCgEvxHmNBQokfivk3m_A3gfGwRlmkDjqxqEb1dXHYyG0WgcXN4zOpnMZavBN_0-k8OHI9BoxPceqCXJ9KNZIFgUnA2BzQ3QjDjScH9Tg2NpmmSIiVx8aNUrFe9h5BZZyqnrgiHW9LZPy0JI6R0dLivmn-_bzitErNyrmTcR1_rgz1NTEmPyMdbREoPs6HftEyi6GF63NENtdvoFkLiFHGOniGfYlpaml8WcsnWy1U4RY7F_ncELYyZdPPnZ58Xr1Ifw",
    },
    features: [
      { icon: "videocam", title: "Video Feedback", desc: "Record and review your practice sessions with expert feedback." },
      { icon: "groups", title: "Live Practice", desc: "Weekly live sessions for real-time practice and coaching." },
      { icon: "verified", title: "Certificate", desc: "Receive a completion certificate recognized by industry partners." },
      { icon: "replay", title: "Lifetime Replay", desc: "Access all recorded sessions and course materials forever." },
    ],
  },
  {
    slug: "k12-academic-excellence",
    title: "K-12 Academic Excellence",
    subtitle: "Building the Foundations of Future Leaders",
    category: "School",
    duration: "16 Weeks",
    level: "All Levels",
    mode: "In-Person & Online",
    price: "₹62,500",
    badge: "School",
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXWmpwT6h2x-zTNjPwXcSpWc3cs6thjsWmEiSxTSCWjd3Ojb6LbOP4mv9YCOuNByvRczVCvHXZHNDcesjzKsR40CrvflcyrZ_80gDdFRS3S_v1gl6NCxJ7Se-daglmeZU8gc_qsrY22g2S-cvTMBHwNWxktGD8fsTSXGIRfoQpOv_HwFcsviHhnys_MOOENz967-DvYE-uvOp7ogYTfiprc-jUXC8ZG9bIoB366l1hatanryXORkaR5kpHWqRnhBau8PYJQeGM1A",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXWmpwT6h2x-zTNjPwXcSpWc3cs6thjsWmEiSxTSCWjd3Ojb6LbOP4mv9YCOuNByvRczVCvHXZHNDcesjzKsR40CrvflcyrZ_80gDdFRS3S_v1gl6NCxJ7Se-daglmeZU8gc_qsrY22g2S-cvTMBHwNWxktGD8fsTSXGIRfoQpOv_HwFcsviHhnys_MOOENz967-DvYE-uvOp7ogYTfiprc-jUXC8ZG9bIoB366l1hatanryXORkaR5kpHWqRnhBau8PYJQeGM1A",
    desc: "A comprehensive framework to help students excel across core academic disciplines.",
    overview: [
      "The K-12 Academic Excellence program is a structured intervention framework designed for schools and individual students who seek to raise the standard of learning outcomes across core subjects.",
      "Combining evidence-based study techniques, subject-specific mentoring, and holistic wellbeing support, this program creates the academic habits and mindset that set students up for lifelong success.",
    ],
    syllabusFocus: [
      "Critical Thinking & Problem-Solving",
      "Effective Study Techniques",
      "Subject-Specific Skill Building",
    ],
    learningOutcomes: [
      "Improved Academic Performance Across Subjects",
      "Greater Self-Direction and Study Discipline",
      "Confident Examination Preparation",
    ],
    modules: [
      { number: "01", title: "Learning How to Learn", desc: "Meta-cognitive strategies: spaced repetition, active recall, and building sustainable study routines." },
      { number: "02", title: "Language Arts & Communication", desc: "Reading comprehension, essay writing, and verbal communication skills for academic success.", icon: "menu_book", wide: true },
      { number: "03", title: "Mathematics & Logical Reasoning", desc: "Building mathematical confidence from fundamentals to advanced problem-solving techniques.", wide: true },
      { number: "04", title: "Science & Critical Inquiry", desc: "The scientific method, experiment design, and developing a curiosity-driven approach to learning." },
      { number: "05", title: "Exam Strategy & Preparation", desc: "Structured approaches to examination preparation, time management, and performance under pressure." },
      { number: "06", title: "Wellbeing & Academic Resilience", desc: "Managing academic stress, building confidence, and developing the emotional resilience to persevere." },
    ],
    instructor: {
      name: "Dr. Sarah Jenkins",
      credential: "Ph.D. in Applied Linguistics & Curriculum Design",
      bio: "Dr. Jenkins has designed academic enrichment programs for over 200 schools across South Asia and the Middle East. Her student-centred approach combines rigorous academic content with the wellbeing support that helps every student reach their potential.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznnzKwZi4FDVUEzX_X5u1y4X-sKL1neqtKvUvTgUaZs3fnFC3DEuOucEy4Lg0zsSHL9pMsQo25nx6crBsW_KcAg1aqFIcxAoGu81q7vM_tsRzfeEJ0ko5VGDpvVhXpcNfuiG6z2rsKA3qL8VeVSn7bb3ImGNWFArPkey_PyOSxajsMQxmOu2qsYkGwkvpTIiCPWCxih_OWrg9Gb3to5AJ0Iot1be6e-V0piMdhgJpTjz7xNsJz5VtZseNNxNlsOg3YzHlTOAbzA",
    },
    features: [
      { icon: "school", title: "School-Aligned", desc: "Mapped to national and international curricula standards." },
      { icon: "family_restroom", title: "Parent Reports", desc: "Regular progress reports and parent consultation sessions." },
      { icon: "verified", title: "Certified Tutors", desc: "All mentors are certified educators with proven track records." },
      { icon: "psychology", title: "Wellbeing Focus", desc: "Holistic support integrating academic and emotional development." },
    ],
  },
  {
    slug: "teacher-professional-development",
    title: "Teacher Professional Development",
    subtitle: "Elevating the Educators of Tomorrow",
    category: "Education",
    duration: "10 Weeks",
    level: "Intermediate",
    mode: "Hybrid Learning",
    price: "₹75,000",
    badge: "Education",
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBznnzKwZi4FDVUEzX_X5u1y4X-sKL1neqtKvUvTgUaZs3fnFC3DEuOucEy4Lg0zsSHL9pMsQo25nx6crBsW_KcAg1aqFIcxAoGu81q7vM_tsRzfeEJ0ko5VGDpvVhXpcNfuiG6z2rsKA3qL8VeVSn7bb3ImGNWFArPkey_PyOSxajsMQxmOu2qsYkGwkvpTIiCPWCxih_OWrg9Gb3to5AJ0Iot1be6e-V0piMdhgJpTjz7xNsJz5VtZseNNxNlsOg3YzHlTOAbzA",
    cardImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBznnzKwZi4FDVUEzX_X5u1y4X-sKL1neqtKvUvTgUaZs3fnFC3DEuOucEy4Lg0zsSHL9pMsQo25nx6crBsW_KcAg1aqFIcxAoGu81q7vM_tsRzfeEJ0ko5VGDpvVhXpcNfuiG6z2rsKA3qL8VeVSn7bb3ImGNWFArPkey_PyOSxajsMQxmOu2qsYkGwkvpTIiCPWCxih_OWrg9Gb3to5AJ0Iot1be6e-V0piMdhgJpTjz7xNsJz5VtZseNNxNlsOg3YzHlTOAbzA",
    desc: "Equip educators with modern pedagogical tools, digital integration, and classroom management strategies.",
    overview: [
      "Teacher Professional Development is a rigorous upskilling program for practising educators who want to integrate modern pedagogy, digital tools, and student-centred practices into their classrooms.",
      "Participants will leave with a portfolio of practical frameworks, lesson design templates, and assessment strategies that can be applied immediately in any classroom environment.",
    ],
    syllabusFocus: [
      "Student-Centred Learning Design",
      "Digital Tool Integration",
      "Differentiated Instruction",
    ],
    learningOutcomes: [
      "Richer, More Engaging Lesson Delivery",
      "Higher Student Retention and Participation",
      "Confident Use of EdTech Platforms",
    ],
    modules: [
      { number: "01", title: "Modern Pedagogy Foundations", desc: "A survey of contemporary pedagogical research: constructivism, inquiry-based learning, and UDL principles." },
      { number: "02", title: "Lesson Design & Curriculum Mapping", desc: "Backwards design methodology for building coherent, outcome-driven units and lessons.", icon: "design_services", wide: true },
      { number: "03", title: "Classroom Management & Culture", desc: "Creating psychologically safe, high-performance learning environments through proactive management strategies.", wide: true },
      { number: "04", title: "Digital Integration & EdTech", desc: "Selecting and implementing the right digital tools to enhance learning without replacing human connection." },
      { number: "05", title: "Assessment for Learning", desc: "Moving beyond grades: formative assessment strategies that give students actionable feedback and ownership of growth." },
      { number: "06", title: "Teacher Wellbeing & Sustainability", desc: "Practical frameworks for managing workload, preventing burnout, and sustaining a long, impactful teaching career." },
    ],
    instructor: {
      name: "Prof. Elena Rossi",
      credential: "Expert in Pedagogy, Instructional Design & Teacher Education",
      bio: "Prof. Rossi leads Bodhi Learning's teacher certification tracks. With a background in curriculum development and instructional technology, she has trained over 3,000 teachers across 25 countries to design and deliver world-class learning experiences.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyIUTsjum8qCVEdt6nz-HwuaKr4MQCDuL9FX7YQ_Hv793BUZHpgNuoOZ6JO_9N6Ko8-VaGhaETanwq-lhUk2viDJDogOWY8-vfn1sVMpjwy6PteQwUqXwmG0k9Z4iK-iiALDzdKOXyxZ5tL-t9nxBUw-gS-3GFKfxoYgF4nO3U4pWA2jxrI0kMo_KLLc2Gx28vRVoPXNUTMxxoX322KZ5H_0CZ8Hy7qHouRa3NijMPWPI6ut89C11xXLmQ",
    },
    features: [
      { icon: "school", title: "CPD Accredited", desc: "Counts toward Continuing Professional Development hours." },
      { icon: "design_services", title: "Portfolio", desc: "Build a professional teaching portfolio throughout the course." },
      { icon: "diversity_3", title: "Peer Community", desc: "Join a global network of educators for ongoing collaboration." },
      { icon: "verified", title: "Certificate", desc: "Internationally recognized teacher development certificate." },
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
