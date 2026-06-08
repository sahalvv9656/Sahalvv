"use client";

import { resume } from "@/data/resume";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />

            <div className="container max-w-6xl mx-auto z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <motion.div 
                        className="w-full md:w-1/2 flex justify-center md:justify-start"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/myimage.png"
                                alt={resume.personal.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Text Section (Right) */}
                    <motion.div 
                        className="w-full md:w-1/2 text-center md:text-left"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-xs font-semibold text-primary">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for new opportunities
                        </div>

                        <div className="mb-2 text-primary font-medium tracking-wider uppercase text-sm">
                            Hi, I&apos;m
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary/50">
                            {resume.personal.name}
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                            Junior <span className="text-primary">Frontend Engineer</span>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
                            {resume.personal.about.split('.')[0]}. {resume.personal.about.split('.')[1]}.
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap items-center md:justify-start justify-center gap-3 mb-10">
                            {['React', 'Next.js', 'TypeScript'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-foreground hover:border-primary/50 transition-colors cursor-default shadow-[0_0_10px_rgba(255,255,255,0.02)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4">
                            <Link
                                href="#projects"
                                className={cn(
                                    "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white text-black px-8 font-medium transition-all duration-300 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-lg"
                                )}
                            >
                                <span className="mr-2">View My Work</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="#connect"
                                className={cn(
                                    "inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-8 font-medium text-foreground shadow-sm transition-all duration-300 hover:bg-secondary/50 hover:scale-105 active:scale-95"
                                )}
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
