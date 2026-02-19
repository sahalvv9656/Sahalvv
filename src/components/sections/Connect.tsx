"use client";

import { useRef } from "react";
import { resume } from "@/data/resume";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Connect() {
    const container = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        gsap.from(contentRef.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });
    }, { scope: container });

    return (
        <section id="connect" ref={container} className="py-20 px-4">
            <div className="container max-w-4xl mx-auto text-center">
                <div ref={contentRef}>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-muted-foreground mb-12 max-w-xl mx-auto text-lg">
                        I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                        <Link
                            href={`mailto:${resume.personal.contact.email}`}
                            className="flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white/[0.08] transition-all hover:scale-105"
                        >
                            <Mail className="w-5 h-5 text-foreground" />
                            <span className="text-foreground">Email Me</span>
                        </Link>
                        <Link
                            href={resume.personal.contact.linkedin}
                            target="_blank"
                            className="flex items-center gap-3 px-6 py-3 bg-[#0077b5]/10 border border-[#0077b5]/20 rounded-full hover:bg-[#0077b5]/20 transition-all hover:scale-105"
                        >
                            <Linkedin className="w-5 h-5 text-[#0077b5]" />
                            <span className="text-[#0077b5]">LinkedIn</span>
                        </Link>
                        <Link
                            href={resume.personal.contact.github}
                            target="_blank"
                            className="flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white/[0.08] transition-all hover:scale-105"
                        >
                            <Github className="w-5 h-5 text-foreground" />
                            <span className="text-foreground">GitHub</span>
                        </Link>
                    </div>

                    <footer className="pt-8 border-t border-white/[0.05] text-muted-foreground text-sm">
                        <p>&copy; {new Date().getFullYear()} {resume.personal.name}. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </section>
    );
}
