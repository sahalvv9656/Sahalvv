"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { resume } from "@/data/resume";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Connect", href: "#connect" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/[0.08]"
                    : "py-6 bg-transparent"
                }`}
        >
            <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo / Name */}
                <a
                    href="#"
                    className="text-xl md:text-2xl font-bold text-foreground tracking-tighter hover:text-primary transition-colors"
                >
                    {resume.personal.name}
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-foreground hover:bg-white/5 rounded-lg transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 min-h-screen z-[60] md:hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-background/90 backdrop-blur-sm"
                    onClick={toggleMenu}
                />

                {/* Sidebar */}
                <div
                    className={`absolute top-0 right-0 h-full w-[280px] bg-[#0A0A0A] border-l border-white/[0.08] p-8 flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex justify-between items-center mb-12">
                        <span className="font-bold tracking-tighter text-lg">Menu</span>
                        <button
                            onClick={toggleMenu}
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-medium text-muted-foreground hover:text-foreground hover:translate-x-2 transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto pt-12 border-t border-white/[0.08]">
                        <p className="text-xs text-muted-foreground mb-4 font-semibold uppercase tracking-widest">Connect</p>
                        <div className="flex gap-4">
                            {resume.personal.contact.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/[0.03] border border-white/[0.08] rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
