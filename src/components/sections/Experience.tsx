"use client";

import { resume } from "@/data/resume";
import { Briefcase, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="container max-w-5xl mx-auto">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
                >
                    Work Experience
                </h2>

                <div className="grid gap-6">
                    {resume.experience.map((job, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:-translate-y-1"
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.03)] border border-white/5 rounded-2xl" />

                            <div className="relative z-10 md:flex gap-8 items-start">
                                <div className="md:w-1/3 mb-6 md:mb-0">
                                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4 border border-primary/20">
                                        {job.duration}
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">{job.company}</h3>
                                    <div className="text-foreground/90 flex items-center gap-2 text-sm font-semibold mb-3">
                                        <Briefcase className="w-4 h-4 text-primary" />
                                        {job.role}
                                    </div>
                                    <div className="text-muted-foreground flex items-center gap-2 text-xs">
                                        <MapPin className="w-3 h-3" />
                                        {job.location}
                                    </div>
                                </div>

                                <div className="md:w-2/3">
                                    <ul className="space-y-3">
                                        {job.description.map((desc, i) => (
                                            <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

