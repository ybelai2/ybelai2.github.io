/* Edit this file to update the public site. No build step.
   Set photo src to a real, owned photo when ready.
   Keep placeholders true until replaced with genuine information. */
window.PORTFOLIO_CONFIG = Object.freeze({
  profile: {
    name: "Yohannes Belai",
    firstName: "Yohannes",
    age: 23,
    location: "Maryland / DMV",
    school: "Towson University",
    graduation: "May 2027",
    portrait: "/assets/images/yohannes-profile-formal.webp",
    portraitAlt: "Yohannes Belai in a navy suit",
    introduction: "Computer Science student, builder, pickup basketball player. Trying to live an interesting life and meet good people along the way.",
    smallPrint: "Ethiopian-American · Maryland / DMV"
  },
  socials: [
    {id:"instagram",label:"Instagram",href:"https://www.instagram.com/yohannes.belai/"},
    {id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/yohannesbelai/"},
    {id:"github",label:"GitHub",href:"https://github.com/ybelai2"},
    {id:"email",label:"Email",href:"mailto:yohannesbelai4@gmail.com"}
  ],
  resume: "/Yohannes_Belai_Resume_2027_Grad.pdf",
  now: [
    {date:"Oct 2026",label:"These days",text:"Finishing senior Computer Science coursework at Towson University."},
    {date:"Oct 2026",label:"Building",text:"Exploring ideas through software projects."},
    {date:"Your update",label:"Currently reading",text:"Add the book you're reading.",placeholder:true},
    {date:"Your update",label:"Currently watching",text:"Add a show, film, or soccer match.",placeholder:true}
  ],
  interests: [
    {icon:"📍",label:"Maryland / DMV"},
    {icon:"🎓",label:"CS at Towson"},
    {icon:"🏀",label:"Always down for pickup"},
    {icon:"⚽",label:"Watching soccer"},
    {icon:"📚",label:"Sci-fi and fiction"},
    {icon:"🎧",label:"Philosophy on audio"},
    {icon:"🇪🇹",label:"Ethiopian-American"},
    {icon:"☦️",label:"Orthodox Christian"},
    {icon:"🏋️",label:"Gym"},
    {icon:"☕",label:"Conversations over small talk"}
  ],
  conversationHooks: [
    "I can talk basketball for an unreasonable amount of time.",
    "Read anything good lately? Sci-fi is my weakness.",
    "Tell me your hottest soccer take. I'll argue back.",
    "Got a philosophy podcast or audiobook I should hear?"
  ],
  starters: [
    {topic:"Basketball",question:"What's your most controversial basketball take?"},
    {topic:"Soccer",question:"What's one soccer opinion you'd defend to the end?"},
    {topic:"Sci-fi & fiction",question:"Which fictional world would you actually want to live in?"},
    {topic:"Philosophy",question:"What's a philosophy podcast or audiobook worth hearing?"},
    {topic:"Ethiopia",question:"What's one part of Ethiopian culture you think more people should know?"},
    {topic:"Faith",question:"Has a faith conversation ever changed your mind about something?"},
    {topic:"Software",question:"What everyday problem would you want an app to fix?"},
    {topic:"The DMV",question:"Where in the DMV should I go next?"},
    {topic:"Gym",question:"What's the one exercise you'd never skip?"},
    {topic:"Life in your 20s",question:"What's something your twenties are teaching you?"}
  ],
  // Photo slots are intentionally empty. Add src (e.g., "/photos/your-real-photo.webp")
  // and set placeholder:false only after uploading your own photo to the repository.
  photos: [
    {id:"basketball",category:"Basketball",caption:"A moment from the court.",src:null,alt:"",placeholder:true},
    {id:"soccer",category:"Soccer",caption:"Match-day memories.",src:null,alt:"",placeholder:true},
    {id:"reading",category:"Reading",caption:"A good book, eventually.",src:null,alt:"",placeholder:true},
    {id:"friends",category:"Friends",caption:"A moment worth keeping.",src:null,alt:"",placeholder:true},
    {id:"dmv",category:"Around the DMV",caption:"One of my favorite local spots.",src:null,alt:"",placeholder:true},
    {id:"culture",category:"Faith & culture",caption:"A moment from my roots.",src:null,alt:"",placeholder:true},
    {id:"projects",category:"Projects",caption:"Something in progress.",src:null,alt:"",placeholder:true},
    {id:"everyday",category:"Everyday",caption:"The ordinary stuff.",src:null,alt:"",placeholder:true}
  ],
  plans: [
    {icon:"🏀",title:"Play basketball",detail:"A pickup run sounds good."},
    {icon:"⚽",title:"Watch a match",detail:"A soccer game and a few takes."},
    {icon:"☕",title:"Grab coffee",detail:"Something simple, good conversation."},
    {icon:"💻",title:"Build something",detail:"An idea and a laptop."},
    {icon:"🍜",title:"Try a restaurant",detail:"DMV recommendations welcome."},
    {icon:"📖",title:"Talk faith or philosophy",detail:"A conversation with some substance."},
    {icon:"📚",title:"Study or work session",detail:"Get a few things done together."}
  ],
  projects: [
    {
      name:"InterviewOS",
      eyebrow:"Interview preparation",
      problem:"Starting interview preparation from a résumé.",
      approach:"Turns a résumé into focused interview prep.",
      // Stack retained from the existing portfolio; edit as your project changes.
      technologies:["React","PostgreSQL","Supabase"],
      github:null,
      live:null,
      note:"Private repository"
    },
    {
      name:"Drill",
      eyebrow:"Study tool",
      problem:"Turning class slides into something useful to study.",
      approach:"Converts PowerPoints into flashcards and quizzes.",
      technologies:["Java","Spring Boot","React"],
      github:"https://github.com/ybelai2/drillapi",
      live:"https://study-cs.vercel.app/",
      note:null
    },
    {
      name:"SyllabiXtract",
      eyebrow:"Team class project",
      problem:"Syllabus deadlines scattered across classes.",
      approach:"Brings those dates into one calendar.",
      technologies:["Spring Boot","React","PostgreSQL"],
      github:null,
      live:null,
      note:"Links available once confirmed"
    }
  ],
  experience: [
    {role:"Contract Software Engineer, AI Training",organization:"Alignerr",dates:"Aug 2025 – present",location:"Remote"},
    {role:"Volunteer Software Development Instructor & Technical Mentor",organization:"HBKY EOTC",dates:"Jun – Jul 2026",location:"Mentored 20+ students building mobile apps with external AI APIs"}
  ],
  principles: [
    "Faith over mood.",
    "Consistency over intensity.",
    "Build more than you consume."
  ]
});
