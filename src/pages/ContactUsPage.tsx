import { motion } from "motion/react";
import { Phone, Mail, Instagram, Linkedin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function ContactUsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            {/* Navbar placeholder or back button */}
            <div className="p-6">
                <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors gap-2">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>
            </div>

            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <motion.div
                    className="max-w-2xl w-full space-y-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-primary">
                            Contact Us
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-8 bg-card border border-border p-8 rounded-xl">
                            <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Team Representatives</h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Phone className="text-primary mt-1" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-lg">Adith A</h3>
                                        <a href="tel:+917736090642" className="text-muted-foreground hover:text-white transition-colors">
                                            +91 77360 90642
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="text-primary mt-1" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-lg">Adithya Rajesh</h3>
                                        <a href="tel:+917994412128" className="text-muted-foreground hover:text-white transition-colors">
                                            +91 79944 12128
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* General Inquiries & Socials */}
                        <div className="space-y-8 bg-card border border-border p-8 rounded-xl">
                            <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="text-primary mt-1" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-lg">Email Us</h3>
                                        <a href="mailto:overdriveracingrset@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
                                            overdriveracingrset@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-border mt-4">
                                    <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://www.instagram.com/racing.overdrive?igsh=MWQxbnprdTU3eWVpZg=="
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white/10 p-3 rounded-lg hover:bg-primary hover:text-black transition-all"
                                        >
                                            <Instagram size={24} />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/company/sae-rset/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white/10 p-3 rounded-lg hover:bg-primary hover:text-black transition-all"
                                        >
                                            <Linkedin size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8 text-muted-foreground text-sm">
                        <p>OVERDRIVE RACING - SAE RSET</p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
