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
    id: 'jake-haselden',
    name: 'Jake Haselden',
    title: 'Operating Partner',
    subtitle: 'Product & Engineering',
    bio: 'Engineer and operations leader with multiple successful exits and extensive experience scaling products for Fortune 50 companies and profitable startups.\n\nHis experience spans diverse industries and technologies:\n\n• Solar and battery-powered 30-foot trailers\n• Software and hardware solutions for risk prevention teams\n• Banking hardware and data center buildouts\n• Self-service spaces with booking, entry, usage, and lock functionality\n• Identity and access management systems\n• Casino accounting and security systems\n• Fleet management platforms for 1,000+ vehicle fleets with device and platform integrations',
    image: '/Headshot - Jake.jpg',
    email: 'jake@lambdavp.com',
    linkedin: 'https://www.linkedin.com/in/jakehaselden/',
  },
  {
    id: 'cameron-broussard',
    name: 'Cameron Broussard',
    title: 'Operating Partner',
    subtitle: 'Customer Success',
    bio: 'Head of Customer Success at Blue Prism. Experience at Fortune 100 companies guiding customer success.',
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

