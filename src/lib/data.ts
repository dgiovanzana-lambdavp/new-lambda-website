export interface TeamMember {
  id: string;
  name: string;
  title: string;
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
    bio: 'Domenic is the founder and general partner of Lambda Capital, where he invests in technology companies building for the long term. He focuses on mission-critical infrastructure, backing companies like Databento, which serves quantitative hedge funds with essential financial markets data, and SafeTraces, which advances biosecurity through indoor air quality solutions.\n\nBeyond investing, Domenic is passionate about technologies that strengthen both financial systems and US national security.\n\nWhen he\'s not working, you\'ll find him making pizza for friends and family, training Brazilian Jiu-Jitsu at Caio Terra Academy, or spending time with his girlfriend.',
    image: '/Headshot - Domenic.png',
    email: 'domenic@lambdavp.com',
    linkedin: 'https://www.linkedin.com/in/dgiovanzana',
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
];

// News items
export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Lambda Capital Leads $15M Series A in Defense AI Startup',
    excerpt: 'Lambda Capital announced its lead investment in SafeTraces, a defense technology company developing next-generation security solutions.',
    date: '2024-01-15',
    link: '#',
    source: 'Defense News',
  },
  {
    id: 'news-2',
    title: 'Portfolio Company Databento Raises $50M Series B',
    excerpt: 'Financial data platform Databento, backed by Lambda Capital, secures significant funding round to expand its real-time market data offerings.',
    date: '2024-01-10',
    link: '#',
    source: 'TechCrunch',
  },
  {
    id: 'news-3',
    title: 'Lambda Capital Named Top Defense Tech VC by Industry Report',
    excerpt: 'Annual industry report recognizes Lambda Capital as one of the most active and successful VCs in the defense technology space.',
    date: '2023-12-20',
    link: '#',
    source: 'VentureBeat',
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

