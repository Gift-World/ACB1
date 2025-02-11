import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { BsChevronDown } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://africascampusbattle.org/wp-content/uploads/2023/12/Artboard-2-copy-11-100-768x769.jpg',
    title: 'Talent Unleashed',
  },
  {
    image: 'https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-8-1-768x768.jpg',
    title: 'Campus Stars',
  },
  {
    image: 'https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-2-1-768x767.jpg',
    title: 'Musical Excellence',
  },
  {
    image: 'https://africascampusbattle.org/wp-content/uploads/2023/12/Artboard-2-copy-10-100-768x768.jpg',
    title: 'Dance Revolution',
  },
  {
    image: 'https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-3-1-768x767.jpg',
    title: 'Performance Art',
  },
  {
    image: 'https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1h-1-768x768.jpg',
    title: 'Stage Presence',
  },
];

function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="mb-4 text-2xl font-bold animate-slide-in bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center text-white z-10 space-y-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-black mb-2 animate-slide-in bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-500 to-yellow-500">
              AFRICAS CAMPUS BATTLE
            </h1>
            <p className="text-3xl font-bold animate-slide-in bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500" style={{ animationDelay: '0.2s' }}>
              UNAPOLOGETICALLY TALENTED
            </p>
          </div>
          <div className="mt-12 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full pointer-events-auto hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
              Watch Highlights
            </button>
          </div>
          <div className="mt-8 animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <img 
                src="data:image/png;base64,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"
                alt="Season 7 Coming Soon"
                className="w-64 h-64 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex items-end justify-center pb-4">
                <p className="text-xl font-bold text-white">Season 7 Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <BsChevronDown className="animate-bounce w-6 h-6" />
      </div>
    </div>
  );
}

export default Hero;