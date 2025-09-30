
import { Play } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import {motion} from "framer-motion";
const highlights = [

    {
        type: 'video',
        url: 'https://www.youtube.com/embed/SKl-0hV_Zhg',
        title: 'Season 6 Experience',
        description: 'Where it all began - best moments'
    }
];

const HeroSectionAudition = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 justify-center overflow-hidden">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop"
                    alt="Stage performance"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
                    <span className="block text-white text-glow text-5xl mb-2">AUDITIONING FOR</span>
                    <span className="block bg-gradient-to-r from-orange-400 text-6xl to-orange-500 bg-clip-text text-transparent">
            ACB HAS NEVER BEEN EASIER!
          </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join the biggest student talent stage in Africa. Submit your audition video and get discovered by many.
                </p>

                {/* AGT Virtual Auditions */}
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                        <span className="text-orange-500">ACB</span> VIRTUAL AUDITIONS:
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <div className="text-center">
                            <div className="text-orange-400 font-bold text-sm mb-1"> Open From</div>
                            <div className="text-3xl md:text-4xl font-bold text-white">OCT. 3</div>
                        </div>
                        {/*<div className="text-center">*/}
                        {/*    <div className="text-orange-400 font-bold text-sm mb-1">DANCE ACTS</div>*/}
                        {/*    <div className="text-3xl md:text-4xl font-bold text-white">NOV. 21</div>*/}
                        {/*</div>*/}
                        {/*<div className="text-center">*/}
                        {/*    <div className="text-orange-400 font-bold text-sm mb-1">VARIETY ACTS</div>*/}
                        {/*    <div className="text-3xl md:text-4xl font-bold text-white">JAN. 10</div>*/}
                        {/*</div>*/}
                    </div>
                </div>

                {/* Video Player */}
                {/*<div className="relative max-w-4xl mx-auto mb-12 group">*/}
                {/*    <div className="relative rounded-2xl overflow-hidden shadow-2xl">*/}
                {/*        <img*/}
                {/*            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=450&fit=crop"*/}
                {/*            alt="Performance stage"*/}
                {/*            className="w-full h-64 md:h-96 object-cover"*/}
                {/*        />*/}
                {/*        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">*/}
                {/*            <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 group-hover:scale-105">*/}
                {/*                <Play className="w-8 h-8 ml-1" fill="currentColor" />*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*        <div className="absolute bottom-4 left-4 right-4">*/}
                {/*            <div className="bg-black/60 rounded-lg p-3">*/}
                {/*                <div className="text-white text-sm font-semibold">ACB 2024 Auditions Highlights</div>*/}
                {/*                <div className="text-gray-300 text-xs">Watch the most amazing performances</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="space-y-8 relative max-w-4xl mx-auto group">
                    <h3 className="text-2xl font-bold text-white text-center mb-8"> Season 6 Experience</h3>
                    <div className="space-y-6">
                        {highlights.filter(h => h.type === 'video').map((video, index) => (
                            <div key={index} className="relative rounded-xl overflow-hidden">
                                {index === 0 ? (
                                    <video
                                        className="w-full aspect-video rounded-xl"
                                        controls
                                        src="/videos/acb season 6 experience.mp4" // Replace with the correct server path for your video
                                    />
                                ) : (
                                    <iframe
                                        src={video.url}
                                        className="w-full aspect-video rounded-xl"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                )}
                                <div className="mt-2">
                                    <h4 className="text-lg font-bold text-white">{video.title}</h4>
                                    <p className="text-gray-300">{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Buttons */}
                {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
                {/*    <motion.a*/}
                {/*        href="https://forms.gle/m3Z4PwdBirDyHBgc9"*/}
                {/*        target={ "_blank"}*/}
                {/*        className="inline-block font-poppins bg-customBrown text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"*/}
                {/*        whileHover={{ scale: 1.1 }}*/}
                {/*        whileTap={{ scale: 0.9 }}*/}
                {/*    >*/}
                {/*        Audition now for ACB season 7 here!*/}
                {/*    </motion.a>*/}
                {/*    /!*<button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">*!/*/}
                {/*    /!*    LEARN MORE*!/*/}
                {/*    /!*</button>*!/*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default HeroSectionAudition;