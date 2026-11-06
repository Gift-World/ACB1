import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { BsChevronDown, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const slides = [
  {
    image: 'https://i.imgur.com/Y1VkhUK.jpeg',
  },
  {
    image: 'https://i.imgur.com/srub0Y4.jpeg',
  },
  {
    image: 'https://i.imgur.com/HjukyHD.jpeg',
  },
  {
    image: 'https://i.imgur.com/yGdSfaB.jpeg',
  },
  {
    image: 'https://i.imgur.com/1oCDNg4.jpeg',
  },
  {
    image: 'https://i.imgur.com/4r7Uydn.jpeg',
  },
  {
    image: 'https://i.imgur.com/5xJxRys.jpeg',
  },
  {
    image: 'https://i.imgur.com/8lsC2un.jpeg',
  },
  {
    image: 'https://i.imgur.com/0yWg6GK.jpeg',
  },
  {
    image: 'https://i.imgur.com/B1Orr1W.jpeg',
  },
  {
    image: 'https://i.imgur.com/oxubX2O.jpeg',
  },
  {
    image: 'https://i.imgur.com/yIiE03O.jpeg',
  },
  {
    image: 'https://i.imgur.com/Z9TwaHA.jpeg',
  },
  {
    image: 'https://i.imgur.com/8JrzodL.jpeg',
  },
  {
    image: 'https://i.imgur.com/jX0HlOh.jpeg',
  },
  {
    image: 'https://i.imgur.com/ee84ls6.jpeg',
  },
  {
    image: 'https://i.imgur.com/LfZXNyf.jpeg',
  },
  {
    image: 'https://i.imgur.com/48mXnod.jpeg',
  },
  {
    image: 'https://i.imgur.com/ed8Rkos.jpeg',
  },
  // {
  //   image: 'https://i.imgur.com/1oCDNg4.jpeg',
  // },
  // {
  //   image: 'https://i.imgur.com/1oCDNg4.jpeg',
  // },
  // {
  //   image: 'https://i.imgur.com/1oCDNg4.jpeg',
  // },
  // {
  //   image: 'https://i.imgur.com/1oCDNg4.jpeg',
  // },
  // {
  //   image: 'https://i.imgur.com/1oCDNg4.jpeg',
  // },
  {
    image: 'https://i.imgur.com/BejxQEW.jpeg',
  },
  {
    image: 'https://i.imgur.com/0iNc3Rv.jpeg',
  }
];

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference <= 0) {
      return {};
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (Object.keys(timeLeft).length === 0) {
    return <div className="text-white text-2xl">The event has started!</div>;
  }

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center">
          <div className="text-3xl font-bold bg-orange-700 rounded-lg p-3 min-w-[80px] text-center">
            {value}
          </div>
          <span className="text-sm mt-1 text-gray-300 capitalize">{interval}</span>
        </div>
      ))}
    </div>
  );
}

function PastHero() {
  const [isVisible, setIsVisible] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[68svh] min-h-[440px] w-full overflow-hidden sm:h-[75svh] md:h-[85svh] lg:h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 transition-all duration-200 hover:bg-white/20 sm:block"
      >
        <BsChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 transition-all duration-200 hover:bg-white/20 sm:block"
      >
        <BsChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
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

export default PastHero;
