import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { BsChevronDown } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://photos.smugmug.com/Clients/AfricaCampusBattles/n-ZNpGDb/Season-6-Finale/i-mnCvkGF/0/LsWxLwqDCRbcH34Fk3tmsccMQrCn84gh4CK2sqMXK/S/Sixtyone-738-S.jpg',
    title: 'Talent Unleashed',
  },
  {
    image: 'https://photos.smugmug.com/Clients/AfricaCampusBattles/n-ZNpGDb/Season-6-Finale/i-ttVk2fJ/0/NMPDwbdjQ9XtW9ChCHq9gt3QrQHDsMJ8VLxPxwHBQ/S/Sixtyone-714-S.jpg',
    title: 'Campus Stars',
  },
  {
    image: 'https://photos.smugmug.com/Clients/AfricaCampusBattles/n-ZNpGDb/Season-6-Finale/i-dqhNWrT/0/NBmCgbwWdHq9VGLP87WGjLhLcnXL3C4wHzCtzRHwH/S/Sixtyone-689-S.jpg',
    title: 'Musical Excellence',
  },
  {
    image: 'https://photos.smugmug.com/Clients/AfricaCampusBattles/n-ZNpGDb/Season-6-Finale/i-NGKVJ6W/0/LVwDc4FRr8JmxGB8WL7wFnwbvxmtKwSjv5NGZqPMm/S/Sixtyone-665-S.jpg',
    title: 'Dance Revolution',
  },
  {
    image: 'https://photos.smugmug.com/Clients/AfricaCampusBattles/n-ZNpGDb/Season-6-Finale/i-T44FzzH/0/KKKQ8TQd4qt2RjNv6pPKhnhpPZJBwbwS2Jr33PVKc/S/Sixtyone-648-S.jpg',
    title: 'Performance Art',
  },
  {
    image: 'https://photos.smugmug.com/Clients/AfricaCampusBattles/n-ZNpGDb/Season-6-Finale/i-NDcnDcG/0/KvTDcSH6j52c5KKW384zjVTGNSRhgGhBdRP8wgx6h/S/Sixtyone-623-S.jpg',
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

  
  function CountdownTimer({ targetDate }) {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, [targetDate]);
  
    return (
      <div className="flex gap-4 justify-center">
        {Object.keys(timeLeft).map(interval => (
          <div key={interval} className="flex flex-col items-center">
            <div className="text-3xl font-bold bg-orange-700 rounded-lg p-3 min-w-[80px] text-center">
              {timeLeft[interval]}
            </div>
            <span className="text-sm mt-1 text-gray-300">{interval}</span>
          </div>
        ))}
      </div>
    );
  }
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
          <div className="space-y-2 p-11">
            <h1 className="text-7xl font-black mb-2 animate-slide-in bg-clip-text  ">
              AFRICAS CAMPUS BATTLE
            </h1>
            <p className="text-3xl font-bold animate-slide-in bg-clip-text " style={{ animationDelay: '0.2s' }}>
              UNAPOLOGETICALLY TALENTED
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mt-7 ">
            <h3 className="text-2xl font-bold text-white mb-4">Countdown to Season 7</h3>
            <CountdownTimer targetDate="2025-05-23" />
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