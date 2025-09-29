import React from 'react';
import { Play } from 'lucide-react';
import { Link } from "react-router-dom";

const VideoGallery = () => {

    const videos = [
        {
            id: 1,
            title: "Amazing Voice Performance",
            thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
            duration: "3:45"
        },
        {
            id: 2,
            title: "Incredible Dance Routine",
            thumbnail: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
            duration: "2:30"
        },
        {
            id: 3,
            title: "Mind-Blowing Magic Act",
            thumbnail: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
            duration: "4:12"
        },
        {
            id: 4,
            title: "Comedy Gold",
            thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
            duration: "5:20"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    <span className="text-orange-400">SUCCESS STORIES</span>
                </h2>

                <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
                    For 15 consecutive seasons, Africa's Campus Battle has been the birthplace of the most
                    incredible entertainers from across the continent. With a record-breaking audience size of
                    more than 20 million viewers, ACB continues to be Africa's #1  show.
                </p>

                <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                    With a $1,000,000 grand prize, the show offers a life-changing platform, and our
                    creative team works closely with every contestant and star on the show to help them reach
                    their full artistic vision and help them craft their best performance to date.
                </p>

                <div className="text-center mb-16">

                    <Link
                        to="/pastseasons"
                        className="bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"

                    >
                <span className="relative">
                  MORE INFO
                  {/*<span className="bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"></span>*/}
                </span>
                    </Link>
                </div>

                {/* Past Performance Videos */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-center mb-12">
                        <span className="text-orange-400">PAST PERFORMANCE VIDEOS</span>
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {videos.map((video) => (
                            <div key={video.id} className="relative group cursor-pointer">
                                <div className="relative rounded-lg overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-red-600 p-3 rounded-full">
                                            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                                        {video.duration}
                                    </div>
                                </div>
                                <h4 className="text-white font-semibold mt-3">{video.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoGallery;