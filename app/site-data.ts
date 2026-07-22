export const site = {
  name: "Chemistry Made Simple",
  teacher: "[TEACHER_FULL_NAME]",
  qualifications: "[QUALIFICATIONS]",
  experience: "[YEARS_OF_EXPERIENCE]",
  venue: "[SAFE_PUBLIC_LOCATION], Nugegoda",
  whatsapp: "[WHATSAPP_NUMBER]",
  phone: "[PHONE_NUMBER]",
  email: "[EMAIL_ADDRESS]",
  domain: "https://[DOMAIN_NAME]",
};

export type PageData = {
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  sections: { title: string; text: string; bullets?: string[] }[];
  cta?: string;
};

export const programmes = [
  { slug: "edexcel-igcse-chemistry-classes-nugegoda", label: "IGCSE Chemistry", detail: "Build strong concepts, calculation confidence and exam-ready answers." },
  { slug: "edexcel-ial-chemistry-classes-nugegoda", label: "IAL Chemistry", detail: "Structured AS and A2 learning across physical, inorganic and organic chemistry." },
  { slug: "edexcel-as-chemistry-classes-nugegoda", label: "AS Chemistry", detail: "A clear foundation for unit content, calculations and practical understanding." },
  { slug: "edexcel-a2-chemistry-classes-nugegoda", label: "A2 Chemistry", detail: "Advanced mechanisms, analytical methods and multi-step problem solving." },
];

const common = [
  { title: "A lesson structure that makes progress visible", text: "Lessons move from explanation to guided examples, independent practice and careful review. Students are encouraged to explain their reasoning, not simply remember a final answer." },
  { title: "Exam preparation built into learning", text: "Relevant past-paper questions are used after concepts are understood. Answers are reviewed against the language, units, working and precision expected in Edexcel assessments." },
  { title: "Class information", text: "Physical classes are held in Nugegoda. Final days, times, fees and venue details will be published once confirmed by the teacher.", bullets: ["Schedule: [CLASS_DAYS_AND_TIMES]", "Venue: [NUGEGODA_VENUE_DESCRIPTION]", "Fees: [CLASS_FEES_OR_CONTACT_FOR_FEES]"] },
];

export const pages: Record<string, PageData> = {
  "edexcel-igcse-chemistry-classes-nugegoda": {
    title: "Edexcel IGCSE Chemistry Classes in Nugegoda", eyebrow: "International GCSE programme",
    description: "Specialist Edexcel IGCSE Chemistry classes in Nugegoda with structured theory, calculations, revision and past-paper practice.",
    intro: "For students who want to understand Chemistry clearly and turn that understanding into precise, well-structured exam answers.",
    sections: [{ title: "What students will work on", text: "Coverage follows the current Pearson Edexcel specification and is checked by the teacher before lessons and resources are published.", bullets: ["Core theory and connections between topics", "Mole, formula and concentration calculations", "Practical methods, observations and evaluation", "Command words and mark-scheme expectations", "Topic-based and timed past-paper practice"] }, ...common], cta: "IGCSE Chemistry classes"
  },
  "edexcel-ial-chemistry-classes-nugegoda": {
    title: "Edexcel International A Level Chemistry Classes", eyebrow: "AS + A2 programme · Nugegoda",
    description: "Edexcel IAL Chemistry classes in Nugegoda for AS and A2 students, including theory, calculations, exam technique and past papers.",
    intro: "A connected programme for students progressing through AS and A2 Chemistry, with deliberate practice across knowledge, calculations and scientific reasoning.",
    sections: [{ title: "Connected AS and A2 preparation", text: "Teaching is organised around the current unit structure, with careful links between earlier foundations and advanced topics.", bullets: ["Physical, inorganic and organic chemistry", "Energetics, equilibria and quantitative work", "Organic reactions, mechanisms and synthesis", "Practical principles and analytical techniques", "Unit-focused and mixed past-paper practice"] }, ...common], cta: "IAL Chemistry classes"
  },
  "edexcel-as-chemistry-classes-nugegoda": {
    title: "Edexcel AS Chemistry Classes in Nugegoda", eyebrow: "Strong foundations for IAL",
    description: "Edexcel AS Chemistry classes in Nugegoda focused on concepts, calculations, topic revision and past-paper preparation.",
    intro: "AS Chemistry introduces a faster pace and greater depth. The class helps students build dependable foundations before small gaps become difficult A2 problems.",
    sections: [{ title: "AS learning priorities", text: "Each topic is taught as part of a connected model of Chemistry.", bullets: ["Atomic structure, bonding and periodicity", "Formulae, equations and quantitative chemistry", "Energetics and introductory organic chemistry", "Calculation methods with correct units", "Topic revision and exam-question analysis"] }, ...common], cta: "AS Chemistry classes"
  },
  "edexcel-a2-chemistry-classes-nugegoda": {
    title: "Edexcel A2 Chemistry Classes in Nugegoda", eyebrow: "Advanced IAL preparation",
    description: "Edexcel A2 Chemistry classes in Nugegoda with advanced theory, mechanisms, analytical techniques, calculations and exam practice.",
    intro: "A2 requires students to connect ideas across topics and communicate multi-stage reasoning accurately. Lessons are structured around that challenge.",
    sections: [{ title: "A2 learning priorities", text: "Students practise selecting and combining knowledge rather than treating every question as an isolated pattern.", bullets: ["Advanced organic reactions and mechanisms", "Synthesis routes and chemical analysis", "Equilibria, kinetics and electrochemistry", "Multi-step calculations", "Timed unit papers and targeted correction"] }, ...common], cta: "A2 Chemistry classes"
  },
  "edexcel-chemistry-revision-classes": {
    title: "Edexcel Chemistry Revision & Past-Paper Classes", eyebrow: "Focused exam preparation",
    description: "Edexcel Chemistry revision and past-paper classes in Sri Lanka for IGCSE, AS, A2 and IAL students.",
    intro: "Revision should reveal what to fix. These sessions combine timed questions, diagnosis, correction and planned reattempts.",
    sections: [{ title: "A better paper-solving cycle", text: "Students learn to use papers as feedback, not as a score-collecting exercise.", bullets: ["Choose questions matched to completed syllabus content", "Work under gradually tighter time limits", "Separate knowledge gaps from answer-technique errors", "Study marking points and acceptable scientific wording", "Maintain a mistake log and reattempt weak questions"] }, { title: "Common marks students leave behind", text: "Frequent issues include missing units, unsupported statements, incomplete observations, imprecise significant figures and answers that do not respond to the command word." }, ...common], cta: "revision and past-paper classes"
  },
  "about-the-teacher": {
    title: "About the Teacher", eyebrow: "Specialist Edexcel Chemistry education",
    description: "Meet the Edexcel Chemistry teacher behind Chemistry Made Simple in Nugegoda, Sri Lanka.",
    intro: "This page is ready for the teacher’s verified professional biography. No qualification or experience claim will be published until confirmed.",
    sections: [{ title: site.teacher, text: `${site.qualifications} · ${site.experience}`, bullets: ["[TEACHING_EXPERIENCE]", "[AREAS_OF_CHEMISTRY_EXPERTISE]", "[TEACHING_PHILOSOPHY]"] }, { title: "A message to students and parents", text: "[Add a short, genuine message explaining how the teacher helps students understand difficult ideas and prepare responsibly for examinations.]" }], cta: "classes"
  },
  "class-schedule": {
    title: "Edexcel Chemistry Class Schedule", eyebrow: "Nugegoda classes",
    description: "View the Edexcel IGCSE, AS, A2 and IAL Chemistry class schedule in Nugegoda.",
    intro: "The timetable below is intentionally marked for confirmation. Contact the teacher to check current availability.",
    sections: programmes.map(p => ({ title: p.label, text: "[CLASS_DAYS_AND_TIMES]", bullets: [`Venue: ${site.venue}`, "Type: Physical class", "Availability: Contact to confirm"] })), cta: "class availability"
  },
  "student-results-testimonials": {
    title: "Student Results & Testimonials", eyebrow: "Evidence, shared responsibly",
    description: "Verified student results and testimonials for Edexcel Chemistry classes in Nugegoda.",
    intro: "Only genuine feedback and results shared with permission will appear here. Student privacy comes first.",
    sections: [{ title: "Testimonials coming soon", text: "[TESTIMONIALS]" }, { title: "Student progress", text: "[STUDENT_RESULTS]" }, { title: "Publishing standard", text: "Names, photographs, messages and results will be anonymised or published only with clear permission. Nothing on this page is fabricated." }], cta: "classes"
  },
  "contact": {
    title: "Contact & Enrolment", eyebrow: "Ask about a class",
    description: "Contact the teacher about Edexcel Chemistry classes in Nugegoda for IGCSE, AS, A2 and IAL students.",
    intro: "Tell us the student’s level and the programme you are interested in. The teacher will confirm the suitable class, schedule, venue and fees.",
    sections: [{ title: "Contact details", text: `WhatsApp: ${site.whatsapp}\nPhone: ${site.phone}\nEmail: ${site.email}` }, { title: "Helpful details to include", text: "Please share only what is needed for the enquiry.", bullets: ["Parent or student name", "Current grade and Edexcel programme", "Preferred class", "A short question or message"] }, { title: "Privacy", text: "Enquiry details should be used only to respond about classes. Read the privacy policy for the full template." }], cta: "enrolment"
  },
  "privacy-policy": {
    title: "Privacy Policy", eyebrow: "Template pending teacher approval",
    description: "Privacy policy for the Chemistry Made Simple website and class enquiries.",
    intro: "This template must be reviewed and completed with final contact, analytics and retention details before publication.",
    sections: [{ title: "Information collected", text: "The contact process may collect a name, phone number, student level and message when voluntarily provided." }, { title: "How information is used", text: "Information is used to answer class enquiries, discuss enrolment and provide requested class information. It should not be sold." }, { title: "WhatsApp and external services", text: "Following a WhatsApp link moves the visitor to a service governed by WhatsApp’s own terms and privacy policy. Analytics and cookies will be described here if enabled." }, { title: "Retention and questions", text: "[DATA_RETENTION_PERIOD]. Privacy questions: [EMAIL_ADDRESS]." }]
  },
};

export const articles: Record<string, PageData & { category: string; date: string }> = {
  "how-to-prepare-for-edexcel-igcse-chemistry": { category: "IGCSE", date: "Teacher review required", title: "How to Prepare for Edexcel IGCSE Chemistry", eyebrow: "IGCSE study guide", description: "A practical Edexcel IGCSE Chemistry revision plan built around understanding, retrieval, calculations and past-paper review.", intro: "Good preparation is a cycle: understand a topic, recall it without notes, apply it to unfamiliar questions, diagnose errors, then revisit it later.", sections: [{ title: "Start with a syllabus map", text: "List the topics you have completed and rate each as secure, developing or not yet learned. Use the current Pearson specification as a checklist, not a source to memorise word for word." }, { title: "Use four types of practice", text: "A balanced week includes recall, explanation, calculations and exam questions.", bullets: ["Close the book and retrieve key ideas", "Explain processes in complete scientific sentences", "Practise calculations with working and units", "Answer topic questions before attempting full papers"] }, { title: "Review errors properly", text: "For each mistake, identify whether the cause was missing knowledge, weak application, calculation process, command-word interpretation or careless presentation. Schedule a reattempt rather than merely reading the answer." }], cta: "IGCSE Chemistry classes" },
  "common-edexcel-igcse-chemistry-mistakes": { category: "IGCSE", date: "Teacher review required", title: "Common Mistakes in Edexcel IGCSE Chemistry Exams", eyebrow: "Exam technique", description: "Common Edexcel IGCSE Chemistry exam mistakes and a practical method for correcting them.", intro: "Knowing the topic is necessary, but marks also depend on answering the exact question with sufficient scientific precision.", sections: [{ title: "Small presentation errors", text: "Units, significant figures, state symbols and clearly shown working can matter. Build a final-check routine that is short enough to use under exam conditions." }, { title: "Weak explanation chains", text: "An explanation often needs a complete cause-and-effect link. Avoid isolated keywords: state what changes, why it changes and how that leads to the outcome." }, { title: "Ignoring the question’s evidence", text: "When a table, graph or experimental result is supplied, refer to it directly. Generic theory may be true but still fail to answer the question." }, { title: "Turn mistakes into a checklist", text: "Tag errors in a log and review recurring patterns weekly. The teacher should add authentic classroom examples before publication." }], cta: "IGCSE Chemistry classes" },
  "how-to-use-edexcel-chemistry-mark-schemes": { category: "Exam preparation", date: "Teacher review required", title: "How to Use Edexcel Chemistry Mark Schemes", eyebrow: "Learn from past papers", description: "Learn how to use Edexcel Chemistry mark schemes to improve scientific wording, calculations and exam answers.", intro: "A mark scheme is most useful after an honest attempt. Its purpose is to show what evidence an examiner rewards—not to provide sentences to memorise blindly.", sections: [{ title: "Mark your answer in layers", text: "First check the final conclusion. Then inspect each marking point, the scientific terms used, calculation working and any units or significant figures." }, { title: "Write an improved answer", text: "After identifying the gap, close the mark scheme and rewrite the response in your own scientifically accurate words." }, { title: "Understand alternatives", text: "Mark schemes may accept several expressions of the same idea. Focus on the concept and required precision. Ask the teacher where the published guidance is unclear." }, { title: "Reattempt later", text: "Return to the question after several days. A successful delayed attempt is stronger evidence of learning than immediate copying." }], cta: "revision and past-paper classes" },
  "edexcel-chemistry-past-paper-strategy": { category: "Exam preparation", date: "Teacher review required", title: "Edexcel Chemistry Past-Paper Strategy", eyebrow: "Practice with purpose", description: "A practical Edexcel Chemistry past-paper strategy using topic practice, timed papers, mistake logs and reattempts.", intro: "The best number of papers is not the largest number. One carefully reviewed paper can improve performance more than several rushed attempts.", sections: [{ title: "Begin with topic-based questions", text: "Use targeted questions after learning a topic. This checks whether you can recognise and apply the idea in exam language." }, { title: "Move to mixed and full papers", text: "Once most content is covered, introduce mixed sets and then full timed papers. Recreate exam timing gradually rather than too early." }, { title: "Use a mistake log", text: "Record the topic, question type, cause of error, corrected principle and reattempt date. Keep entries short enough to review." }, { title: "Track quality, not just scores", text: "Look for fewer repeated errors, clearer working, better timing and more precise explanations. Scores become meaningful when paper difficulty and conditions are comparable." }], cta: "revision and past-paper classes" },
  "edexcel-as-vs-a2-chemistry": { category: "IAL", date: "Teacher review required", title: "AS and A2 Chemistry: What Is the Difference?", eyebrow: "Edexcel IAL explained", description: "Understand the difference between Edexcel AS and A2 Chemistry and how students can prepare for each stage.", intro: "AS establishes essential models and methods. A2 increases depth, integration and the demand to select knowledge across several topics.", sections: [{ title: "What changes after AS?", text: "A2 work commonly requires longer reasoning chains, more advanced organic pathways, analytical interpretation and calculations that combine several steps." }, { title: "Why AS foundations matter", text: "Ideas such as bonding, amount of substance, energetics and organic conventions remain active. Weak foundations can make advanced questions feel disconnected." }, { title: "How study should evolve", text: "AS students should develop consistent retrieval and calculation habits. A2 students should add synthesis maps, mixed-topic questions and explanation practice that links multiple principles." }, { title: "Choosing a class", text: "Check the exact programme and unit coverage, class pace, feedback method and past-paper plan. Contact the teacher to discuss the student’s current stage." }], cta: "IAL Chemistry classes" },
};
