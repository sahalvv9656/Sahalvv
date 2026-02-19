"use client";

import { resume } from "@/data/resume";
import { Github } from "lucide-react";
import Link from "next/link";
import * as SiIcons from "react-icons/si";

export default function Projects() {
    // Flatten all skills for easy lookup
    const allSkills = Object.values(resume.skills).flat();

    const getSkillData = (techName: string) => {
        const normalized = techName.toLowerCase().trim();
        return allSkills.find(s =>
            s.name.toLowerCase() === normalized ||
            s.name.toLowerCase() === normalized + ".js" ||
            normalized === s.name.toLowerCase() + ".js" ||
            (normalized === "react" && s.name === "React.js") ||
            (normalized === "next" && s.name === "Next.js") ||
            (normalized === "node" && s.name === "Node.js")
        );
    };

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        Selected Projects
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my recent work and technical contributions.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {resume.projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                        >
                            {/* Inner Glow Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] rounded-2xl" />

                            <div className="relative z-10 lg:flex gap-12 items-start">
                                <div className="lg:w-1/3 mb-6 lg:mb-0">
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                                        {project.title}
                                    </h3>
                                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-6 border border-primary/20">
                                        {project.date}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        {project.link && (
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
                                            >
                                                <Github className="w-4 h-4" />
                                                Source Code
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <div className="lg:w-2/3">
                                    <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {project.points && (
                                        <ul className="space-y-2 mb-8">
                                            {project.points.map((point, i) => (
                                                <li key={i} className="flex gap-3 text-muted-foreground text-xs md:text-sm leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="flex flex-wrap gap-3">
                                        {project.tech.split(", ").map((t) => {
                                            const skill = getSkillData(t);
                                            const IconComponent = skill ? (SiIcons as any)[skill.icon] : null;

                                            return (
                                                <div
                                                    key={t}
                                                    className="group/tech relative flex items-center gap-2 px-3 py-1.5 bg-white/[0.02] border border-white/[0.05] rounded-lg transition-all duration-300 hover:border-white/10"
                                                >
                                                    {skill && (
                                                        <div
                                                            className="absolute inset-0 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                            style={{
                                                                boxShadow: `0 0 10px ${skill.color}11`,
                                                                borderColor: skill.color,
                                                                borderWidth: '1px',
                                                                borderStyle: 'solid'
                                                            }}
                                                        />
                                                    )}
                                                    {IconComponent && (
                                                        <IconComponent
                                                            className="text-sm transition-transform duration-300 group-hover/tech:scale-110"
                                                            style={{ color: skill?.color }}
                                                        />
                                                    )}
                                                    <span className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover/tech:text-foreground transition-colors">
                                                        {t}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


