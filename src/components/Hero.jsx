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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWc4Syv6nfeY4aiFf_OOs5D33SPUCyopimt2tYENuf_hkQbb024OOBT-HuDtgBp2oolU&usqp=CAU',
    title: 'Campus Stars',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3CE9MrD5zDLxxtYpM8RDeNDxTfiAIKEscvRctNT5TUhpkasJ-ieCUdh-lvPTehkxtgg&usqp=CAU',
    title: 'Musical Excellence',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJsGYs2aHvQn0rN4EaUv5_t3ZM5ih39tQaG4Uw8Cfsq_BaHx_p6SWY7VPJlrN02URfEoQ&usqp=CAU',
    title: 'Dance Revolution',
  },
  {
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad',
    title: 'Performance Art',
  },
  {
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea',
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
          delay: 5000,
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
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
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