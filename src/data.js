import heroImg from './assets/hero-classroom.jpg' 
import elderImg from './assets/elder-care.jpg'
import careerImg from './assets/career-counseling.jpg'
import founderImg from './assets/founder.jpg'
import cyberImg from './assets/cyber-training.jpg'
import g1 from './assets/gallery-1.jpg'
import g2 from './assets/gallery-2.jpg'
import g3 from './assets/gallery-3.jpg'
import g4 from './assets/gallery-4.jpg'
import s1 from './assets/story-1.jpg'
import s2 from './assets/story-2.jpg'
import s3 from './assets/story-3.jpg'
import s4 from './assets/story-4.jpg'

export { heroImg, elderImg, careerImg, founderImg, cyberImg, g1, g2, g3, g4, s1, s2, s3, s4 }

export const DONATION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc-Sarthilife-donation-placeholder/viewform'

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Problem', href: '#problem' },
  { label: 'Mission', href: '#mission' },
  { label: 'Impact', href: '#impact' },
  { label: 'Programs', href: '#programs' },
  { label: 'Stories', href: '#stories' },
  { label: 'Founder', href: '#founder' },
  { label: 'Volunteers', href: '#our-volunteers' },
  { label: 'Contact', href: '#contact' },
]

export const IMPACT = [
  { value: 100, suffix: '+', label: 'Students Guided' },
  { value: 50, suffix: '+', label: 'Career Counseling Sessions' },
  { value: 10, suffix: '+', label: 'Scholarships Supported' },
  { value: 50, suffix: '+', label: 'Elderly Lives Impacted' },
  { value: 50, suffix: '+', label: 'Partner Institutions' },
  { value: 25, suffix: '+', label: 'Years of Industry Experience' },
]

// Problem → Solution pairs shown in the quick-scan section
export const PROBLEMS = [
  {
    emoji: '🎓',
    problem: 'First-generation students drop out before college',
    solution: 'We sponsor them — books, fees, mentorship — until graduation.',
    color: 'bg-emerald-50 border-emerald-200',
    accent: 'text-emerald-700',
  },
  {
    emoji: '🧭',
    problem: 'Class 12 students have no idea what career to choose',
    solution: 'Honest, experience-led counselling sessions, free of charge.',
    color: 'bg-amber-50 border-amber-200',
    accent: 'text-amber-700',
  },
  {
    emoji: '🔒',
    problem: 'Small-town students never get exposure to cybersecurity',
    solution: 'Industry-led workshops with DCiphers — 100% fee-free.',
    color: 'bg-sky-50 border-sky-200',
    accent: 'text-sky-700',
  },
  {
    emoji: '🧓',
    problem: 'Elderly citizens live alone with illness and no companionship',
    solution: 'Weekly visits, medicine support, and a caring presence.',
    color: 'bg-rose-50 border-rose-200',
    accent: 'text-rose-700',
  },
]

// Founder company logos — text-based since we don't have actual logo files
export const FOUNDER_COMPANIES = [
  { name: 'Intec Infonet', years: '2001–05' },
  { name: 'Huawei 3Com', years: '2005–07', role: 'Regional Manager' },
  { name: 'Radware', years: '2007–12', role: 'Regional Head' },
  { name: 'Symantec', years: '2012–19', role: 'Regional Head' },
  { name: 'F5', years: '2019–22', role: 'Head – Strategic Alliances' },
  { name: 'Trellix', years: '2023–Now', role: 'Sales Director' },
]

// Our volunteers
// Our volunteers
export const VOLUNTEERS = [
  {
    name: 'Megha Srivastava',
    role: 'Education Mentor & Academic Guide',
    location: 'India',
    avatar: 'MS',
    avatarColor: 'bg-violet-100 text-violet-700',
    doing:
      'B.Tech, M.Sc and PhD qualified mentor guiding students through academics, higher education decisions and long-term learning goals.',
    contribution: 'Academic mentoring',
    tag: 'Education',
    tagColor: 'bg-emerald-100 text-emerald-700',
    since: 'Volunteer',
    quote:
      'Helping students discover their strengths and move confidently towards their dreams.',
  },


  {
    name: 'Aditya Srivastava',
    role: 'Career & Corporate Mentor',
    location: 'Singapore / India',
    avatar: 'AS',
    avatarColor: 'bg-sky-100 text-sky-700',
    doing:
      'With academic exposure from Symbiosis and NUS Singapore, along with professional experience at Deloitte, mentoring young adults for higher education, career opportunities and corporate soft skills.',
    contribution: 'Career guidance & soft skills',
    tag: 'Career',
    tagColor: 'bg-sky-100 text-sky-700',
    since: 'Volunteer',
    quote:
      'The right guidance at the right stage can open doors students never imagined.',
  },


  {
    name: 'Aditi Srivastava',
    role: 'Digital Skills Mentor',
    location: 'India',
    avatar: 'AD',
    avatarColor: 'bg-indigo-100 text-indigo-700',
    doing:
      'MBA in Digital Marketing from Symbiosis, supporting students with digital awareness, communication skills and modern career readiness.',
    contribution: 'Digital mentoring',
    tag: 'Digital Skills',
    tagColor: 'bg-indigo-100 text-indigo-700',
    since: 'Volunteer',
    quote:
      'Digital knowledge gives young minds confidence for the future.',
  },


  {
    name: 'Meera Srivastava',
    role: 'Student Development Mentor',
    location: 'India',
    avatar: 'MS',
    avatarColor: 'bg-rose-100 text-rose-700',
    doing:
      'MA and B.Ed qualified educator helping students through learning support, guidance and personal development.',
    contribution: 'Student support',
    tag: 'Education',
    tagColor: 'bg-rose-100 text-rose-700',
    since: 'Volunteer',
    quote:
      'Education becomes meaningful when every child receives personal attention.',
  },


  {
    name: 'Sarita Kishore',
    role: 'Academic Mentor',
    location: 'India',
    avatar: 'SK',
    avatarColor: 'bg-teal-100 text-teal-700',
    doing:
      'M.Sc and B.Ed qualified mentor supporting students with education guidance and academic confidence.',
    contribution: 'Academic support',
    tag: 'Education',
    tagColor: 'bg-teal-100 text-teal-700',
    since: 'Volunteer',
    quote:
      'Every student deserves someone who believes in their potential.',
  },


  {
    name: 'Amanshree Kishore',
    role: 'Higher Education & Career Mentor',
    location: 'Delhi',
    avatar: 'AK',
    avatarColor: 'bg-amber-100 text-amber-700',
    doing:
      'B.Tech and MBA from FMS Delhi, guiding students with career decisions, higher education planning and professional growth.',
    contribution: 'Career mentoring',
    tag: 'Career',
    tagColor: 'bg-amber-100 text-amber-700',
    since: 'Volunteer',
    quote:
      'Career clarity can transform ambition into achievement.',
  },


  {
    name: 'Abhay Kishore',
    role: 'Professional Development Mentor',
    location: 'India',
    avatar: 'AK',
    avatarColor: 'bg-orange-100 text-orange-700',
    doing:
      'LLB and MBA from IIM Udaipur, mentoring students on career choices, leadership skills and professional opportunities.',
    contribution: 'Professional guidance',
    tag: 'Mentorship',
    tagColor: 'bg-orange-100 text-orange-700',
    since: 'Volunteer',
    quote:
      'Mentorship bridges the gap between dreams and direction.',
  },


  {
    name: 'Dr Pavitra Srivastava',
    role: 'Health & Community Support Mentor',
    location: 'India',
    avatar: 'PS',
    avatarColor: 'bg-pink-100 text-pink-700',
    doing:
      'Supporting community wellbeing initiatives with a focus on care, awareness and compassionate support.',
    contribution: 'Community wellbeing',
    tag: 'Community',
    tagColor: 'bg-pink-100 text-pink-700',
    since: 'Volunteer',
    quote:
      'Care and compassion create the strongest communities.',
  },
];
 export const STORIES = [
  {
    image: s1,
    name: 'Ananya, 18',
    place: 'Lucknow, Uttar Pradesh',
    title: 'From a one-room home to her first college classroom.',
    body:
      "Ananya's father is a daily wage worker. With a scholarship and mentorship through SarthiLife, she became the first in her family to enrol in a B.Sc programme.",
    tag: 'Education',
  },

  {
    image: s2,
    name: 'Rohit, 20',
    place: 'Govt. ITI, Kanpur',
    title:
      'A government school student who now mentors juniors in cybersecurity.',
    body:
      'After attending a SarthiLife–DCiphers cyber workshop, Rohit completed a 6-month track and today runs awareness sessions for younger students.',
    tag: 'Cybersecurity',
  },

  {
    image: s3,
    name: 'Shanti Devi, 72',
    place: 'Indira Nagar',
    title:
      "Living with Parkinson's — and no longer alone.",
    body:
      'Weekly companion visits, medicine support and small dignities have changed how Shanti Devi experiences her day.',
    tag: 'Elder Care',
  },

  {
    image: s4,
    name: 'Volunteer Story',
    place: 'SarthiLife Volunteer',
    title:
      '"Small efforts create meaningful change."',
    body:
      'A reflection from our volunteers working towards education, mentorship and community support.',
    tag: 'Volunteer',
  },
];
export const GALLERY = [
  { src: g1, cat: 'Government School Visits', alt: 'Children in a government school classroom', span: 'row-span-2' },
  { src: g2, cat: 'Student Mentorship', alt: 'Mentor speaking with students' },
  { src: g3, cat: 'Cybersecurity Workshops', alt: 'Cybersecurity workshop in progress' },
  { src: heroImg, cat: 'Community Engagement', alt: 'Community gathering' },
  { src: g4, cat: 'Elder Care Visits', alt: 'Volunteer visiting an elderly woman', span: 'row-span-2' },
  { src: careerImg, cat: 'Career Counseling', alt: 'Career counseling session' },
  { src: cyberImg, cat: 'Volunteer Activities', alt: 'Volunteers at a training event' },
]
