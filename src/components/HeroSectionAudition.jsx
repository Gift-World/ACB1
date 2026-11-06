
import { Play } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import {motion} from "framer-motion";
import Poster2 from "./Poster2.jsx";
import imageUrl from '../utils/netlifyImage';
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
        <>
        <section className="relative flex h-[76svh] min-h-[560px] items-center justify-center overflow-hidden px-4 pt-20 sm:h-[80svh] md:min-h-[680px]">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={imageUrl('/294.avif', 1600, 82)}
                    alt="Stage performance"
                    className="h-full w-full object-cover object-[58%_center]"
                />
                <div className="absolute inset-0 bg-black/55"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl rounded-2xl bg-black/30 px-4 py-6 text-center backdrop-blur-[1px] sm:px-8 sm:py-10">
                <h1 className="mb-5 text-3xl font-bold leading-tight animate-fade-in sm:text-4xl md:text-6xl lg:text-7xl">
                    <span className="mb-2 block text-4xl text-white text-glow sm:text-5xl">AUDITIONING FOR</span>
                    <span className="block bg-customOrange text-4xl bg-clip-text text-transparent sm:text-5xl md:text-6xl">
            ACB HAS NEVER BEEN EASIER!
          </span>
                </h1>

                <p className="mx-auto max-w-3xl text-base leading-relaxed text-white sm:text-xl md:text-2xl">
                    Join the biggest student talent stage in Africa. Submit your audition video and get discovered by many.
                </p>
            </div>
        </section>

        <section className="bg-black px-4 py-12 text-white sm:px-6 md:py-16">
            <div className="mx-auto max-w-6xl text-center">
                {/* ACB Virtual Auditions */}
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
        </>
    );
};

export default HeroSectionAudition;
