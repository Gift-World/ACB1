import React from 'react';

const SpotlightSection = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1920&h=800&fit=crop"
                    alt="Spotlight performer"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-left">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        <span className="text-white">KNOW SOMEONE WITH AN</span><br />
                        <span className="text-pink-400">AMAZING VOICE, A GIFT FOR</span><br />
                        <span className="text-white">COMEDY, OR A HIDDEN TALENT</span><br />
                        <span className="text-pink-400">THAT DESERVES THE SPOTLIGHT?</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
                        Africa's Campus Battle is always looking for extraordinary performers to share. ACB
                        casting producers are in search of the most unique, heartwarming, funny and world-class talent.

                        If you know someone with that spark that makes everyone watch when a new
                        talent show star, recommend them today and they could become the next big sensation!
                    </p>

                    <button className="bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        NOMINATE TALENT
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SpotlightSection;