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
export const VOLUNTEERS = [
  {
    name: 'Meera Sharma',
    role: 'Weekend Mentor',
    location: 'Lucknow',
    avatar: 'MS',
    avatarColor: 'bg-violet-100 text-violet-700',
    doing: 'Teaching basic mathematics and science to Class 7–9 students at a government school every Saturday.',
    contribution: '120+ students coached',
    tag: 'Education',
    tagColor: 'bg-emerald-100 text-emerald-700',
    since: '2022',
    quote: 'I came to teach. I left having learnt far more about resilience.',
  },
  {
    name: 'Arjun Verma',
    role: 'Career Counselor',
    location: 'Kanpur',
    avatar: 'AV',
    avatarColor: 'bg-sky-100 text-sky-700',
    doing: 'Conducting monthly group sessions for Class 12 students on engineering and BCA career paths.',
    contribution: '80+ counseling sessions',
    tag: 'Career',
    tagColor: 'bg-sky-100 text-sky-700',
    since: '2021',
    quote: 'One good conversation at the right time can change everything.',
  },
  {
    name: 'Priya Nair',
    role: 'Elder Care Companion',
    location: 'Lucknow',
    avatar: 'PN',
    avatarColor: 'bg-rose-100 text-rose-700',
    doing: 'Visiting elderly residents with Parkinson\'s twice a week — reading, talking, helping with medicine.',
    contribution: '15 seniors supported weekly',
    tag: 'Elder Care',
    tagColor: 'bg-rose-100 text-rose-700',
    since: '2023',
    quote: 'They have so much to give. We just need to show up.',
  },
  {
    name: 'Rahul Singh',
    role: 'Cyber Workshop Lead',
    location: 'Greater Noida',
    avatar: 'RS',
    avatarColor: 'bg-amber-100 text-amber-700',
    doing: 'Co-facilitating hands-on cybersecurity awareness workshops with DCiphers for rural college students.',
    contribution: '6 workshops conducted',
    tag: 'Cybersecurity',
    tagColor: 'bg-amber-100 text-amber-700',
    since: '2023',
    quote: 'Digital safety knowledge should not be a privilege.',
  },
  {
    name: 'Sunita Gupta',
    role: 'Documentation Volunteer',
    location: 'Remote',
    avatar: 'SG',
    avatarColor: 'bg-teal-100 text-teal-700',
    doing: 'Writing and editing impact stories, newsletters, and annual reports to help communicate our work.',
    contribution: '40+ stories documented',
    tag: 'Communication',
    tagColor: 'bg-teal-100 text-teal-700',
    since: '2022',
    quote: 'Stories are how the world understands change.',
  },
  {
    name: 'Dev Patel',
    role: 'Tech Volunteer',
    location: 'Remote',
    avatar: 'DP',
    avatarColor: 'bg-indigo-100 text-indigo-700',
    doing: 'Building and maintaining the foundation\'s website and digital tools pro-bono.',
    contribution: 'Full website rebuilt',
    tag: 'Technology',
    tagColor: 'bg-indigo-100 text-indigo-700',
    since: '2024',
    quote: 'Good tech should serve people who need it most.',
  },
]

export const STORIES = [
  {
    image: s1,
    name: 'Ananya, 18',
    place: 'Lucknow, Uttar Pradesh',
    title: 'From a one-room home to her first college classroom.',
    body: "Ananya's father is a daily wage worker. With a scholarship and mentorship through Sarthilife, she became the first in her family to enrol in a B.Sc programme.",
    tag: 'Education',
  },
  {
    image: s2,
    name: 'Rohit, 20',
    place: 'Govt. ITI, Kanpur',
    title: 'A government school student who now mentors juniors in cybersecurity.',
    body: 'After attending a Sarthilife–DCiphers cyber workshop, Rohit completed a 6-month track and today runs awareness sessions for younger students.',
    tag: 'Career',
  },
  {
    image: s3,
    name: 'Shanti Devi, 72',
    place: 'Indira Nagar',
    title: "Living with Parkinson's — and no longer alone.",
    body: 'Weekly companion visits, medicine support and small dignities have changed how Shanti Devi experiences her day.',
    tag: 'Elder Care',
  },
  {
    image: s4,
    name: 'Volunteer Diary',
    place: 'Meera, Engineer & Volunteer',
    title: '"I came to teach. I left having learnt far more."',
    body: 'A reflection from one of our weekend volunteers after six months of working with government school children.',
    tag: 'Volunteer',
  },
]

export const GALLERY = [
  { src: g1, cat: 'Government School Visits', alt: 'Children in a government school classroom', span: 'row-span-2' },
  { src: g2, cat: 'Student Mentorship', alt: 'Mentor speaking with students' },
  { src: g3, cat: 'Cybersecurity Workshops', alt: 'Cybersecurity workshop in progress' },
  { src: heroImg, cat: 'Community Engagement', alt: 'Community gathering' },
  { src: g4, cat: 'Elder Care Visits', alt: 'Volunteer visiting an elderly woman', span: 'row-span-2' },
  { src: careerImg, cat: 'Career Counseling', alt: 'Career counseling session' },
  { src: cyberImg, cat: 'Volunteer Activities', alt: 'Volunteers at a training event' },
]
