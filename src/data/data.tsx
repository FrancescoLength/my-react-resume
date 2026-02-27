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
import porfolioImage4 from '../images/portfolio/portfolio-4.webp';
import porfolioImage10 from '../images/portfolio/portfolio-10.webp';
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
  title: 'Francesco Schino | Lead AI Engineer',
  description: "Francesco Schino's Professional Portfolio and Resume",
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
        <strong className="text-stone-100">Software Engineering Manager / Lead AI Engineer</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Architecting autonomous AI solutions and leading cross-functional teams to deliver scalable, high-performance
        systems. <br />
        <br />
        <strong className="text-orange-500">
          Right to work in the UK: Settled Status / ILR (No Sponsorship Required)
        </strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/FS_Software_Engineer.pdf',
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
  description: `With a foundation in Software Engineering and a deep focus on Systems Architecture, I bridge the gap between high-level business strategy and technical execution. My experience leading large, cross-functional teams (up to 70+ professionals) has enabled me to architect scalable backends and deliver complex projects in highly regulated environments. Currently, I specialize in pioneering Autonomous AI-driven automation pipelines (using LangChain, local LLMs like Ollama, and Playwright) and building resilient API ecosystems with Python and FastAPI. Outside of work, I'm passionate about building bespoke FPV drones, riding my motorbike, and exploring new cultures through travel.`,
  aboutItems: [
    {label: 'Location', text: 'Bristol, UK', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian (UK settled status)', Icon: FlagIcon},
    {label: 'Interests', text: 'Technology, FPV Drones, Motorcycles', Icon: SparklesIcon},
    {label: 'Study', text: 'BSc Computer Science @ University of Bari', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Permanent / Contractor / Freelance', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Core Stack & Frameworks',
    skills: [
      {name: 'Python (Advanced)', level: 10},
      {name: 'FastAPI / Django', level: 9},
      {name: 'JavaScript / React.js', level: 8},
      {name: 'Docker / CI/CD', level: 8},
      {name: 'SQL / Databases', level: 8},
      {name: 'C# (.NET Core)', level: 7},
      {name: 'Java', level: 7},
    ],
  },
  {
    name: 'AI & Automation',
    skills: [
      {name: 'LangChain & LLM Orchestration', level: 9},
      {name: 'Prompt Engineering & Structured Output', level: 9},
      {name: 'Local LLMs (Ollama, Qwen, LLaMA)', level: 8},
      {name: 'Playwright & Selenium (Browser RPA)', level: 9},
      {name: 'OpenAI, Gemini, Claude APIs', level: 8},
    ],
  },
  {
    name: 'Management & Soft Skills',
    skills: [
      {name: 'Creative Problem-Solving', level: 9},
      {name: 'Strategic Vision & Architecture', level: 9},
      {name: 'Team Structuring & Leadership', level: 9},
      {name: 'Agile (Scrum, Kanban)', level: 8},
      {name: 'Functional-to-Technical Requirement Mapping', level: 9},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Taylored CV: CI/CD Pipeline for Autonomous LLM Resumes',
    description:
      'Developed an advanced LangChain pipeline utilizing asyncio and parallel execution to automatically tailor CVs and Cover Letters against precise job descriptions. Supports both cloud (Gemini) and local LLMs (Ollama/Qwen) with strict Pydantic structured schema outputs for ATS optimization.',
    url: 'https://github.com/FrancescoLength/Taylored_cv',
    image: porfolioImage1,
  },
  {
    title: 'AutoEasy: Intelligent Job Application RPA',
    description:
      'A custom Architecture comprising a Chrome Extension paired with Node.js backend integrating Playwright with Local LLMs to autonomously interpret complex job application DOM forms, inject candidate context, and execute one-click submissions on platforms like LinkedIn.',
    url: 'https://github.com/FrancescoLength/',
    image: porfolioImage2,
  },
  {
    title: 'GABS (Gym Automatic Booking System)',
    description:
      'A full-stack architecture featuring a custom Python/Flask API backend and a Vite+React.js frontend, deployed securely via Docker and systemd on edge hardware. Uses Selenium for headless browser interactions to bypass complex auth mechanisms and automate high-traffic bookings.',
    url: 'https://github.com/FrancescoLength/GABS',
    image: porfolioImage10,
  },
  {
    title: 'CyberChecker: Security Posture Evaluator',
    description:
      'Engineered a security scanner pipeline combining massive regex-pattern detection, Shannon entropy analysis, ProjectDiscovery Katana integration for deep crawling, and interactive Selenium rendering to identify exposure vulnerabilities in complex Single Page Applications.',
    url: 'https://github.com/FrancescoLength/',
    image: porfolioImage4,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'Ongoing',
    location: 'Remote',
    title: 'Hugging Face Agents Course @ Hugging Face',
    content: (
      <p>
        Advanced curriculum on designing, training, and deploying autonomous AI Agents using open-source models,
        LangChain, and Hugging Face infrastructure.
      </p>
    ),
  },
  {
    date: '16 Dec 2025',
    location: 'Bath, Uk',
    title: 'BCS EXIN Foundation Certificate in Agile Scrum @ Bath Spa University',
    content: (
      <p>
        The EXIN Agile Scrum Foundation certification provides a comprehensive understanding of Agile principles and
        Scrum practices, equipping individuals with the knowledge to effectively contribute to Agile projects and
        cross-functional teams.
      </p>
    ),
    reference: {
      href: '/assets/FS_BCS_EXIN_Foundation_Certificate_in_Agile_Scrum_V4.0.pdf',
      text: 'Certificate',
    },
  },
  {
    date: '24 August 2020',
    location: 'Virtual Course',
    title: 'Understanding ATSC 3.0 @ SMPTE',
    content: (
      <p>
        Exploration of Basic principles and advanced techniques of audio and video compression, internet protocols
        adapted to broadcasting, and next-generation digital transmission capabilities.
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
        Developing on AWS helps developers understand how to use the AWS SDK to develop secure and highly scalable cloud
        applications.
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
        From basic procedural syntax to sophisticated object-oriented programming techniques, establishing robust
        paradigms for .NET software architectural maintainability.
      </p>
    ),
    reference: {
      href: '/assets/FS_QA_Certificate_of_Attendance_for_The_CSharp_Programming_Language_Start_Date_27012020_Ref_9180826.pdf',
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
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2024 – Present',
    location: 'UK (Remote)',
    title: 'Independent AI Engineer & Consultant | B2B Solutions',
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Since early 2024, I have been designing and building advanced AI-driven architectures for B2B environments. I
          developed <strong className="text-orange-500">Taylored CV</strong>, a complex{' '}
          <strong className="text-orange-500">LangChain</strong> orchestration pipeline that dynamically tailors resumes
          against job descriptions using <strong className="text-orange-500">parallel asyncio processing</strong> and
          strict <strong className="text-orange-500">Pydantic structure definitions</strong>.
        </p>
        <p>
          Simultaneously, I architected <strong className="text-orange-500">AutoEasy</strong>, an innovative Chrome
          Extension and Node.js backend system utilizing <strong className="text-orange-500">Playwright</strong> and
          local <strong className="text-orange-500">LLMs (Ollama)</strong> to autonomously handle complex UI
          interactions. Beyond pure AI, my recent consulting encompasses full-stack architectural developments like the{' '}
          <strong className="text-orange-500">GABS Booking System</strong>—a Flask and React application engineered to
          bypass stateful authentication mechanisms—and asynchronous Python security scanners like{' '}
          <strong className="text-orange-500">CyberChecker</strong>.
        </p>
      </div>
    ),
  },
  {
    date: 'August 2023 – June 2025',
    location: 'Remote',
    title: 'Software Engineering Manager & Head of Quality @ Coding Giants',
    content: (
      <div className="flex flex-col gap-4">
        <p>
          At Coding Giants, I played a foundational role in establishing the Italian branch operations. Acting as a
          strategic technical leader, I designed the core quality management ecosystem from the ground up, utilizing{' '}
          <strong className="text-orange-500">Python-based analytical tracking systems</strong> to enforce compliance and
          operational rigor. Over my tenure, I scaled and mentored a{' '}
          <strong className="text-orange-500">cross-functional department of over 70 members</strong>.
        </p>
        <p>
          My primary ethos centered unconditionally on eradicating manual dependencies. I engineered{' '}
          <strong className="text-orange-500">Selenium</strong> and{' '}
          <strong className="text-orange-500">Google Sheets API</strong> pipelines to fully automate teacher tracking and
          transformed manual contract generation into an instantaneous{' '}
          <strong className="text-orange-500">Python rendering flow</strong>, vastly improving organizational throughput
          while adhering to strict Agile methodologies.
        </p>
      </div>
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
      <div className="flex flex-col gap-4">
        <p>
          During my five years at Eurofins, I designed and deployed sophisticated{' '}
          <strong className="text-orange-500">automated test plans</strong> validating HbbTV, DVB-T2, and next-generation
          ATSC 3.0 frameworks, working closely with top-tier partners like the{' '}
          <strong className="text-orange-500">BBC</strong> and Tivùsat.
        </p>
        <p>
          On the back-end side, I engineered core{' '}
          <strong className="text-orange-500">C# data processing components</strong> integrating into broader QA analyzer
          suites to validate granular Interoperable Mastering Formats (IMF) used by customers like{' '}
          <strong className="text-orange-500">HBO</strong> to guarantee{' '}
          <strong className="text-orange-500">Netflix</strong> platform compliance. I authored expansive{' '}
          <strong className="text-orange-500">Shell and Python automation pipelines</strong> that demonstrably increased
          QA velocity by 20%, all whilst orchestrating the technical rollouts that allowed seamless remote deployment
          telemetry during the pandemic lockdown.
        </p>
      </div>
    ),
  },
  {
    date: 'November 2016 – July 2017',
    location: 'Rome, Italy',
    title: 'Cyber Security Analyst @ Deloitte',
    content: (
      <div className="flex flex-col gap-4">
        <p>
          I operated within the Risk Advisory division serving as the principal Technical and Functional Analyst on a
          major <strong className="text-orange-500">GRC transformation for Leonardo</strong>, a key player in aerospace
          defense.
        </p>
        <p>
          My focus involved architecting <strong className="text-orange-500">SOC integrations</strong> that aggregated
          disjointed network endpoints through <strong className="text-orange-500">resilient REST APIs</strong> to
          consolidate enterprise compliance. I was responsible for transforming rigorous business security matrices
          aligning to <strong className="text-orange-500">ISO/IEC 27001</strong> and{' '}
          <strong className="text-orange-500">NIST parameters</strong> into deeply detailed technical software
          specifications for the engineering teams.
        </p>
      </div>
    ),
  },
  {
    date: 'October 2015 – November 2016',
    location: 'Rome, Italy',
    title: 'Software Developer @ Capgemini',
    content: (
      <p>
        My early trajectory in enterprise engineering was shaped at Capgemini, where I focused on high-throughput
        backend architecture. I integrated robust{' '}
        <strong className="text-orange-500">Java-based Big Data architectures</strong> to analyze massive streams from
        Octo Telematics utilizing <strong className="text-orange-500">Esper EPL microservices</strong>. Concurrently, I
        honed my foundational skills in infrastructure resilience by building highly scalable{' '}
        <strong className="text-orange-500">REST backend services</strong> powering Telecom Italia Sparkle transit
        gateways, strictly optimized to meet exacting SLA demands over{' '}
        <strong className="text-orange-500">Oracle</strong> and <strong className="text-orange-500">Spring Boot</strong>.
      </p>
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
      text: 'Working with Francesco as my direct supervisor always resulted in quality work. I feel lucky to have had the opportunity to learn from his wealth of experience - he was able to bring both clarity and structure to the team while creating solid processes which are still in place today, because they work. More than the results, working alongside Francesco always felt easy and organic, and had a positive impact on my day-to-day work experience.',
    },
    {
      name: 'Pro Trainer, Coding Giants',
      text: "Francesco and I worked together at Coding Giants, where he was my manager. From the very beginning, I appreciated his way of working: precise in assigning tasks, always clear about goals, and detail-oriented. Perfectly capable of leading the team with balance and competence. Together, we always managed to find effective solutions to everyday problems, working in a collaborative and positive atmosphere. Francesco also succeeded in creating a great team environment within a rather large group (almost 70 people!) that wasn't always easy to manage.",
    },
    {
      name: 'Practice Lead, Eurofins Digital Testing',
      text: 'Francesco has done a great job on the Olive project, and with onboarding the IMF and MXF Analyser products - taking on new challenges and technologies, proactive and taking ownership, and professional when dealing with customers. I look forward to working with him more as we start new development on the products.',
    },
    {
      name: 'Senior Software Architect, Eurofins Digital Testing',
      text: 'All the trainings you have given to me has been very helpful. You have given a great start to our training. During the initial Ligada setup, we have encountered few problems, and you have resolved almost all the issue. I have taken notice of your problem solving skills. Your approach for solving problem is very systematic, calm and focused. I really like your thinking process for tackling problems.',
    },
    {
      name: 'Graduate Software Engineer, Eurofins Digital Testing',
      text: "You've always been constructive and encouraging. Learning the ropes whilst working with you has been great and you're one of the reasons I've come to really like working here. Even when I've made mistakes you've always been supportive. Great team mate and a cool head under pressure.",
    },
    {
      name: 'Cyber Security Analyst, Deloitte',
      text: 'I had the opportunity to work with Francesco for several months. He is a hard worker and an excellent team mate. He has strong technical skills and he is always willing to support the team in any moment (even under pressure or with strict deadlines approaching). He is not only a brilliant professional but also (and most important) a kind and honest person. I really enjoyed working with him and I somehow hope to meet him again in the future.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Open to Software Engineering Management and Lead AI Engineer opportunities, with a focus on architecting autonomous systems and empowering cross-functional teams to deliver highly scalable B2B solutions.',
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
