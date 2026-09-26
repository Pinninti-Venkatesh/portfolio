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
  tagline: "Startup speed, big-system discipline.",
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
  eyebrow: "Staff Engineer · Startup-built, scale-tested",
  headline: ["Venkatesh", "Pinninti."],
  subline:
    "Four years inside a hypergrowth startup, scaling a checkout platform from 100 merchants to 10,000 at 100k+ requests a minute. I ship fast without a playbook, and I bring the discipline that stops fast from turning fragile: SLAs, staged rollouts, rollback plans, and monitoring that fires before customers notice.",
  roles: ["Shipping in Ambiguity", "Distributed Systems", "Reliability at Scale", "Engineering Standards"],
};

/** Headline metrics. `value` is the number the counter animates to. */
export const stats = [
  { value: 10, suffix: "k", prefix: "100→", label: "merchants scaled", detail: "carried through hypergrowth" },
  { value: 100, suffix: "k+", label: "requests / minute", detail: "under strict latency and availability SLAs" },
  { value: 0, suffix: "", prefix: "", zeroLabel: "Zero", label: "downtime migrations", detail: "every cutover shipped with a rollback" },
  { value: 6, suffix: " yrs", label: "building backends", detail: "Node.js, Go, Java" },
];

export const about = {
  title: "About",
  paragraphs: [
    "I spent four years at GoKwik while it grew from a hundred merchants to ten thousand. Most weeks there was no playbook: requirements moved, traffic climbed, and calls had to be made with half the information. I learned to ship anyway.",
    "What I took from it is that speed and rigor aren't a trade-off. Every migration I ran had a rollback plan. Every critical path had a latency budget and an alert. Code and design review happened even when the deadline was tomorrow, because that's what let us keep shipping the day after.",
    "Now I'm a staff engineer at Imagine Learning, on platforms used in classrooms at scale, bringing the same mix: move quickly, and leave behind systems and processes the next engineer can trust.",
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
      "Led the extraction of customer and address handling from the monolith while it served live traffic. Chose a dual-write and shadow-read migration with a staged cutover and rollback at every step: zero downtime, better fault isolation and response times.",
      "Built a real-time failure-monitoring service on EKS, Kafka and MongoDB that spots anomalies before users feel them, then automatically downgrades non-critical features and routes to fallbacks, so checkout degrades instead of failing.",
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
      "Introduced production guardrails on my own initiative, and they surfaced bugs that were already hurting customers.",
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
  /** The decision made with incomplete information, shown as "The call". */
  call?: string;
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
    call: "Degrade non-critical features automatically instead of waiting for a human. A slower checkout beats a failed one.",
  },
  {
    title: "Zero-Downtime Monolith Decomposition",
    blurb: "Extracted customer and address handling into its own service, live, with no downtime.",
    detail:
      "Dual-write and shadow-read migration with a staged cutover and rollback at every step. Improved fault isolation and response times without a maintenance window for anyone on the platform.",
    tags: ["Microservices", "PostgreSQL", "Migration"],
    metric: "0 downtime",
    call: "No maintenance window, so every step had to be reversible. Slower to ship, but never a moment we couldn't back out of.",
  },
  {
    title: "High-Throughput Commerce Platform",
    blurb: "Core ecommerce infrastructure running at 100k+ requests per minute.",
    detail:
      "Latency, availability and consistency SLAs held while the platform grew from a hundred merchants to ten thousand. Work spanned service decomposition, caching strategy, and the operational tooling around releases.",
    tags: ["Node.js", "TypeScript", "AWS ECS", "Redis"],
    metric: "100k+ RPM",
    call: "Hold the SLAs while the merchant count grew 100x, rather than rewrite and hope. Scale the parts that hurt, when they hurt.",
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

/** Operating principles: where startup speed meets big-system discipline. */
export const principles = [
  {
    title: "Ship the smallest reversible thing",
    detail: "Most calls are made with half the information. Keeping them small and reversible is what makes moving fast safe.",
  },
  {
    title: "No migration without a rollback",
    detail: "Dual-writes, shadow reads, staged cutovers. If a step can't be undone, it isn't ready to run on live traffic.",
  },
  {
    title: "Monitor before you need to",
    detail: "The alert, the dashboard and the fallback go in with the feature, not after the first incident.",
  },
  {
    title: "Standards scale, heroics don't",
    detail: "Code review, design review and written runbooks, even under deadline. That's what lets a small team keep shipping.",
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
    "I'm looking for teams that move like a startup and want to build like they'll be big: backend foundations, reliability, and the engineering bar that lets a small team ship quickly without breaking things.",
  email: "pvenkatesh0614@gmail.com",
};

export const nav = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "approach", label: "Approach" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
