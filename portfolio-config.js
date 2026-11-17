/* Edit this file to update the public site. No build step.
   Set photo src to a real, owned photo when ready.
   Keep placeholders true until replaced with genuine information. */
window.PORTFOLIO_CONFIG = Object.freeze({
  profile: {
    name: "Yohannes Belai",
    firstName: "Yohannes",
    location: "Maryland / DMV",
    school: "Towson University",
    graduation: "May 2027",
    portrait: "/assets/images/yohannes-blue-sweatshirt.webp",
    portraitAlt: "Yohannes Belai in a blue sweatshirt",
    introduction: "I'm a Computer Science senior at Towson University building full-stack tools with Java, Spring Boot, React, and Python.",
    smallPrint: "Ethiopian-American"
  },
  socials: [
    {id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/yohannesbelai/"},
    {id:"github",label:"GitHub",href:"https://github.com/ybelai2"},
    {id:"email",label:"Email",href:"mailto:yohannesbelai4@gmail.com"}
  ],
  resume: "/Yohannes_Belai_Resume_2027_Grad.pdf",
  now: [
    {date:"Nov 2026",label:"Education",text:"Computer Science senior at Towson University; expected graduation May 2027."},
    {date:"Nov 2026",label:"Engineering",text:"Building and documenting full-stack and backend projects focused on study tools, data access, and applied AI."}
  ],
  interests: [
    {icon:"",label:"Maryland / DMV"},
    {icon:"",label:"CS at Towson"},
    {icon:"",label:"Pickup basketball"},
    {icon:"",label:"Watching soccer"},
    {icon:"",label:"Sci-fi and fiction"},
    {icon:"",label:"Philosophy audiobooks and podcasts"},
    {icon:"",label:"Ethiopian-American"},
    {icon:"",label:"Orthodox Christian"},
    {icon:"",label:"Gym"},
    {icon:"",label:"Long conversations"}
  ],
  conversationHooks: [
    "I play pickup and follow the NBA. Have you watched a good game lately?",
    "I read sci-fi and fiction. Send me a book recommendation.",
    "I watch soccer regularly. Which match should I watch next?",
    "I listen to philosophy podcasts and audiobooks. What should I try next?"
  ],
  starters: [
    {topic:"Basketball",question:"What NBA game have you enjoyed lately?"},
    {topic:"Soccer",question:"What soccer match would you recommend watching?"},
    {topic:"Sci-fi & fiction",question:"What sci-fi or fiction book did you finish recently?"},
    {topic:"Philosophy",question:"Which philosophy podcast or audiobook would you recommend?"},
    {topic:"Ethiopia",question:"Have you tried Ethiopian food before?"},
    {topic:"Faith",question:"Have you ever been to an Orthodox church service?"},
    {topic:"Software",question:"What app do you use most often?"},
    {topic:"The DMV",question:"Do you know a good coffee shop in the DMV?"},
    {topic:"Gym",question:"Do you lift, play a sport, or both?"},
    {topic:"Life in your 20s",question:"What has changed most for you in your twenties?"}
  ],
  // Photo slots are intentionally empty. Add src (e.g., "/photos/your-real-photo.webp")
  // and set placeholder:false only after uploading your own photo to the repository.
  photos: [
    {id:"basketball",category:"Basketball",caption:"Photo to come",src:null,alt:"",placeholder:true},
    {id:"soccer",category:"Soccer",caption:"Photo to come",src:null,alt:"",placeholder:true},
    {id:"reading",category:"Reading",caption:"Photo to come",src:null,alt:"",placeholder:true},
    {id:"friends",category:"Friends",caption:"Photo to come",src:null,alt:"",placeholder:true},
    {id:"dmv",category:"Around the DMV",caption:"Photo to come",src:null,alt:"",placeholder:true},
    {id:"culture",category:"Faith & culture",caption:"Photo to come",src:null,alt:"",placeholder:true},
    {id:"projects",category:"Projects",caption:"Photo to come",src:null,alt:"",placeholder:true},
    {id:"everyday",category:"Everyday",caption:"Photo to come",src:null,alt:"",placeholder:true}
  ],
  plans: [
    {icon:"",title:"Play basketball",detail:"Pick a court and play."},
    {icon:"",title:"Watch a match",detail:"Watch a soccer match together."},
    {icon:"",title:"Grab coffee",detail:"Coffee somewhere in the DMV."},
    {icon:"",title:"Build something",detail:"Bring an app idea to work on."},
    {icon:"",title:"Try a restaurant",detail:"Send me a restaurant recommendation."},
    {icon:"",title:"Talk faith or philosophy",detail:"Talk about church or a philosophy podcast."},
    {icon:"",title:"Study or work session",detail:"Bring coursework or a project."}
  ],
  projects: [
    {
      name:"Drill",
      eyebrow:"Full-stack study application",
      problem:"Course materials and practice questions are scattered across slide decks.",
      approach:"Parses PowerPoint slides into generated study decks and stores private courses, classes, and flashcards behind authenticated APIs.",
      technologies:["Java 21","Spring Boot","PostgreSQL","React"],
      github:"https://github.com/ybelai2/drillapi",
      live:"https://os439-frontend.vercel.app/",
      note:"Backend and frontend are documented in separate repositories."
    },
    {
      name:"SyllabiXtract",
      eyebrow:"Team-built full-stack project",
      problem:"Deadlines and exams are spread across several course syllabi.",
      approach:"Extracts structured course events from uploaded syllabi and organizes them in a user-specific calendar.",
      technologies:["React","Spring Boot","PostgreSQL","Auth0"],
      github:"https://github.com/ybelai2/SyllabiXtract",
      live:"https://syllabi-xtract.vercel.app/",
      note:"Collaborative course project."
    },
    {
      name:"VeriSource",
      eyebrow:"RAG engineering prototype",
      problem:"Language models can produce unsupported answers to document questions.",
      approach:"Retrieves relevant policy text using pgvector, then prompts a model to answer with named sources and explicit uncertainty.",
      technologies:["Python","FastAPI","PostgreSQL","pgvector"],
      github:"https://github.com/ybelai2/verisource-policy-rag",
      live:null,
      note:"Prototype, not a production-secure service."
    },
    {
      name:"Fall 2026 OS",
      eyebrow:"Personal productivity app",
      problem:"Classes, recurring time blocks, and syllabus dates need one daily view.",
      approach:"Combines course schedules and dated obligations with a recurrence engine, calendar overrides, and browser persistence.",
      technologies:["TypeScript","React","date-fns"],
      github:"https://github.com/ybelai2/fall-2026-os",
      live:"https://fall-2026-os.vercel.app/",
      note:"Single-user, browser-local storage."
    },
    {
      name:"InterviewOS",
      eyebrow:"Private full-stack project",
      problem:"Interview preparation is hard to organize around one's specific experience.",
      approach:"Supports resume intake, learning tracks, practice sessions, and saved progress.",
      technologies:["React","Supabase","PostgreSQL"],
      github:null,
      live:null,
      note:"Repository is private; no source link available."
    }
  ],
  experience: [
    {role:"Contract Software Engineer, AI Training",organization:"Alignerr",dates:"Aug 2025 - present",location:"Remote. AWS Lambda, SQS, and S3 data pipelines; Java refactoring for AI training workflows."},
    {role:"Volunteer Software Development Instructor & Technical Mentor",organization:"HBKY EOTC",dates:"Jun - Jul 2026",location:"Mentored 20+ students building mobile apps with external AI APIs"}
  ],
  principles: [
    "Build tools that solve real problems, not just impressive demos.",
    "Be clear about what works, what is experimental, and what still needs testing.",
    "Learn through repetition, deliberate practice, and honest feedback."
  ]
});
