"use client";

import { resume } from "@/data/resume";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
};

export default function About() {
    return (
        <section id="about" className="py-20 px-4">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground"
                    >
                        About Me
                    </motion.h2>
                    <motion.div 
                        variants={itemVariants}
                        className="prose prose-invert prose-lg mx-auto text-muted-foreground leading-relaxed text-center max-w-2xl"
                    >
                        <p>{resume.personal.about}</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
