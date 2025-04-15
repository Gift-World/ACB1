import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { BsChevronDown } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: '/talentunleashed.jpg',
    title: 'Talent Unleashed',
  },
  {
    image: '/698.jpg',
    title: 'Stage Presence',
  },
  {
    image: '/294.jpg',
    title: 'Musical Excellence',
  },
  {
    image: '/kizudeh.jpg',
    title: 'Owning the Spotlight',
  },
  {
    image: '/362.jpg',
    title: 'Dance Revolution',
  },
  {
    image: '/mitchell.jpg',
    title: 'Unstoppable Talent',
  }
];

function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
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
        className="w-full h-screen sm:h-[80vh] md:h-[85vh] lg:h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                <h2 className="text-[15px] lg:mt-4 md:mt-20 md:pt-16 sm:mt-36 sm:pt-24 mt-16 sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-poppins font-semibold animate-fade-in bg-clip-text text-transparent bg-customOrange">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center text-white z-10 space-y-6">
          <div className="space-y-2 p-11">
            <h1 className="text-7xl font-poppins font-black mb-2 animate-slide-in">
              AFRICA'S CAMPUS BATTLE
            </h1>
            <p className="text-3xl font-bold font-poppins animate-slide-in" style={{ animationDelay: '0.2s' }}>
              UNAPOLOGETICALLY TALENTED
            </p>
          </div>
          
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <p className="text-gray-200 font-poppins font-light text-base sm:text-[17px] md:text-[18px] leading-relaxed sm:leading-relaxed md:leading-relaxed px-4 sm:px-6 md:px-8 lg:px-0">
                We are Africa's Campus Battle, the premier continental stage where young talent 
              becomes a force for change. Through dance, 
                music, spoken word and performing arts. ACB is empowering Africa's youth to 
                transform their creativity into real impact, rewriting the future with unapologetic 
                authenticity.
              </p>
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