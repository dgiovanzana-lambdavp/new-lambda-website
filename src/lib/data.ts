export interface TeamMember {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

export interface PortfolioCompany {
  id: string;
  name: string;
  description: string;
  website: string;
  logo: string;
  category: string;
  founded?: string;
  stage?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  source: string;
}

// Team data
export const teamMembers: TeamMember[] = [
  {
    id: 'domenic-giovanzana',
    name: 'Domenic Giovanzana',
    title: 'Founding Partner',
    subtitle: 'Investment Team',
    bio: 'Domenic is the founder and general partner of Lambda Capital, where he invests in technology companies building for the long term. He focuses on mission-critical infrastructure, backing companies like Databento, which serves quantitative hedge funds with essential financial markets data, and SafeTraces, which advances biosecurity through indoor air quality solutions.\n\nBeyond investing, Domenic is passionate about technologies that strengthen both financial systems and US national security.\n\nWhen he\'s not working, you\'ll find him making pizza for friends and family, training Brazilian Jiu-Jitsu at Caio Terra Academy, or spending time with his girlfriend.',
    image: '/Headshot - Domenic.png',
    email: 'domenic@lambdavp.com',
    linkedin: 'https://www.linkedin.com/in/dgiovanzana',
  },
  {
    id: 'seamus-ruiz-earle',
    name: 'Seamus Ruiz-Earle',
    title: 'Operating Partner',
    subtitle: 'Go-To-Market',
    bio: 'Seamus Ruiz-Earle is an operating partner at Lambda Capital focused on go-to-market and revenue operations. He founded Carabiner Group, where he pioneered the RevOps-as-a-Service model and built a global consultancy serving high-growth technology companies, financial institutions, and enterprise organizations.\n\nSeamus was named to the Forbes 30 Under 30 list in 2022. Early in his career, he became the youngest recognized Salesforce Trailblazer and spoke at Dreamforce while still in college. His work spans revenue strategy, CRM architecture, systems integration, and the full go-to-market tech stack.\n\nSeamus is a founding member of Pavilion and remains active in the revenue leadership community. He brings hands-on GTM expertise to Lambda portfolio companies navigating growth in vertical market software.',
    image: '/Headshot - Seamus.png',
    linkedin: 'https://www.linkedin.com/in/seamusruizearle',
  },
  {
    id: 'cameron-broussard',
    name: 'Cameron Broussard',
    title: 'Operating Partner',
    subtitle: 'Customer Success',
    bio: `Cameron Broussard, currently Head of Customer Success of the Americas at SS&C Blue Prism, blends extensive industry experience and academic knowledge to champion customer-centric strategies. Renowned for his innovative problem-solving and deep listening skills, Cameron has significantly enhanced team and company performance through his adept handling of complex challenges in people management, process optimization, and data analysis.\n\nCameron's deep expertise in Customer Success comes from his experience as a founding member of award-winning Customer Success programs at two $1B+ global software providers.\n\nA committed father and husband, his hands-on approach and personal dedication mirror his professional ethos, exemplifying the qualities of a true leader in the customer success industry.`,
    image: '/Headshot - Cameron.jpg',
    linkedin: 'https://www.linkedin.com/in/cameronbroussard/',
  },
];

// Portfolio companies
export const portfolioCompanies: PortfolioCompany[] = [
  {
    id: 'databento',
    name: 'Databento',
    description: 'Real-time financial market data platform for institutional traders',
    website: 'https://databento.com',
    logo: '',
    category: 'Financial Markets',
    founded: '2019',
  },
  {
    id: 'safetraces',
    name: 'SafeTraces',
    description: 'Pathogen-Proofing Indoor Environments',
    website: 'https://safetraces.com',
    logo: '',
    category: 'Defense Tech',
    founded: '2020',
  },
  {
    id: 'pdhi',
    name: 'PDHI',
    description: 'Powering Digital Health & Welness Solutions',
    website: 'https://www.pdhi.com/',
    logo: '',
    category: 'Healthcare Technology',
  },
];

// News items
export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: 'SafeTraces Selected as Prime Performer for ARPA-H BREATHE Program',
    excerpt: 'SafeTraces announced as Prime Performer for ARPA-H Building Resilient Environments for Air and Total Health (BREATHE) program on a multi-year other transaction agreement for up to $39 million. The company will lead a world-class team to develop real-time biosensors and automated building controls for the U.S. Department of Defense.',
    date: '2025-10-01',
    link: 'https://www.prnewswire.com/news-releases/safetraces-selected-as-a-prime-performer-for-arpa-h-building-resilient-environments-for-air-and-total-health-breathe-program-on-other-transaction-agreement-up-to-39-million-302571829.html?tc=eml_cleartime',
    source: 'PR Newswire',
  },
  {
    id: 'news-2',
    title: 'Databento Announces Strategic Investment',
    excerpt: 'Databento announces a strategic investment to accelerate growth and expand its market data platform capabilities for institutional traders and financial institutions.',
    date: '2025-11-04',
    link: 'https://databento.com/blog/databento-announces-strategic-investment-2025',
    source: 'Databento Blog',
  },
  {
    id: 'news-3',
    title: 'Databento Closes $10M in Additional Funding',
    excerpt: 'Databento successfully closes $10 million in additional funding, bringing its total Series A round to $30 million. The funding will accelerate new feature rollouts, extend data history, and expand coverage of European markets and global indices.',
    date: '2024-10-30',
    link: 'https://databento.com/blog/databento-10m-additional-funding-2024',
    source: 'Databento Blog',
  },
];

// Investment focus areas
export const focusAreas = [
  {
    id: 'financial',
    title: 'Vertical SaaS/Technology for Financial Services',
    description: 'Specialized software solutions for financial institutions and fintech companies',
  },
  {
    id: 'govtech',
    title: 'GovTech',
    description: 'Technology solutions for government agencies and public sector innovation',
  },
  {
    id: 'compliance',
    title: 'Compliance Technology',
    description: 'Regulatory compliance and risk management technology solutions',
  },
  {
    id: 'niche',
    title: 'Other Niche, Mission Critical Technology',
    description: 'Specialized technologies serving critical infrastructure and essential services',
  },
];

// Company values
export const values = [
  {
    title: 'Mission-Driven',
    description: 'Lambda Capital invests in companies that strengthen national security and defense capabilities.',
  },
  {
    title: 'Technical Excellence',
    description: 'Lambda Capital partners with teams building cutting-edge technology with real-world impact.',
  },
  {
    title: 'Long-term Vision',
    description: 'Lambda Capital supports founders building companies that will define the future of defense tech.',
  },
  {
    title: 'Strategic Partnership',
    description: 'Lambda Capital provides more than capital - we offer deep industry expertise and connections.',
  },
];

