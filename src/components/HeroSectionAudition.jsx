
import { Play } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import {motion} from "framer-motion";
import Poster2 from "./Poster2.jsx";
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
                    src="/294.avif"
                    alt="Stage performance"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 "></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
                    <span className="block text-white text-glow text-5xl mb-2">AUDITIONING FOR</span>
                    <span className="block bg-customOrange text-6xl bg-clip-text text-transparent">
            ACB HAS NEVER BEEN EASIER!
          </span>
                </h1>

                <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
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
                            <div className="text-3xl md:text-4xl font-bold text-white">OCT. 3RD</div>
                        </div>


                    </div>

                </div>
                <Poster2 />



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


            </div>
        </section>
    );
};

export default HeroSectionAudition;