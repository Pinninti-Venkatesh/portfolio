import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Venkatesh',
    lastName:  '',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    intro : 'I\'m',
    avatar:    '/images/avatar.png',
    location:  '',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Pinninti-Venkatesh',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/venkatesh-pinninti-581343137/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:pvenkatesh0614@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Developer</>,
    subline: <>I'm Venkatesh, a Software engineer at <InlineCode>Gokwik</InlineCode>, where I build scalable systems<br/></>
}

const about = {
    label: 'About',
    title: `${person.firstName} ${person.lastName}`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <><>I’m a software engineer who’s mastered the art of turning complex problems into  elegant solutions.</><br></br><br></br><>Armed with JavaScript, Node.js, and a sprinkle of React magic, I also dabble in slaying production bugs faster than they can be reported. Whether it’s writing code, debugging, or chatting with stakeholders, I’m always up for a challenge—and maybe a good laugh along the way.</></>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Gokwik',
                timeframe: '2023 December - Present',
                role: 'Software Development engineer - II',
                achievements: [
                    <>As an SDE-2, I’ve taken on responsibilities that require a deeper focus on scalability and system performance. My work includes optimizing critical system flows to ensure high availability and improving system integrations to handle increased user demand seamlessly.</>,
                    <>I’ve been responsible for handling feature relases,identifying and addressing vulnerabilities in existing workflows, ensuring the system's stability during high-traffic periods. My focus on enhancing monitoring and alerting systems has enabled quicker issue detection, reducing downtime and improving user experiences.</>,
                    <>My approach has always been to build solutions that are not just functional but also future-proof, aligning with GoKwik's mission to provide reliable and efficient e-commerce solutions.</>
                ],
                link:'https://www.gokwik.co/',
                images: []
            },
            {
                company: 'Gokwik',
                timeframe: '2022 April - 2023 November',
                role: 'Software Development engineer - I',
                achievements: [
                    <>During my tenure as an SDE-1 at GoKwik, I worked on improving the reliability and efficiency of our product. One of my notable contributions was redesigning the logging structure, which significantly enhanced our ability to trace issues quickly and efficiently.</>,
                    <>I also implemented systems like guardrails with various tools, uncovering hidden production bugs that had gone unnoticed but were impacting customers. This proactive approach allowed us to resolve issues faster and improve the overall system stability.</>,
                    <>I consistently collaborated with cross-functional teams to deliver high-quality solutions under tight deadlines. My ability to adapt to new technologies and tools, such as learning NestJS,shopify allowed me to contribute meaningfully to critical projects while ensuring the solutions were scalable and reliable.</>
                ],
                link:'https://www.gokwik.co/',
                images: []
            },
            {
                company: 'Newgen',
                timeframe: '2020 Janury - 2022 March',
                role: 'Software Engineer',
                achievements: [
                    <><b>Supplier Portal:</b> Designed and implemented a full-stack web application using Node.js and React.js, enabling suppliers to track and create invoices, as well as participate in bidding processes.</>,
                    <><b>Invoice Processing Optimization</b> Built a solution to extract and process JSON data from QR codes, streamlining invoice data handling.</>,
                    <><b>Custom Data Processing Functionalities:</b> Developed advanced features in Java and JavaScript to process data extracted from documents using multiple OCR engines.</>
                ],
                link:'https://newgensoft.com/',
                images: [ ]
            }
        ]
    },
    studies: {
        display: false,
        title: 'Studies',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Javascript',
                iconName:'Javascript'
            },
            {
                title: 'Node Js',
                iconName:"NodeJs"
            },
            ,
            {
                title: 'React Js',
                iconName:"React"
            },
            {
                title: 'HTML',
                iconName:"HTML"
            },
            {
                title: 'CSS',
                iconName:"CSS"
            },
            {
                title: 'AWS',
                iconName:"AWS"
            },
            {
                title: 'Java',
                iconName:"Java"
            },
            {
                title: 'SQL',
                iconName:"postgresSQL"
            },
            {
                title: 'No SQL',
                iconName:"mongoDB"
            },
            {
                title: 'Nest JS',
                iconName:"NestJs"
            },
            {
                title: 'Shopify',
                iconName:"shopify"
            },
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };