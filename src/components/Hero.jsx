import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { BsChevronDown } from 'react-icons/bs';
import imageUrl, { responsiveImageSrcSet } from '../utils/netlifyImage';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: '/talentunleashed.avif',
    title: 'Talent Unleashed',
  },
  {
    image: '/698.avif',
    title: 'Stage Presence',
  },
  {
    image: '/294.avif',
    title: 'Musical Excellence',
  },
  {
    image: '/kizudeh.webp',
    title: 'Owning the Spotlight',
  },
  {
    image: '/362.avif',
    title: 'Dance Revolution',
  },
  {
    image: '/mitchell.avif',
    title: 'Unstoppable Talent',
  }
];

function Hero() {
  const [isVisible, setIsVisible] = useState(true);
  // Only fetch the first slide and the next slide on first paint. The remaining
  // high-resolution images are requested while the visitor views the carousel.
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0, 1]));

  const loadUpcomingSlide = (activeIndex) => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setLoadedSlides((currentSlides) => {
      if (currentSlides.has(nextIndex)) return currentSlides;

      const nextSlides = new Set(currentSlides);
      nextSlides.add(nextIndex);
      return nextSlides;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[78svh] min-h-[620px] w-full overflow-hidden sm:h-[80svh] md:h-[85svh] lg:h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        preloadImages={false}
        onSlideChange={(swiper) => loadUpcomingSlide(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {loadedSlides.has(index) && (
                <img
                  src={imageUrl(slide.image, 1920, 82)}
                  srcSet={responsiveImageSrcSet(slide.image, [640, 1024, 1600, 1920], 82)}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  sizes="100vw"
                  loading="eager"
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
              <div className="absolute inset-x-0 bottom-8 hidden justify-center px-4 md:flex">
                <h2 className="rounded-full bg-black/55 px-4 py-2 text-sm font-poppins font-semibold text-white backdrop-blur-sm lg:text-base">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-12 sm:pt-0 pointer-events-none">
        <div className="z-10 w-full max-w-4xl text-center text-white">
          <div className="space-y-3 rounded-2xl bg-black/25 px-3 py-5 backdrop-blur-[1px] sm:space-y-4 sm:px-6 sm:py-8 md:bg-transparent md:p-11">
            <h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-black mb-2 break-words">
              AFRICA'S CAMPUS BATTLE
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins">
              UNAPOLOGETICALLY TALENTED
            </p>
          </div>
          
          <div className="mx-auto w-full max-w-3xl px-1 sm:px-6 md:px-8 lg:px-12 xl:px-0">
            <div className="text-center">
              <p className="px-1 font-poppins text-sm font-light leading-relaxed text-gray-100 sm:px-6 sm:text-[17px] md:px-8 md:text-[18px] lg:px-0">
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
        className={`absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-white transition-opacity duration-300 md:block ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <BsChevronDown className="animate-bounce w-6 h-6" />
      </div>
    </div>
  );
}

export default Hero;
