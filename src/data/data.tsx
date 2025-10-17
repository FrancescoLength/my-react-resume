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
import porfolioImage8 from '../images/portfolio/portfolio-8.webp';
import porfolioImage9 from '../images/portfolio/portfolio-9.webp';
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
      <p className="prose-base text-stone-200 sm:prose-lg lg:prose-2xl">
        <strong className="text-stone-100">IT Project Manager</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Driving business growth and efficiency through AI-powered automation and hands-on technical leadership.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/FS_Technical_Project_Manager.pdf',
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
  description: `With a foundation in Software Engineering, I bridge the gap between high-level strategy and technical execution. My experience leading large, cross-functional teams of over 75 professionals has enabled me to deliver complex projects up to 15% ahead of schedule. My hands-on expertise in Python, JavaScript, and AI fosters clear communication and innovative problem-solving, with a current focus on pioneering AI-driven automation initiatives. Outside of work, I'm passionate about building FPV drones, riding my motorbike, and exploring new cultures through travel.`,
  aboutItems: [
    {label: 'Location', text: 'Bristol, UK', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian (UK settled status)', Icon: FlagIcon},
    {label: 'Interests', text: 'Technology, Motorcycles, Traveling', Icon: SparklesIcon},
    {label: 'Study', text: 'BSc Computer Science @ University of Bari', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Permanent / Contractor / Freelance', Icon: BuildingOffice2Icon},
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
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Gym Automatic Booking System',
    description:
      'GymAutomaticBookingSystem aka GABS is an automatic gym class booking system, developed in Python using Selenium to automate the interaction with the booking website of a popular gym in Bristol. ',
    url: 'https://github.com/FrancescoLength/GABS',
    image: porfolioImage1,
  },
  {
    title: '99bars',
    description:
      "A very first React Native app - Simple puzzle game.  Essentially, the game involves a 3x3 matrix with elements that can toggle between bars, rounds, and crosses. Upon starting the game, bars are initially displayed. When you tap on the bars, they transform into rounds. However, if you fail to touch the bars in time, they evolve into crosses, marking the end of the game. The objective of the game is to tap all the bars before they transition into crosses. It's a timing-based challenge where success hinges on speed and agility. To emerge victorious, players must swiftly touch each bar presented before it transforms crosses.",
    url: 'https://github.com/FrancescoLength/99bars',
    image: porfolioImage2,
  },
  {
    title: 'PacMan Sensor Game',
    description:
      'An article was published about a prototype I developed an emotion extrapolator that analyzes heart rate and skin conductance to identify emotions experienced while playing Pac-Man. The prototype was created using Arduino and Matlab, with the data collected from the sensors processed and analyzed to determine the player’s emotional state. The project was a success, with the results published in an article on Startup Italia.',
    url: 'https://startupitalia.eu/uncategorized/uno-studente-di-bari-ha-mappato-le-emozioni-umane-giocando-a-pacman/',
    image: porfolioImage3,
  },
  {
    title: 'DIY Lego Tablet',
    description:
      'An article featuring my self-built tablet prototype, developed in collaboration with La Scuola Open Source. The device is based on a Linux-embedded board and includes a touchscreen, battery, and Arduino-compatible connections for rapid prototyping.',
    url: 'https://www.domusweb.it/it/design/2015/11/16/sos_una_scuola_che_si_occupa_di_futuro_.html',
    image: porfolioImage4,
  },
  {
    title: 'Emotional recognition system through physiological signal processing',
    description:
      'An article by La Repubblica covering my thesis project: a sensor system that analyzes physiological signals, such as heart rate and skin conductance, to assess user satisfaction and emotional response. The technology was designed to evaluate the efficiency of public administration services.',
    url: 'https://www.repubblica.it/tecnologia/2015/05/28/news/soddisfatto_o_arrabiato_il_sensore_per_valutare_l_efficienza_della_pa-115463006/',
    image: porfolioImage5,
  },
  {
    title: 'My high-performance freestyle and racing FPV build',
    description:
      'Designed for durability, agility, and top-tier flight performance.\n Frame: ImpulseRC Apex,\n  Flight Controller: SpeedyBee F7 V2,\n  ESC: SkyStars Kramam KM50A 3-6S BLHeli_S 4-in-1 ESC,\n  Motors: iFlight Xing2 2306 1755KV,\n  Receiver: TBS Crossfire,\n  VTX: DJI O3 Air Unit,\n  FPV Goggles: DJI Goggles,\n  RC Controller: TBS Tango 2 Pro',
    url: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio-6.98f278cf.webp&w=1920&q=75',
    image: porfolioImage6,
  },
  {
    title: 'My personal website',
    description:
      'Built with React.js, Typescript, Next.js, and styled with Tailwind css and Heroicons. The website is hosted on Vercel and the source code is available on GitHub. This is a fork of the React Resume Template created by tbakerx.',
    url: 'https://github.com/FrancescoLength/my-react-resume',
    image: porfolioImage7,
  },
  {
    title: 'Research Presentation on Usability and Citizen Satisfaction in Public Administration Websites',
    description:
      'I had the privilege of presenting my research at the “Qualità Web PA: sharing knowledge, tools and usability experiences” seminar (University of Bari, 18 June 2015), under the supervision of Professor Giuseppe Pirlo, focusing on usability and citizen satisfaction in public administration websites through sensor-based evaluation.',
    url: 'https://eventipa.formez.it/eventi/15c0296e-7798-4de8-9748-23f27cbb67cc',
    image: porfolioImage8,
  },
  {
    title: 'Bari Makers Meeting 2015 Presentation',
    description:
      'Presentation of the open device project “DIY Lego Tablet” at the Bari Makers Meeting 2015 (Bari, 25 October 2015), developed in collaboration with La Scuola Open Source, showcasing a self-built tablet using a Linux-embedded board and Arduino-compatible connections for rapid prototyping.',
    url: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio-9.f7aa24e3.webp&w=1920&q=75',
    image: porfolioImage9,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '24 August 2020',
    location: 'Virtual Course',
    title: 'Understanding ATSC 3.0 @ SMPTE',
    content: (
      <p>
        As a standard for both over-the-air Broadcast and Broadband internet delivery, ATSC 3.0 is the future of
        broadcast television. [...] Discussed are the basic principles and advanced techniques of audio and video
        compression, how internet protocols have been adapted to broadcasting and the new digital transmission systems.
        and their capabilities to send multiple bitstreams with a flexible choice of data rates and reception
        robustness.
      </p>
    ),
    reference: {
      href: '/assets/FS_SMPTE_ATSC3.0_self_study.pdf',
      text: 'Certificate',
    },
  },
  {
    date: '10 March 2020 - 13 March 2020',
    location: 'London, Uk',
    title: 'Developing on AWS @ QA Ltd',
    content: (
      <p>
        Developing on AWS helps developers understand how to use the AWS SDK to develop secure and scalable cloud
        applications. The course provides in-depth knowledge about how to interact with AWS using code and covers key
        concepts, best practices, and troubleshooting tips.
      </p>
    ),
    reference: {
      href: '/assets/FS_QA_Certificate_of_Attendance_for_AWS_Start_Date_11032020_Ref.pdf',
      text: 'Certificate',
    },
  },
  {
    date: '28 January 2020 - 31 January 2020',
    location: 'Bristol, Uk',
    title: 'C# Programming Language @ QA Ltd',
    content: (
      <p>
        This course concentrates on the C# programming language itself, to fully prepare delegates in readiness for
        using the .NET Framework/Core. No Object-Orientated knowledge is assumed. From basic procedural syntax to
        sophisticated object-oriented programming techniques, delegates will learn how to write .NET code that is robust
        and maintainable.
      </p>
    ),
    reference: {
      href: '/assets/FS_QA_Certificate_of_Attendance_for_The_CSharp_Programming_Language_Start_Date_27012020_Ref_9180826.pdf',
      text: 'Certificate',
    },
  },
  {
    date: '29 August 2018 - 30 August 2018',
    location: 'Bristol, Uk',
    title: 'Audio and Video Fundamentals for Engineers @ IABM',
    content: (
      <p>
        This 2 day course builds your understanding of how images and sound are turned into audio and video signals then
        passed along the end-to-end broadcast chain from acquisition through production distribution and delivery.
      </p>
    ),
    reference: {
      href: '/assets/FS_IABM_Audio_&_Video_Fundamentals_for_Engineers.pdf',
      text: 'Certificate',
    },
  },
  {
    date: '2008 – 2015',
    location: 'Bari, Italy',
    title: 'BSc Computer Science @ University of Bari',
    content: (
      <p>
        Main exams: Algorithms and data structures, Databases, Software Engineering, Computer Networks, Programming
        Languages, Human-Computer Interaction, Web services.
      </p>
    ),
  },
  {
    date: '2002 – 2007',
    location: 'Bari, Italy',
    title: 'Diploma in Commercial Technical @ ITC Marco Polo',
    content: (
      <p>
        Computer use and operation, business management procedures, office automation, adoption of appropriate
        communication techniques.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2023 – June 2025',
    location: 'Remote',
    title: 'Quality Manager @ Coding Giants',
    content: (
      <ul>
        <li>● Establishing the Italian branch of Coding Giants, working directly with the founders and Italian Country Manager.</li>
        <li>● Developing and implementing the quality management system, including the creation of a quality manual, procedures, and work instructions.</li>
        <li>● Risks mitigation to ensure smooth operations.</li>
        <li>● Ensuring compliance with all legal requirements and regulations.</li>
        <li>● Created and managed the recruitment process, including job postings, interviews, onboarding and offboarding.</li>
        <li>● Led the creation and development of a team of more than 70 team members.</li>
        <li>● Tracking progress and task allocation with agile methodologies (SCRUM)</li>
        <li>● Continuous improved of organizational processes, ensuring high service quality and KPI achievement.</li>
        <li>
          <b>Tools and Platforms Used:</b> Trello, Traffit, Teamtailor, Notion, Discord, DocuSign, CRM, Tableau, ProofHub, Gmail, Meet, Calendar, Drive, Docs, Sheets, Slides, Keep, Apps Script, Python
        </li>
      </ul>
    ),
    reference: {
      href: '/assets/FS_CG_Reference_letter.pdf',
      text: 'Reference Letter',
    },
  },
  {
    date: 'May 2018 – April 2023',
    location: 'Bristol, UK',
    title: 'Software Engineer @ Eurofins Digital Testing',
    content: (
      <ul>
        <li>● Designed and implemented test plans, automated and manual test cases, and test materials, including DASH-format media, for the broadband and broadcasting industry (HbbTv), serving clients such as BBC and Tivùsat.</li>
        <li>● Developed and reviewed scripts, with expertise in code debugging and unit testing. Created tools for validation, verification, and integration.</li>
        <li>● Led a team of 8 engineers and supported project management efforts, achieving a 40% reduction in delays
          within the issue tracking system (Redmine).</li>
        <li>● Managed audit requests and oversaw the '4K HDR Ultra HD' project for the certification requests for clients
          such as LG, Hisense, and Panasonic.</li>
        <li>● Developed features for a QA analyzer app in C# to process Interoperable Mastering Format (IMF) and Material
          Exchange Format (MXF) media, supporting customers like HBO in validating content for Netflix publication and
          enhancing the infrastructure with Shell and batch scripting.</li>
        <li>● Worked with Windows and Linux servers, using DevOps tools for configuration and maintenance.</li>
        <li>● Gained experience in the SDLC and CI, with agile methodologies (SCRUM).</li>
        <li>● Conducted training sessions for new employees and provided ongoing support for junior team members.</li>
        <li>
          <b>Tools and Platforms Used:</b> Javascript, Python, C#, Pandas, ElementTree, Unittest, Selenium, YAML, GWT, Regex, XML, JSON, Jira, Jenkins, VSCode, SVN, Git, Postman, SoapUI, FFmpeg, MediaInfo, Video Encoding, DRM (PlayReady, Marlin, ClearKey, Widevine), Redmine.
        </li>
      </ul>
    ),
  },
  {
    date: 'November 2016 – July 2017',
    location: 'Rome, Italy',
    title: 'Cyber Security Analyst @ Deloitte',
    content: (
      <ul>
        <li>● Technical and functional analyst in Risk Advisory at Leonardo (client), focusing on GRC platform transformation and Cyber Security.</li>
        <li>● Conducted risk assessments and implemented security measures, including the development of a security dashboard for the SOC.</li>
        <li>● Worked with standards such as ISO/IEC 27001, NIST Cybersecurity Framework, COBIT, and ITIL.</li>
        <li>● Translated functional requirements into technical specifications for smooth project execution.</li>
        <li>● Created release manuals, trained clients, and managed work progress under tight deadlines in areas such as Cyber Defence, Cyber Resilience.</li>
        <li>
          <b>Tools and Platforms Used:</b> RSA Archer, Javascript, jQuery, XSLT, CSS, XML, HTML, MS Excel, MS
          PowerPoint.
        </li>
      </ul>
    ),
  },
  {
    date: 'October 2015 – November 2016',
    location: 'Rome, Italy',
    title: 'Software Developer @ Capgemini',
    content: (
      <ul>
        <li>● Utilized Software AG products to develop IoT and Big Data solutions for Octo Telematics (client)</li>
        <li>● Analyzed and managed applications for international telephone traffic interconnection and developing components for SMS routing and configuration for Telecom Italia Sparkle (client)</li>
        <li>
          <b>Tools and Platforms Used:</b> Java, SOAP, REST, SQL, Oracle, Maven, Tomcat, Hibernate, CSS, HTML, IoT, Linux, SVN, EPL, Mongo, Virtualization.
        </li>
      </ul>
    ),
  },
  {
    date: 'July 2015 – October 2015',
    location: 'Bari, Italy / Remote',
    title: 'Project Leader @ La Scuola Open Source',
    content: (
      <ul>
        <li>● Developed a custom tablet using selected electronic components, assembled and configured as an updated version of the 2014 prototype.</li>
        <li>● The main feature includes the installation of Ubuntu OS with integrated development environments (IDEs) for Java and Python.</li>
        <li>● Designed and developed project proposals, including budgets and critical paths.</li>
        <li>
          <b>Tools and Platforms Used:</b> Arduino, Raspberry Pi, IoT.
        </li>
      </ul>
    ),
  },
  {
    date: 'April 2015 – Jul 2015',
    location: 'Valenzano (Bari), Italy',
    title: 'Graduating student @ LaserInn',
    content: (
      <ul>
        <li>● Thesis: development of a prototype for the acquisition of physiological signals and of an act software able to extract and recognize the human emotions.</li>
        <li>
          <b>Tools and Platforms Used:</b> Arduino, C, MATLAB, LaTeX, R, E-Health.
        </li>
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
      name: 'Pro Trainer, Coding Giants',
      text: "Working with Francesco as my direct supervisor always resulted in quality work. I feel lucky to have had the opportunity to learn from his wealth of experience - he was able to bring both clarity and structure to the team while creating solid processes which are still in place today, because they work. More than the results, working alongside Francesco always felt easy and organic, and had a positive impact on my day-to-day work experience.",
    },
    {
      name: 'Pro Trainer, Coding Giants',
      text: "Francesco and I worked together at Coding Giants, where he was my manager in charge of class coordination, materials, and workflows. From the very beginning, I appreciated his way of working: precise in assigning tasks, always clear about goals, and detail-oriented. He was always kind, approachable, and never too strict, yet perfectly capable of leading the team with balance and competence. Together, we always managed to find effective solutions to everyday problems, working in a collaborative and positive atmosphere. Francesco also succeeded in creating a great team environment within a rather large group (almost 70 people!) that wasn't always easy to manage. He's someone who is truly a pleasure to work and talk with, and I'm glad I had the chance to collaborate with him. I really hope we'll get to work together again in the future!",
    },
    {
      name: 'Project Manager, Eurofins Digital Testing',
      text: "Francesco's support has always been incredible helpful to me, and his recent support of PM for myself/test case team has massively helped my Jira Ticket accuracy and discipline.",
    },
    {
      name: 'Practice Lead, Eurofins Digital Testing',
      text: 'Francesco has done a great job on the Olive project, and with onboarding the IMF and MXF Analyser products - taking on new challenges and technologies, proactive and taking ownership, and professional when dealing with customers. I look forward to working with him more as we start new development on the products.',
    },
    {
      name: 'Senior Software Architect, Eurofins Digital Testing',
      text: 'All the trainings you have given to me has been very helpful. You have given a great start to our training. During the initial Ligada setup, we have encountered few problem, and you have resolved almost all the issue. I have taken notice of your problem solving skills. Your approach for solving problem is very systematic, calm and focused. I really like your thinking process for tackling problems.',
    },
    {
      name: 'Graduate Software Engineer, Eurofins Digital Testing',
      text: "You've always been constructive and encouraging. Learning the ropes whilst working with you has been great and you're one of the reasons I've come to really like working here. Even when I've made mistakes you've always been supportive. Great team mate and a cool head under pressure.",
    },
    {
      name: 'Cyber Security Analyst, Deloitte',
      text: 'I had the opportunity to work with Francesco for several months. He is a hard worker and an excellent team mate. He has strong technical skills and he is always willing to support the team in any moment (even under pressure or with strict deadlines approaching). He is not only a brilliant professional but also (and most important) a kind and honest person. I really enjoyed working with him and I somehow hope to meet him again in the future.',
    },
    {
      name: 'Software Engineer, LaserInn',
      text: 'Francesco worked on his thesis in close collaboration with me and my colleagues. At that time, I was able to appreciate his autonomy and his resourcefulness. He demonstrated excellent organizational skills. He has also shown that he is able to integrate himself into a context of professionals. In the last period of his work, Francesco actively proposed himself in the development team of the project to which we worked together. I keep a good memory of those months and it would be a pleasure for me if we could work together again.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Open to IT Project Management opportunities, with a focus on driving innovative projects that combine software development and AI. Also available for consulting on automation and AI integration to enhance business efficiency.',
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
export const socialLinks: Social[] = [];
