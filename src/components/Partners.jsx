// import React from 'react';

function Partners() {
  const partners = [
    {
      name: "Lush Hair",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/12/Artboard-1-copy-8-lush.jpg"
    },
    {
      name: "Uber",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1.jpg"
    },
    {
      name: "Karen Village",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy-9.jpg"
    },
    {
      name: "Ultra Events",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy-5.jpg"
    },
    {
      name: "Sanaa Post",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_YPzXtXJ-RqjWd9Z9J7H4PxPQ3F3S3gQww&s"
    },
    {
        name: "Legacy Arts and Film",
        logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy-3.jpg"
      },
    {
      name: "KUDSA",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy.jpg"
    },
    {
      name: "Coca Cola",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/12/Artboard-2-copy-4-100-1.jpg"
    },
    {
      name: "Youth Enterprise",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy-6.jpg"
    },
    {
      name: "Le Capture Studios",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy-4.jpg"
    },
    {
      name: "KFCB",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy-2.jpg"
    },
    {
      name: "Sanaa Academy",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/12/Artboard-2-copy-3-100-1.jpg"
    },
    {
      name: "Post Bank",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy-8.jpg"
    },
    {
      name: "Tropical Heat",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/12/Artboard-2-copy-5-100-1.jpg"
    },
    {
      name: "Afrostreet",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/12/Artboard-2-copy-100-1.jpg"
    },
    {
        name: "Kaka Empire",
        logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy-7.jpg"
      }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Companies we have worked with:
          </h2>
        </div>
        
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <div key={index} className="col-span-1 flex justify-center items-center">
                <img
                  className="h-40 object-contain hover:opacity-75 transition-opacity duration-300"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;