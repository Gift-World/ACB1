import { motion } from 'framer-motion';

function Poster2() {
    return (
        <div className=" py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">


                <div className="relative max-w-[5n00px] mx-auto">
                    {/* Decorative elements */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-white rounded-lg blur opacity-75 animate-pulse-slow"></div>

                    {/* Poster Container */}
                    <div className="relative bg-gray-900 rounded-lg p-3">
                        <img
                            src="/season7-auditions.avif"
                            alt="Africa's Campus Battle Season 7 Poster"
                            className="w-[450px] rounded shadow-2xl transform transition-transform duration-300 hover:scale-105"
                        />


                    </div>
                </div>



            </div>
            <section id="apply" className="py-20 px-4  md:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.a
                        href="https://forms.gle/m3Z4PwdBirDyHBgc9"
                        target={ "_blank"}
                        className="inline-block font-poppins bg-customBrown text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Apply for ACB Virtual Edition
                    </motion.a>
                </motion.div>
            </section>

        </div>
    )
}

export default Poster2