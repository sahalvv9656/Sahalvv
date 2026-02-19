"use client";

import { useRef } from "react";
import { resume } from "@/data/resume";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        gsap.from(contentRef.current, {
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
    }, { scope: container });

    return (
        <section id="about" ref={container} className="py-20 px-4">
            <div className="container max-w-4xl mx-auto">
                <div ref={contentRef}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                        About Me
                    </h2>
                    <div className="prose prose-invert prose-lg mx-auto text-muted-foreground leading-relaxed text-center max-w-2xl">
                        <p>{resume.personal.about}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
