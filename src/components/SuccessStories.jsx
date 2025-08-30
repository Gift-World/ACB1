
const SuccessStories = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1920&h=800&fit=crop"
                    alt="Concert crowd"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-orange-900/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="text-right max-w-6xl ml-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        <span className="text-white">THE STAGE IS SET AND THE</span><br />
                        <span className="text-orange-400">SPOTLIGHT IS WAITING.</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl ml-auto">
                        Africa's Campus Battle has launched the careers of countless performers who started
                        just like you. From winners like Kodi Lee to fan favorites like Terry Crews, Sofia Vergara, Mel B, and Heidi Klum,
                        this is the stage where dreams become reality and superstars are born.
                    </p>

                    <button className="bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        GET TICKETS
                    </button>
                </div>

                {/* Success Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
                        <div className="text-white text-sm">SEASONS</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-400 mb-2">1M+</div>
                        <div className="text-white text-sm">AUDITIONS</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
                        <div className="text-white text-sm">WINNERS</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-400 mb-2">100M+</div>
                        <div className="text-white text-sm">VIEWERS</div>
                    </div>
                </div>
            </div>

            {/* Judge Silhouettes */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
};

export default SuccessStories;