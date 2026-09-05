export const person = {
  firstName: "Venkatesh",
  lastName: "Pinninti",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  /** What he actually goes by — used for the nav wordmark. Initials read as an
   *  offensive word in Telugu, and the surname is a shared house name. */
  nickname: "venky",
  role: "Staff Engineer",
  tagline: "I build systems that stay up under real load.",
  location: "Bengaluru, India",
  avatar: "/images/avatar.png",
  /** Full-height, transparent-background character art for the hero orbit. */
  figure: "/images/figure.png",
  resume: "/resume.pdf",
};

export const social = [
  { name: "GitHub", href: "https://github.com/Pinninti-Venkatesh", icon: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/venkatesh-pinninti-581343137/", icon: "linkedin" },
  { name: "Email", href: "mailto:pvenkatesh0614@gmail.com", icon: "mail" },
] as const;

export const hero = {
  eyebrow: "Staff Engineer",
  headline: ["Venkatesh", "Pinninti."],
  subline:
    "I build distributed systems that stay up under real load. Six years on backend platforms where downtime is measured in lost revenue, and the operational tooling that keeps them honest.",
  roles: ["Distributed Systems", "Backend Architecture", "Platform Reliability", "API Design"],
};

/** Headline metrics. `value` is the number the counter animates to. */
export const stats = [
  { value: 100, suffix: "k+", label: "requests / minute", detail: "sustained production throughput" },
  { value: 6, suffix: " yrs", label: "building backends", detail: "Node.js, Go, Java" },
  { value: 0, suffix: "", prefix: "", zeroLabel: "Zero", label: "downtime migrations", detail: "monolith → microservice" },
  { value: 10, suffix: "k", prefix: "100→", label: "merchants scaled", detail: "growth carried by the platform" },
];

export const about = {
  title: "About",
  paragraphs: [
    "I'm a staff engineer with six years on backend systems where failure is expensive and visible. I'm currently at Imagine Learning, and before that spent four years at GoKwik scaling an ecommerce platform from a hundred merchants to ten thousand.",
    "My work sits where architecture meets operations: decomposing monoliths without dropping a request, designing event pipelines that absorb spikes, and building the monitoring that catches a failure before a customer does.",
    "I care about the unglamorous parts: idempotency, backpressure, graceful degradation, the migration plan. That's usually the difference between a system that demos well and one that survives peak traffic.",
  ],
};

export type Experience = {
  company: string;
  role: string;
  timeframe: string;
  href: string;
  current?: boolean;
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Imagine Learning",
    role: "Staff Engineer",
    timeframe: "Aug 2026 - Present",
    href: "https://www.imaginelearning.com/",
    current: true,
    achievements: [
      "Staff-level ownership of backend platform work: architecture, scalability and reliability for products used in classrooms at scale.",
    ],
    stack: [".NET", "C#", "Node.js", "TypeScript", "AWS"],
  },
  {
    company: "GoKwik",
    role: "Software Development Engineer II",
    timeframe: "Dec 2023 - Aug 2026",
    href: "https://www.gokwik.co/",
    achievements: [
      "Designed and ran services sustaining 100k+ requests per minute, under strict SLAs for latency, availability and consistency.",
      "Decoupled monolithic customer and address components into a dedicated microservice, improving fault isolation and response times, and executed the cutover with zero downtime for live traffic.",
      "Built a real-time failure-monitoring microservice on EKS, Kafka and MongoDB that detects anomalies ahead of user impact, auto-downgrades non-critical features and routes to intelligent fallbacks, protecting conversion and revenue.",
      "End-to-end ownership of mission-critical services: performance tuning, cost and operational-overhead reduction, and production incident response.",
      "Drove engineering quality across the team through code review and architectural evaluation.",
    ],
    stack: ["Node.js", "TypeScript", "Go", "Kafka", "Redis", "MongoDB", "AWS"],
  },
  {
    company: "GoKwik",
    role: "Software Development Engineer I",
    timeframe: "Apr 2022 - Nov 2023",
    href: "https://www.gokwik.co/",
    achievements: [
      "Redesigned the logging structure, sharply reducing the time to trace a production issue.",
      "Implemented guardrail systems that surfaced hidden production bugs already affecting customers.",
      "Shaped new product features by turning business gaps into technical proposals with PMs and stakeholders.",
    ],
    stack: ["Node.js", "NestJS", "MongoDB", "Redis", "Shopify"],
  },
  {
    company: "Newgen Software Technologies",
    role: "Software Engineer Trainee → Software Engineer",
    timeframe: "Jan 2020 - Apr 2022",
    href: "https://newgensoft.com/",
    achievements: [
      "Supplier Portal: designed and built a full-stack application in Node.js and React enabling suppliers to raise invoices and take part in bidding.",
      "Invoice processing: built a pipeline to extract and normalise JSON data from QR codes, streamlining invoice handling.",
      "Developed data-processing modules in Java and JavaScript to merge and enrich document data from multiple OCR engines, improving accuracy and fault tolerance.",
    ],
    stack: ["Node.js", "React", "Java", "JavaScript"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  detail: string;
  tags: string[];
  metric?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Real-Time Failure Monitoring",
    blurb: "An anomaly detector that degrades a product gracefully instead of failing it.",
    detail:
      "Built on EKS, Kafka and MongoDB. Watches live signals in real time, and on degradation automatically downgrades non-critical features and routes to fallbacks, so the flow completes rather than errors. Protects revenue during incidents.",
    tags: ["Kafka", "EKS", "MongoDB", "Go"],
    metric: "Pre-impact detection",
  },
  {
    title: "Zero-Downtime Monolith Decomposition",
    blurb: "Extracted customer and address handling into its own service, live, with no downtime.",
    detail:
      "Dual-write and shadow-read migration with a staged cutover and rollback at every step. Improved fault isolation and response times without a maintenance window for anyone on the platform.",
    tags: ["Microservices", "PostgreSQL", "Migration"],
    metric: "0 downtime",
  },
  {
    title: "High-Throughput Commerce Platform",
    blurb: "Core ecommerce infrastructure running at 100k+ requests per minute.",
    detail:
      "Latency, availability and consistency SLAs held while the platform grew from a hundred merchants to ten thousand. Work spanned service decomposition, caching strategy, and the operational tooling around releases.",
    tags: ["Node.js", "TypeScript", "AWS ECS", "Redis"],
    metric: "100k+ RPM",
  },
  {
    title: "Personal Site",
    blurb: "This site. Designed and built solo.",
    detail:
      "Next.js App Router, Tailwind, and a motion layer built around a CSS 3D orbit, scroll-linked reveals and magnetic controls. Fully keyboard navigable and honours prefers-reduced-motion.",
    tags: ["Next.js", "React", "Tailwind", "CSS 3D"],
    href: "https://www.iamvenkatesh.in",
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Go", "Java", "SQL"] },
  { title: "Backend", items: ["Node.js", "NestJS", "Express", "REST APIs", "Microservices"] },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "MSSQL", "Athena"] },
  { title: "Streaming & Infra", items: ["Kafka", "Docker", "Kubernetes", "AWS ECS", "AWS EKS"] },
  { title: "AWS", items: ["Lambda", "Step Functions", "S3", "RDS", "CloudWatch"] },
  { title: "Frontend", items: ["React", "Next.js", "Redux", "Tailwind CSS"] },
];

/**
 * The single orbit the skills travel on.
 *
 * It is a plane in a shared `preserve-3d` scene:
 *   tilt — rotateX, in degrees. 0 faces the camera, 90 is perfectly edge-on.
 *   yaw  — rotateY, in degrees. Swings the near side left or right.
 *   y    — vertical offset from the figure's centre.
 * The path itself is never drawn; only the labels riding it are visible, and because
 * everything shares one 3D context the browser depth-sorts them against the figure —
 * they genuinely pass behind him and come back around the front.
 */
export type OrbitRing = {
  radius: number;
  duration: number;
  tilt: number;
  yaw: number;
  y: number;
  reverse?: boolean;
  items: { label: string; angle: number }[];
};

export const orbitRings: OrbitRing[] = [
  {
    radius: 190,
    duration: 18,
    tilt: 71,
    yaw: -6,
    y: 0,
    // Twelve, evenly spaced 30 degrees apart. The orbit path is invisible, so the
    // labels themselves are what trace it; more of them makes the ellipse read
    // more clearly, and the depth fade keeps the far half from crowding the near.
    items: [
      { label: "Node.js", angle: 0 },
      { label: "TypeScript", angle: 30 },
      { label: "Go", angle: 60 },
      { label: "Java", angle: 90 },
      { label: "Kafka", angle: 120 },
      { label: "Redis", angle: 150 },
      { label: "PostgreSQL", angle: 180 },
      { label: "MongoDB", angle: 210 },
      { label: "AWS", angle: 240 },
      { label: "Kubernetes", angle: 270 },
      { label: "Docker", angle: 300 },
      { label: "Distributed Systems", angle: 330 },
    ],
  },
];

/** Flat list used by the marquee. */
export const skillMarquee = [
  "Node.js", "TypeScript", "Go", "Kafka", "Redis", "PostgreSQL", "MongoDB",
  "Docker", "Kubernetes", "AWS", "NestJS", "React", "Next.js", "Java",
];

export const awards = [
  {
    title: "Special 26 Award",
    org: "GoKwik",
    detail: "Top 26 contributors company-wide, for high-impact system-level innovation.",
  },
  {
    title: "Rising Star Award",
    org: "Newgen Software Technologies",
    detail: "Exceptional early impact as a new joiner.",
  },
];

export const contact = {
  title: "Let's build something that holds",
  body:
    "I'm open to backend and systems work: architecture reviews, performance rescues, or building a service from scratch.",
  email: "pvenkatesh0614@gmail.com",
};

export const nav = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
