import React from 'react';
import {motion} from "framer-motion";

const TalentSection = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://i.imgur.com/Y1VkhUK.jpeg"
                    alt="Performer on stage"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    AUDITION FOR <span className="text-customOrange">AFRICA'S BIGGEST STUDENT</span><br />
                    <span className="text-white">TALENT STAGE</span>
                </h2>

                <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Upload your audition video from anywhere, campus, hostel or abroad.No stage, no travel,, no excuses. If you've got the talent, this is your chance to shine. Don't just watch history, own it.
                </p>

                <motion.a
                    href="#"
                    target={ "_blank"}
                    className="inline-block font-poppins bg-customBrown text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Submit your Audition Video here
                </motion.a>
            </div>
        </section>
    );
};

export default TalentSection;