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
    introduction: "I'm a Computer Science senior at Towson, and I build study and interview-prep tools.",
    smallPrint: "Ethiopian-American"
  },
  socials: [
    {id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/yohannesbelai/"},
    {id:"github",label:"GitHub",href:"https://github.com/ybelai2"},
    {id:"email",label:"Email",href:"mailto:yohannesbelai4@gmail.com"}
  ],
  resume: "/Yohannes_Belai_Resume_2027_Grad.pdf",
  now: [
    {date:"Oct 2026",label:"Coursework",text:"Finishing my Computer Science degree at Towson. Expected graduation: May 2027."},
    {date:"Oct 2026",label:"Projects",text:"Drill turns class PowerPoints into flashcards and quizzes. InterviewOS uses a résumé for interview prep."},
    {date:"Your update",label:"Currently reading",text:"Not added yet. What are you reading?",placeholder:true},
    {date:"Your update",label:"Currently watching",text:"Not added yet. What are you watching?",placeholder:true}
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
      name:"InterviewOS",
      eyebrow:"Interview preparation",
      problem:"Preparing for interviews using a résumé.",
      approach:"Organizes interview preparation around résumé details.",
      // Stack retained from the existing portfolio; edit as your project changes.
      technologies:["React","PostgreSQL","Supabase"],
      github:null,
      live:null,
      note:"Private repository"
    },
    {
      name:"Drill",
      eyebrow:"Study tool",
      problem:"Reviewing material spread across PowerPoint slides.",
      approach:"Turns class PowerPoints into flashcards and quizzes.",
      technologies:["Java","Spring Boot","React"],
      github:"https://github.com/ybelai2/drillapi",
      live:"https://study-cs.vercel.app/",
      note:null
    },
    {
      name:"SyllabiXtract",
      eyebrow:"Team class project",
      problem:"Deadlines are spread across multiple syllabi.",
      approach:"Pulls deadlines from several class syllabi into one calendar.",
      technologies:["Spring Boot","React","PostgreSQL"],
      github:null,
      live:null,
      note:"No public link added yet"
    }
  ],
  experience: [
    {role:"Contract Software Engineer, AI Training",organization:"Alignerr",dates:"Aug 2025 - present",location:"Remote. AWS Lambda, SQS, and S3 data pipelines; Java refactoring for AI training workflows."},
    {role:"Volunteer Software Development Instructor & Technical Mentor",organization:"HBKY EOTC",dates:"Jun - Jul 2026",location:"Mentored 20+ students building mobile apps with external AI APIs"}
  ],
  principles: [
    "Faith: note to write in my own words.",
    "Habits: note to write in my own words.",
    "Building software: note to write in my own words."
  ]
});
