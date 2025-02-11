import { useEffect, useState } from 'react';

const events = [
  {
    name: "Season 7 Launch",
    date: "2025-05-23",
    description: "The beginning of something extraordinary",
    icon: "🚀"
  },
  {
    name: "Regional Auditions",
    date: "2025-06-15",
    description: "Your chance to shine - Multiple locations across Africa",
    icon: "🎭"
  },
  {
    name: "Battle Rounds",
    date: "2025-07-10",
    description: "Top talents go head to head",
    icon: "⚔️"
  },
  {
    name: "Semi-Finals",
    date: "2025-08-20",
    description: "The competition intensifies",
    icon: "🔥"
  },
  {
    name: "Grand Finale",
    date: "2025-09-15",
    description: "One winner takes it all",
    icon: "👑"
  }
];

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
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 min-w-[80px] text-center">
            {timeLeft[interval]}
          </div>
          <span className="text-sm mt-1 text-gray-300">{interval}</span>
        </div>
      ))}
    </div>
  );
}

function Events() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Upcoming Events
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Countdown to Season 7</h3>
            <CountdownTimer targetDate="2025-05-23" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            {/* Events */}
            {events.map((event, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'pr-1/2' : 'pl-1/2'}`}>
                <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className="w-1/2">
                    <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-6 rounded-2xl transform hover:scale-105 transition-transform">
                      <div className="text-4xl mb-2">{event.icon}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{event.name}</h4>
                      <p className="text-gray-300 mb-2">{event.description}</p>
                      <p className="text-sm text-purple-300">{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                    </div>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;