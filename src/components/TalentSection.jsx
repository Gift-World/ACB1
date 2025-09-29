import React from 'react';
import {motion} from "framer-motion";

const TalentSection = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&h=800&fit=crop"
                    alt="Performer on stage"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    AUDITIONING FOR <span className="text-orange-600">AFRICA'S CAMPUS BATTLE</span><br />
                    <span className="text-white">HAS NEVER BEEN EASIER!</span>
                </h2>

                <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Audition live in front of a producer by uploading a video. That’s it! No stage, no travel, no excuses. If you’ve got talent, it’s time to show us!
                    Sign up to audition today.
                </p>

                <motion.a
                    href="https://forms.gle/m3Z4PwdBirDyHBgc9"
                    target={ "_blank"}
                    className="inline-block font-poppins bg-customBrown text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Audition for ACB Season 7
                </motion.a>
            </div>
        </section>
    );
};

export default TalentSection;