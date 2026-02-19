import { Github, Linkedin, Mail } from "lucide-react";

export const resume = {
    personal: {
        name: "Sahal V V",
        title: "Frontend Engineer",
        brief: "Building scalable, modular, and user-friendly web applications.",
        about: "A dedicated Frontend Engineer specializing in building scalable, modular, and user-friendly web applications. At Storepecker, I contribute to the development of product themes and interactive dashboards, ensuring consistency and performance across projects. My expertise lies in crafting responsive interfaces with Next.js, React, and TypeScript, styled with Tailwind CSS, SCSS, and Ant Design. I am passionate about optimizing workflows, enhancing reusability of components, and collaborating with cross-functional teams to deliver polished, modern solutions that elevate user experience.",
        contact: {
            phone: "+919645228096",
            email: "sahalvv9656@gmail.com",
            linkedin: "https://linkedin.com/in/sahal-vv96/",
            github: "https://github.com/sahal2255",
            socials: [
                {
                    name: "Email",
                    url: "mailto:sahalvv9656@gmail.com",
                    icon: Mail,
                },
                {
                    name: "LinkedIn",
                    url: "https://linkedin.com/in/sahal-vv96/",
                    icon: Linkedin,
                },
                {
                    name: "GitHub",
                    url: "https://github.com/sahal2255",
                    icon: Github,
                },
            ],
        },
    },
    skills: {
        frontend: [
            { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
            { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
            { name: "React.js", icon: "SiReact", color: "#61DAFB" },
            { name: "Redux", icon: "SiRedux", color: "#764ABC" },
            { name: "Redux Toolkit", icon: "SiRedux", color: "#764ABC" },
            { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
            { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
            { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
            { name: "Bootstrap", icon: "SiBootstrap", color: "#7952B3" },
            { name: "Ant Design", icon: "SiAntdesign", color: "#0170FE" },
            { name: "MUI", icon: "SiMui", color: "#007FFF" },
            { name: "Chart.js", icon: "SiChartdotjs", color: "#FF6384" },
            { name: "GSAP", icon: "SiGsap", color: "#88CE02" },
        ],
        backend: [
            { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
            { name: "Express", icon: "SiExpress", color: "#ffffff" },
            { name: "JWT", icon: "SiJsonwebtokens", color: "#000000" },
            { name: "Axios", icon: "SiAxios", color: "#5A29E4" },
        ],
        languages: [
            { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
            { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
        ],
        database: [
            { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
        ],
        tools: [
            { name: "npm", icon: "SiNpm", color: "#CB3837" },
            { name: "EJS", icon: "SiEjs", color: "#A91E50" },
            { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
            { name: "Cloudinary", icon: "SiCloudinary", color: "#3448C5" },
            { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
            { name: "Razorpay", icon: "SiRazorpay", color: "#008CD3" },
            { name: "Swagger", icon: "SiSwagger", color: "#85EA2D" },
            { name: "Vite", icon: "SiVite", color: "#646CFF" },
        ],
        versionControl: [
            { name: "Git", icon: "SiGit", color: "#F05032" },
            { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
        ],
    },
    experience: [
        {
            company: "Storepecker",
            role: "Jr Frontend Engineer",
            duration: "Oct 2025 – Present",
            location: "Kochi, Kerala",
            description: [
                "Contributed to the development and refinement of multiple product themes and interactive dashboards, ensuring consistency, scalability, and a modern user experience.",
                "Implemented responsive and accessible user interfaces using Next.js, React, and TypeScript, styled with Tailwind CSS, SCSS, and Ant Design.",
                "Optimized component reusability and modularity across projects, improving maintainability and reducing development overhead.",
                "Collaborated with cross-functional teams to streamline workflows, manage version control with Git, and ensure seamless integration of new features.",
                "Enhanced performance and usability of dashboards by refining state management, improving data visualization, and applying best practices in UI/UX design.",
            ],
        },
        {
            company: "SelfStack",
            role: "Full Stack Developer Intern",
            duration: "Sep 2023 – Dec 2024",
            location: "Kozhikode, Kerala",
            description: [
                "Worked on over 20 mini projects and one major project, specializing in full-stack development with MongoDB, Express.js, Node.js, and React.js.",
                "Developed a full-stack application leveraging JavaScript, HTML, CSS, MongoDB, Node.js, and Express.js to streamline data processing and enhance user experience.",
                "Currently developing QuickFix, a full-stack service management platform using React.js, Node.js, Express.js, and MongoDB.",
                "Designed user interfaces using React.js and styled with Tailwind CSS for a modern and responsive user experience. Managed state effectively using Redux.",
            ],
        },
    ],
    projects: [
        {
            title: "QuickFix",
            tech: "React.js, Node.js, Express.js, MongoDB",
            date: "September 2024 – October 2024",
            description:
                "Developed a comprehensive service management application that supports three user roles: User, Vendor, and Admin. Implemented JWT for secure auth and Razorpay for payments.",
            points: [
                "Supported three user roles: User, Vendor, and Admin.",
                "Implemented JWT for secure user authentication.",
                "Utilized React and Redux for dynamic user experience.",
                "Integrated Razorpay for secure payment processing.",
            ],
            links: {
                frontend: "#", // User provided "QuickFix Frontend", assuming link wasn't provided in text so leaving placeholder or #
                backend: "#",
            },
        },
        {
            title: "DryVitals.shop",
            tech: "Node.js, Express.js, MongoDB, HTML, CSS, Razorpay",
            date: "April 2024 – May 2024",
            link: "https://github.com/sahal2255/DryVitals",
            description:
                "Comprehensive e-commerce website streamlining shopping experience and administration.",
            points: [
                "Utilized Node.js and Express.js for server-side operations.",
                "Implemented MongoDB for scalable data storage.",
                "Integrated Razorpay payment gateway.",
                "Implemented JWT for secure auth.",
                "Hosted on AWS.",
            ],
        },
        {
            title: "WeatherApp",
            tech: "React, OpenWeatherMap API",
            date: "June 2024 – June 2024",
            link: "https://github.com/sahal2255/WeatherApp",
            description:
                "Weather forecasting application using React and OpenWeatherMap API.",
            points: [
                "Integrated OpenWeatherMap API for real-time data.",
                "Implemented responsive design.",
                "Used react-select-async-paginate for efficient data loading.",
            ],
        },
    ],
    education: [
        {
            school: "Model Polytechnic College Vadakara, Kozhikode",
            degree: "Diploma In Electronics Engineering",
            duration: "Aug. 2020 – May 2023",
        },
    ],
};
