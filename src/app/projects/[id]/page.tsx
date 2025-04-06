import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

// This would typically come from an API or database
const projectDetails = {
  'fidelity-digital': {
    title: 'Fidelity Digital Experience',
    overview: 'Led the transformation of Fidelity\'s digital platforms, focusing on improving user engagement and accessibility for financial services. This project involved comprehensive UX research, design thinking, and implementation of advanced analytics.',
    role: 'Lead UX Designer',
    duration: '2 years',
    team: 'Cross-functional team of 8 members',
    problem: 'Fidelity\'s digital platforms needed modernization to meet evolving customer expectations and accessibility standards. Users were experiencing difficulties with navigation and completing key financial tasks.',
    solution: 'Implemented a user-centered design approach, incorporating IBM Enterprise Design Thinking methodology. Redesigned key user flows, improved accessibility compliance, and integrated advanced analytics for better user insights.',
    process: [
      'User Research & Customer Journey Mapping',
      'Accessibility Audit & Compliance Planning',
      'Enterprise Design Thinking Workshops',
      'Wireframing & Prototyping',
      'User Testing & Iteration',
      'Analytics Implementation & Monitoring'
    ],
    results: [
      'Improved platform accessibility to WCAG 2.1 standards',
      'Enhanced user satisfaction scores by 40%',
      'Reduced task completion time by 25%',
      'Increased user engagement metrics by 35%'
    ],
    images: [
      '/images/project1-1.jpg',
      '/images/project1-2.jpg',
      '/images/project1-3.jpg'
    ]
  },
  'ux-research-framework': {
    title: 'UX Research Framework',
    overview: 'Developed and implemented a comprehensive UX research framework that combines traditional research methods with agile development practices. This framework has been successfully applied across multiple projects, improving both the quality of user insights and the efficiency of the research process.',
    role: 'UX Research Lead',
    duration: 'Ongoing',
    team: 'Cross-functional team of researchers and developers',
    problem: 'Traditional UX research methods were not well-integrated with agile development processes, leading to delayed insights and missed opportunities for user feedback.',
    solution: 'Created a flexible research framework that includes rapid testing methods, analytics integration, and continuous feedback loops, all while maintaining research rigor and validity.',
    process: [
      'Methodology Development & Validation',
      'Tool Selection & Integration',
      'Team Training & Implementation',
      'Continuous Feedback & Iteration',
      'Analytics Integration',
      'Results Synthesis & Reporting'
    ],
    results: [
      'Reduced research cycle time by 40%',
      'Improved research quality and consistency',
      'Enhanced team collaboration and knowledge sharing',
      'Increased stakeholder satisfaction with research deliverables',
      'Better integration of user insights into development process'
    ],
    images: [
      '/images/project1-1.jpg',
      '/images/project1-2.jpg',
      '/images/project1-3.jpg'
    ]
  },
  'enterprise-design': {
    title: 'Enterprise Design Thinking',
    overview: 'Led the implementation of IBM Enterprise Design Thinking methodology across multiple projects, improving team collaboration and user outcomes through a structured, user-centered approach.',
    role: 'Design Thinking Practitioner',
    duration: '2 years',
    team: 'Cross-functional teams across multiple projects',
    problem: 'Teams were struggling with complex business problems and needed a structured approach to innovation and problem-solving.',
    solution: 'Implemented Enterprise Design Thinking methodology, including workshops, user research, and iterative prototyping to drive innovation and user-centered solutions.',
    process: [
      'Workshop Facilitation',
      'User Research & Empathy Mapping',
      'Ideation & Prototyping',
      'User Testing & Validation',
      'Implementation & Scaling'
    ],
    results: [
      'Improved team collaboration and alignment',
      'Enhanced user satisfaction scores',
      'Reduced time to market for new features',
      'Increased innovation and creative problem-solving',
      'Better alignment between business goals and user needs'
    ],
    images: [
      '/images/project2-1.jpg',
      '/images/project2-2.jpg',
      '/images/project2-3.jpg'
    ]
  },
  'fidelity-customer-service': {
    title: 'Fidelity Customer Service Experience',
    overview: 'Led the end-to-end design process for Customer Service page improvements, creating a single-page web application that seamlessly integrates with Fidelity\'s design system and streamlines customer support interactions.',
    role: 'Senior UX Designer',
    duration: '2022-Present',
    team: 'Cross-functional team including developers, product managers, and stakeholders',
    problem: 'Customer service interactions needed to be more efficient and user-friendly, with better integration of Fidelity\'s design system.',
    solution: 'Created a streamlined single-page application that improved customer support interactions while maintaining design consistency.',
    process: [
      'User Research & Analysis',
      'Design System Integration',
      'Prototype Development',
      'User Testing & Validation',
      'Stakeholder Presentations',
      'Implementation & Iteration'
    ],
    results: [
      'Improved customer support efficiency',
      'Enhanced user satisfaction',
      'Maintained design system consistency',
      'Streamlined customer interactions'
    ],
    images: [
      '/images/fidelity-cs-1.jpg',
      '/images/fidelity-cs-2.jpg',
      '/images/fidelity-cs-3.jpg'
    ]
  },
  'fidelity-ai-solutions': {
    title: 'AI-Powered Service Solutions',
    overview: 'Spearheaded design strategy for AI-powered solutions including Fidelity Assistant (FA), collaborating with AI/ML teams to design intuitive interfaces that enhance service delivery for both customers and internal users.',
    role: 'Senior UX Designer',
    duration: '2022-Present',
    team: 'AI/ML teams, developers, and product managers',
    problem: 'Need to create intuitive interfaces for AI-powered solutions that serve both customers and internal users effectively.',
    solution: 'Developed user-centered design strategies for AI interfaces, focusing on natural interactions and clear communication.',
    process: [
      'AI/ML Team Collaboration',
      'Interface Design Strategy',
      'Prototype Development',
      'User Testing & Feedback',
      'Iterative Improvements'
    ],
    results: [
      'Enhanced service delivery efficiency',
      'Improved user satisfaction',
      'Better internal tool adoption',
      'Streamlined customer interactions'
    ],
    images: [
      '/images/fidelity-ai-1.jpg',
      '/images/fidelity-ai-2.jpg',
      '/images/fidelity-ai-3.jpg'
    ]
  },
  'fidelity-institutional': {
    title: 'Fidelity Institutional Platform',
    overview: 'Orchestrated UX efforts on two squads (Help & Virtual Assistant/Chat) within FI, developing enterprise solutions for financial advisors and subsidiaries while driving design decisions on legacy systems under tight deadlines.',
    role: 'Senior UX Designer',
    duration: '2022-Present',
    team: 'Cross-functional teams across multiple squads',
    problem: 'Need to improve enterprise solutions for financial advisors while working with legacy systems and tight deadlines.',
    solution: 'Implemented comprehensive UX strategies and design decisions based on comparative analysis and client feedback.',
    process: [
      'Comparative Analysis',
      'Design System Framework Implementation',
      'Client Feedback Integration',
      'Workshop Facilitation',
      'Legacy System Improvements'
    ],
    results: [
      'Improved advisor experience',
      'Enhanced system efficiency',
      'Better client satisfaction',
      'Streamlined workflows'
    ],
    images: [
      '/images/fidelity-fi-1.jpg',
      '/images/fidelity-fi-2.jpg',
      '/images/fidelity-fi-3.jpg'
    ]
  },
  '36creative-ecommerce': {
    title: 'E-commerce Conversion Optimization',
    overview: 'Led UX efforts on behalf of agency clients with responsibility for eCommerce conversion improvements, usability audits, information architecture improvements, and research validation.',
    role: 'UX Strategist',
    duration: '2021-2022',
    team: 'Agency team and client stakeholders',
    problem: 'Clients needed to improve eCommerce conversion rates and overall user experience.',
    solution: 'Implemented comprehensive UX strategies including research, audits, and information architecture improvements.',
    process: [
      'Exploratory Research',
      'Usability Audits',
      'Information Architecture Design',
      'Competitive Analysis',
      'Implementation & Testing'
    ],
    results: [
      '20% improvement in conversion rates',
      'Enhanced user satisfaction',
      'Improved site navigation',
      'Better business outcomes'
    ],
    images: [
      '/images/36creative-1.jpg',
      '/images/36creative-2.jpg',
      '/images/36creative-3.jpg'
    ]
  },
  'twin-birch-farm': {
    title: 'Twin Birch Farm Digital Platform',
    overview: 'Launched a website for new organic farm upstart to create a distribution channel for harvested produce and establish a community for potential customers.',
    role: 'Freelance UX Designer',
    duration: '2020-2021',
    team: 'Farm owners and stakeholders',
    problem: 'New organic farm needed a digital presence to distribute produce and build community.',
    solution: 'Created a comprehensive digital platform that served both distribution and community-building needs.',
    process: [
      'Client Needs Assessment',
      'Competitive Analysis',
      'Brand Identity Development',
      'Website Design & Development',
      'Community Engagement Strategy'
    ],
    results: [
      'Established digital presence',
      'Created distribution channel',
      'Built community engagement',
      'Developed brand identity'
    ],
    images: [
      '/images/twin-birch-1.jpg',
      '/images/twin-birch-2.jpg',
      '/images/twin-birch-3.jpg'
    ]
  },
  'boston-gov-covid': {
    title: 'Boston.gov COVID Response',
    overview: 'Redesigned Boston.gov\'s pages related to Covid response, improving the public\'s trust and ability to find pertinent information quickly through revamped information architecture and usability testing.',
    role: 'UX Consultant',
    duration: '2020',
    team: 'City of Boston digital team',
    problem: 'Need to improve public access to COVID-19 information and streamline city employee workflows.',
    solution: 'Implemented comprehensive redesign focusing on information architecture and usability improvements.',
    process: [
      'Information Architecture Redesign',
      'Usability Testing',
      'Contextual Inquiries',
      'Design Sprints',
      'Implementation & Validation'
    ],
    results: [
      'Improved public trust',
      'Enhanced information accessibility',
      'Streamlined employee workflows',
      'Better website navigation'
    ],
    images: [
      '/images/boston-gov-1.jpg',
      '/images/boston-gov-2.jpg',
      '/images/boston-gov-3.jpg'
    ]
  }
};

type PageProps = {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export default function ProjectDetail({ params }: PageProps) {
  const project = projectDetails[params.id as keyof typeof projectDetails];

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="pt-16 text-center py-20">
          <h1 className="text-2xl font-bold text-white">Project not found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300 mt-4 block">
            Return to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-16 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 mb-6">{project.overview}</p>
            
            <h2 className="text-2xl font-semibold mb-4">Role</h2>
            <p className="text-gray-300 mb-6">{project.role}</p>
            
            <h2 className="text-2xl font-semibold mb-4">Duration</h2>
            <p className="text-gray-300 mb-6">{project.duration}</p>
            
            <h2 className="text-2xl font-semibold mb-4">Team</h2>
            <p className="text-gray-300 mb-6">{project.team}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Problem</h2>
            <p className="text-gray-300 mb-6">{project.problem}</p>
            
            <h2 className="text-2xl font-semibold mb-4">Solution</h2>
            <p className="text-gray-300 mb-6">{project.solution}</p>
            
            <h2 className="text-2xl font-semibold mb-4">Process</h2>
            <p className="text-gray-300 mb-6">{project.process}</p>
            
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <p className="text-gray-300 mb-6">{project.results}</p>
          </div>
        </div>
        
        <div className="mt-12">
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
} 