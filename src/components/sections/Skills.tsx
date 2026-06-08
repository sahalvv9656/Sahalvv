"use client";

import { resume } from "@/data/resume";
import * as SiIcons from "react-icons/si";
import { motion } from "framer-motion";

const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
};

const categoryVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
};

export default function Skills() {
    const categories = [
        { id: 'frontend', name: 'Frontend Technologies', items: resume.skills.frontend },
        { id: 'backend', name: 'Backend Technologies', items: resume.skills.backend },
        { id: 'languages', name: 'Languages', items: resume.skills.languages },
        { id: 'database', name: 'Database Management', items: resume.skills.database },
        { id: 'tools', name: 'Tools', items: resume.skills.tools },
        { id: 'versionControl', name: 'Version Control', items: resume.skills.versionControl },
    ];

    return (
        <section id="skills" className="py-24 px-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container max-w-5xl mx-auto relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={headerVariants}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        Technical Skills
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        A structured overview of my technical expertise and the tools I use.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-8">
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                            variants={categoryVariants}
                            className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                        >
                            {/* Inner Glow Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] rounded-2xl" />

                            <h3 className="text-xl font-bold text-foreground mb-8 pb-4 border-b border-white/[0.08] flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                                {category.name}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.items.map((skill) => {
                                    const IconComponent = (SiIcons as any)[skill.icon];

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            variants={skillItemVariants}
                                            className="group/item relative flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl transition-all duration-300 hover:border-white/10 hover:-translate-y-1"
                                        >
                                            {/* Skill Glow */}
                                            <div
                                                className="absolute inset-0 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                style={{
                                                    boxShadow: `0 0 15px ${skill.color}11`,
                                                    borderColor: skill.color,
                                                    borderWidth: '1px',
                                                    borderStyle: 'solid'
                                                }}
                                            />

                                            <div
                                                className="text-2xl mb-2 transition-transform duration-300 group-hover/item:scale-110"
                                                style={{ color: skill.color }}
                                            >
                                                {IconComponent ? <IconComponent /> : null}
                                            </div>
                                            <span className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover/item:text-foreground transition-colors text-center">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
