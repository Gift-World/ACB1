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
      logo: "https://media.licdn.com/dms/image/v2/D4D05AQE8Zdw9eOYVlw/videocover-low/videocover-low/0/1697273458844?e=2147483647&v=beta&t=Btfjb2GjbEq0tptFL2UDJ9DpRsJ44T43tmCWQE01XuQ"
    },
    {
      name: "Youth Enterprise",
      logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy-6.jpg"
    },
    {
      name: "SPM BUZZ",
      logo: "https://i.imgur.com/NJpOfQx.png"
    },
    {
      name: "KCC",
      logo: "https://www.kenyaculturalcentre.go.ke/wp-content/uploads/2023/08/KCC-Logo-No-Background-1-1024x470.png"
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
      name: "Blue Lilac Tours And Travel",
      logo: "https://i.imgur.com/RdemQ5b.jpeg"
    },
    {
      name: "AASU",
      logo: "https://aasuonline.org/wp-content/uploads/2024/11/aasu-logo-01.jpg"
    },
    
    {
      name: "Weston Hotel",
      logo: "data:image/png;base64,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"
    },
    {
        name: "Kaka Empire",
        logo: "https://africascampusbattle.org/wp-content/uploads/2023/07/Artboard-1-copy-7.jpg"
      },
      
      {
        name: "KITFIT",
        logo: "https://trust.kitfest.co.ke/images/KITFT-brand.svg"
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