import {motion} from "framer-motion";


const AuditionInfo = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Submit Video */}
                    <div className="relative group">
                        <img
                            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop"
                            alt="Submit your audition"
                            className="w-full h-80 object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3 inline-block">
                                <motion.a
                                    href="https://forms.gle/m3Z4PwdBirDyHBgc9"
                                    target={ "_blank"}
                                    // className="inline-block font-poppins text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Submit your audition video here
                                </motion.a>
                            </div>
                            <p className="text-white text-lg leading-relaxed">
                                Upload your best performance and get noticed by our casting team.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Know Talent */}
                    {/*<div className="relative group">*/}
                    {/*    <img*/}
                    {/*        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"*/}
                    {/*        alt="Know talent"*/}
                    {/*        className="w-full h-80 object-cover rounded-2xl"*/}
                    {/*    />*/}
                    {/*    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>*/}
                    {/*    <div className="absolute bottom-6 left-6 right-6">*/}
                    {/*        <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3 inline-block">*/}
                    {/*            KNOW TALENT? NOMINATE ACTS FOR ACB HERE*/}
                    {/*        </div>*/}
                    {/*        <p className="text-white text-lg leading-relaxed">*/}
                    {/*            Nominate someone with incredible talent for their chance to shine.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
};

export default AuditionInfo;