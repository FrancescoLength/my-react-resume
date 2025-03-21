import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.webp';
import porfolioImage3 from '../images/portfolio/portfolio-3.webp';
import porfolioImage4 from '../images/portfolio/portfolio-4.webp';
import porfolioImage5 from '../images/portfolio/portfolio-5.webp';
import porfolioImage6 from '../images/portfolio/portfolio-6.webp';
import porfolioImage7 from '../images/portfolio/portfolio-7.webp';
import profilepic from '../images/profilepic.webp';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Francesco Schino',
  description: "Francesco Schino's react resume website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Francesco Schino`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Quality Manager | Project Manager | Software Engineer</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I specialize in process optimization, strategic planning, and aligning technical solutions with business objectives
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Quality Manager with a background in Software Engineering and Project Management. Skilled in Python and JavaScript, I thrive on problem-solving and innovation. Passionate about technology, I continuously explore new trends and advancements. Outside of work, I enjoy building FPV drones, riding my motorbike, and discovering new countries and cultures.`,
  aboutItems: [
    {label: 'Location', text: 'Bristol, UK', Icon: MapIcon},
    {label: 'Age', text: '36', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian (UK settled status)', Icon: FlagIcon},
    {label: 'Interests', text: 'Technology, Motorcycles, Traveling', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Bari', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Self Employed / Contractor', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Hard Skills',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'Bash Scripting',
        level: 6,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'C',
        level: 5,
      },
      {
        name: 'C++',
        level: 5,
      },
      {
        name: 'C#',
        level: 6,
      },
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'HTML',
        level: 8,
      },
      {
        name: 'CSS',
        level: 8,
      },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {
        name: 'Creative Problem-Solving',
        level: 9,
      },
      {
        name: 'Strategic Vision',
        level: 8,
      },
      {
        name: 'Team Structuring & Leadership',
        level: 8,
      },
      {
        name: 'Client Management',
        level: 9,
      },
      {
        name: 'Functional-to-Technical Requirement Mapping',
        level: 9,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Italian',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Gym Automatic Booking System',
    description: 'GymAutomaticBookingSystem aka GABS is an automatic gym class booking system, developed in Python using Selenium to automate the interaction with the booking website of a popular gym in Bristol. ',
    url: 'https://github.com/FrancescoLength/GABS',
    image: porfolioImage1,
  },
  {
    title: '99bars',
    description: 'A very first React Native app - Simple puzzle game.  Essentially, the game involves a 3x3 matrix with elements that can toggle between bars, rounds, and crosses. Upon starting the game, bars are initially displayed. When you tap on the bars, they transform into rounds. However, if you fail to touch the bars in time, they evolve into crosses, marking the end of the game. The objective of the game is to tap all the bars before they transition into crosses. It\'s a timing-based challenge where success hinges on speed and agility. To emerge victorious, players must swiftly touch each bar presented before it transforms crosses.',
    url: 'https://github.com/FrancescoLength/99bars',
    image: porfolioImage2,
  },
  {
    title: 'PacMan Sensor Game',
    description: 'An article was published about a prototype I developed an emotion extrapolator that analyzes heart rate and skin conductance to identify emotions experienced while playing Pac-Man. The prototype was created using Arduino and Matlab, with the data collected from the sensors processed and analyzed to determine the player’s emotional state. The project was a success, with the results published in an article on Startup Italia.',
    url: 'https://startupitalia.eu/uncategorized/uno-studente-di-bari-ha-mappato-le-emozioni-umane-giocando-a-pacman/',
    image: porfolioImage3,
  },
  {
    title: 'DIY Lego Tablet',
    description: 'An article featuring my self-built tablet prototype, developed in collaboration with La Scuola Open Source. The device is based on a Linux-embedded board and includes a touchscreen, battery, and Arduino-compatible connections for rapid prototyping.',
    url: 'https://www.domusweb.it/it/design/2015/11/16/sos_una_scuola_che_si_occupa_di_futuro_.html',
    image: porfolioImage4,
  },
  {
    title: 'Emotional recognition system through physiological signal processing',
    description: 'An article by La Repubblica covering my thesis project: a sensor system that analyzes physiological signals, such as heart rate and skin conductance, to assess user satisfaction and emotional response. The technology was designed to evaluate the efficiency of public administration services.',
    url: 'https://www.repubblica.it/tecnologia/2015/05/28/news/soddisfatto_o_arrabiato_il_sensore_per_valutare_l_efficienza_della_pa-115463006/',
    image: porfolioImage5,
  },
  {
    title: 'My high-performance freestyle and racing FPV build',
    description: 'Designed for durability, agility, and top-tier flight performance.\n Frame: ImpulseRC Apex,\n  Flight Controller: SpeedyBee F7 V2,\n  ESC: SkyStars Kramam KM50A 3-6S BLHeli_S 4-in-1 ESC,\n  Motors: iFlight Xing2 2306 1755KV,\n  Receiver: TBS Crossfire,\n  VTX: DJI O3 Air Unit,\n  FPV Goggles: DJI Goggles,\n  RC Controller: TBS Tango 2 Pro',
    url: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio-6.98f278cf.webp&w=1920&q=75',
    image: porfolioImage6,
  },
  {
    title: 'My personal website',
    description: 'Built with React.js, Typescript, Next.js, and styled with Tailwind css and Heroicons. The website is hosted on Vercel and the source code is available on GitHub. This is a fork of the React Resume Template created by tbakerx.',
    url: 'https://github.com/FrancescoLength/my-react-resume',
    image: porfolioImage7,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2008 – 2015',
    location: 'Bari, Italy',
    title: 'BSc Computer Science @ University of Bari',
    content: <p>Algorithms and data structures, Databases, Software Engineering, Computer Networks, Programming Languages, Human-Computer Interaction, Web services.</p>,
  },
  {
    date: '2002 – 2007',
    location: 'Bari, Italy',
    title: 'Diploma in Commercial Technical @ ITC Marco Polo',
    content: <p>Computer use and operation, business management procedures, office automation, adoption of appropriate communication techniques.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2023 – Present',
    location: 'Remote',
    title: 'Quality Manager @ Coding Giants',
    content: (
        <ul>
          <li>- Establishing the Italian branch of Coding Giants, working directly with the founders and Italian Country Manager.</li>
          <li>- Developing and implementing the quality management system, including the creation of a quality manual, procedures, and work instructions.</li>
          <li>- Risks mitigation to ensure smooth operations.</li>
          <li>- Ensuring compliance with all legal requirements and regulations.</li>
          <li>- Created and managed the recruitment process, including job postings, interviews, onboarding and offboarding.</li>
          <li>- Led the creation and development of a team of more than 70 team members.</li>
          <li>- Tracking progress and task allocation with agile methodologies (SCRUM)</li>
          <li>- Continuous improved of organizational processes, ensuring high service quality and KPI achievement.</li>
          <li><b>Tools and Platforms Used:</b> Trello, Traffit, Teamtailor, Notion, Discord, DocuSign, CRM, Tableau, ProofHub, Gmail, Meet, Calendar, Drive, Docs, Sheets, Slides, Keep, Apps Script, Python</li>
        </ul>
    ),
  },
  {
    date: 'May 2018 – April 2023',
    location: 'Bristol, UK',
    title: 'Software Engineer @ Eurofins Digital Testing',
    content: (
        <ul>
          <li>- Designed and implemented test plans, automated and manual test cases, and test materials, including DASH-format media, for the broadband and broadcasting industry (HbbTv), serving clients such as BBC and Tivùsat.</li>
          <li>- Developed and reviewed scripts, with expertise in code debugging and unit testing. Created tools for validation, verification, and integration.</li>
          <li>- Led a team of 8 engineers and supported project management efforts, achieving a 40% reduction in delays within the issue tracking system (Redmine).</li>
          <li>- Managed audit requests and oversaw the '4K HDR Ultra HD' project for the certification requests for clients such as LG, Hisense, and Panasonic.</li>
          <li>- Developed features for a QA analyzer app in C# to process Interoperable Mastering Format (IMF) and Material Exchange Format (MXF) media, supporting customers like HBO in validating content for Netflix publication and enhancing the infrastructure with Shell and batch scripting.</li> 
          <li>- Worked with Windows and Linux servers, using DevOps tools for configuration and maintenance.</li>
          <li>- Gained experience in the SDLC and CI, with agile methodologies (SCRUM).</li> 
          <li>- Conducted training sessions for new employees and provided ongoing support for junior team members.</li>   
          <li><b>Tools and Platforms Used:</b> Javascript, Python, C#, Pandas, ElementTree, Unittest, Selenium, YAML, GWT, Regex, XML, JSON, Jira, Jenkins, VSCode, SVN, Git, Postman, SoapUI, FFmpeg, MediaInfo, Video Encoding, DRM (PlayReady, Marlin, ClearKey, Widevine), Redmine.</li>
        </ul>
    ),
  },
  {
    date: 'November 2016 – July 2017',
    location: 'Rome, Italy',
    title: 'Cyber Security Analyst @ Deloitte',
    content: (
        <ul>
          <li>- Technical and functional analyst in Risk Advisory at Leonardo (client), focusing on GRC platform transformation and Cyber Security.</li>
          <li>- Conducted risk assessments and implemented security measures, including the development of a security dashboard for the SOC.</li>
          <li>- Worked with standards such as ISO/IEC 27001, NIST Cybersecurity Framework, COBIT, and ITIL.</li>
          <li>- Translated functional requirements into technical specifications for smooth project execution.</li>
          <li>- Created release manuals, trained clients, and managed work progress under tight deadlines in areas such as Cyber Defence, Cyber Resilience.</li>
          <li><b>Tools and Platforms Used:</b> RSA Archer, Javascript, jQuery, XSLT, CSS, XML, HTML, MS Excel, MS PowerPoint.</li>
        </ul>
    ),
  },
  {
    date: 'October 2015 – November 2016',
    location: 'Rome, Italy',
    title: 'Software Developer @ Capgemini',
    content: (
        <ul>
          <li>- Utilized Software AG products to develop IoT and Big Data solutions for Octo Telematics (client)</li>
          <li>- Analyzed and managed applications for international telephone traffic interconnection and developing components for SMS routing and configuration for Telecom Italia Sparkle (client)</li>
          <li><b>Tools and Platforms Used:</b> Java, SOAP, REST, SQL, Oracle, Maven, Tomcat, Hibernate, CSS, HTML, IoT, Linux, SVN, EPL, Mongo, Virtualization.</li>
        </ul>
    ),
  },
  {
    date: 'July 2015 – October 2015',
    location: 'Bari, Italy / Remote',
    title: 'Project Leader @ La Scuola Open Source',
    content: (
        <ul>
          <li>- Developed a custom tablet using selected electronic components, assembled and configured as an updated version of the 2014 prototype. .</li>
          <li>- The main feature includes the installation of Ubuntu OS with integrated development environments (IDEs) for Java and Python.</li>
          <li><b>Tools and Platforms Used:</b> Arduino, Raspberry Pi, IoT.</li>
        </ul>
    ),
  },
  {
    date: 'April 2015 – Jul 2015',
    location: 'Valenzano (Bari), Italy',
    title: 'Graduating student @ LaserInn',
    content: (
        <ul>
          <li>- Thesis: development of a prototype for the acquisition of physiological signals and of an act software able to extract and recognize the human emotions.</li>
          <li><b>Tools and Platforms Used:</b> Arduino, C, MATLAB, LaTeX, R, E-Health.</li>
        </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Project Manager, Eurofins Digital Testing',
      text: 'Francesco\'s support has always been incredible helpful to me, and his recent support of PM for myself/test case team has massively helped my Jira Ticket accuracy and discipline.'
    },
    {
      name: 'Practice Lead, Eurofins Digital Testing',
      text: 'Francesco has done a great job on the Olive project, and with onboarding the IMF and MXF Analyser products - taking on new challenges and technologies, proactive and taking ownership, and professional when dealing with customers. I look forward to working with him more as we start new development on the products.'
    },
    {
      name: 'Senior Software Architect, Eurofins Digital Testing',
      text: 'All the trainings you have given to me has been very helpful. You have given a great start to our training. During the initial Ligada setup, we have encountered few problem, and you have resolved almost all the issue. I have taken notice of your problem solving skills. Your approach for solving problem is very systematic, calm and focused. I really like your thinking process for tackling problems.'
    },
    {
      name: 'Graduate Software Engineer, Eurofins Digital Testing',
      text: 'You\'ve always been constructive and encouraging. Learning the ropes whilst working with you has been great and you\'re one of the reasons I\'ve come to really like working here. Even when I\'ve made mistakes you\'ve always been supportive. Great team mate and a cool head under pressure.'
    },
    {
      name: 'Cyber Security Analyst, Deloitte',
      text: 'I had the opportunity to work with Francesco for several months. He is a hard worker and an excellent team mate. He has strong technical skills and he is always willing to support the team in any moment (even under pressure or with strict deadlines approaching). He is not only a brilliant professional but also (and most important) a kind and honest person. I really enjoyed working with him and I somehow hope to meet him again in the future.'
    },
    {
      name: 'Software Engineer, LaserInn',
      text: 'Francesco worked on his thesis in close collaboration with me and my colleagues. At that time, I was able to appreciate his autonomy and his resourcefulness. He demonstrated excellent organizational skills. He has also shown that he is able to integrate himself into a context of professionals. In the last period of his work, Francesco actively proposed himself in the development team of the project to which we worked together. I keep a good memory of those months and it would be a pleasure for me if we could work together again.'
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I am always open to new opportunities and collaborations. Feel free to reach out to me for any inquiries or just to say hello.',
  items: [
    {
      type: ContactType.Email,
      text: 'france.schino@live.it',
      href: 'mailto:france.schino@live.it',
    },
    {
      type: ContactType.Location,
      text: 'Bristol, United Kingdom',
      href: 'https://www.google.ca/maps/place/Bristol/@51.4685873,-2.755525,11z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'francescosschino',
      href: 'https://www.linkedin.com/in/francescosschino/',
    },
    {
      type: ContactType.Github,
      text: 'FrancescoLength',
      href: 'https://github.com/FrancescoLength',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [

];
