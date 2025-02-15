import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const highlights = [
  {
    type: 'image',
    url: 'https://i.imgur.com/Hp6jWZK.jpeg',
    title: 'Grand Finale 2024',
    description: 'Jackie takes the crown in an unforgettable performance'
  },
  
  {
    type: 'image',
    url: 'https://photos.smugmug.com/Clients/AfricaCampusBattles/n-ZNpGDb/Season-6-Finale/i-D5bghX4/0/KjMLgMvsVmMRVD4mLf3fxZxKkTqRR49KrP7w8RQWb/S/Sixtyone-715-S.jpg',
    title: 'Dance Battle Finals',
    description: 'Epic showdown between top performers'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/SKl-0hV_Zhg',
    title: 'Season 6 Auditions',
    description: 'Where it all began - best moments'
  }
];

function Highlights() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black text-center mb-16 bg-clip-text text-orange-700">
          Season 6 Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images Carousel */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">📸 Captured Moments</h3>
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="w-full max-w-md mx-auto"
            >
              {highlights.filter(h => h.type === 'image').map((highlight, index) => (
                <SwiperSlide key={index}>
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <img 
                      src={highlight.url}
                      alt={highlight.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <h4 className="text-xl font-bold text-white">{highlight.title}</h4>
                      <p className="text-gray-200">{highlight.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Videos Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">🎥 Featured Videos</h3>
            <div className="space-y-6">
              {highlights.filter(h => h.type === 'video').map((video, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden">
                  <iframe
                    src={video.url}
                    className="w-full aspect-video rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="mt-2">
                    <h4 className="text-lg font-bold text-white">{video.title}</h4>
                    <p className="text-gray-300">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;