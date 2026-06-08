"use client";

import { resume } from "@/data/resume";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
};

export default function Connect() {
    return (
        <section id="connect" className="py-20 px-4">
            <div className="container max-w-4xl mx-auto text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
                    >
                        Let&apos;s Connect
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-muted-foreground mb-12 max-w-xl mx-auto text-lg"
                    >
                        I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </motion.p>

                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
                    >
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
                    </motion.div>

                    <motion.footer 
                        variants={itemVariants}
                        className="pt-8 border-t border-white/[0.05] text-muted-foreground text-sm"
                    >
                        <p>&copy; {new Date().getFullYear()} {resume.personal.name}. All rights reserved.</p>
                    </motion.footer>
                </motion.div>
            </div>
        </section>
    );
}
