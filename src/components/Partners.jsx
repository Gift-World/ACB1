// import React from 'react';

function Partners() {
  const partners = [
    {
      name: "Lush Hair",
      logo: "/lush.jpg"
    },
    {
      name: "Uber",
      logo: "/uber.jpg"
    },
    {
      name: "Karen Village",
      logo: "/karen.jpg"
    },
    {
      name: "Ultra Events",
      logo: "/ultra.jpg"
    },
    {
      name: "Weston Hotel",
      logo: "/weston.png"
    },
   
    {
      name: "Legacy Arts ",
      logo: "/legacy.jpg"
    },
    
    {
      name: "KUDSA",
      logo: "/kudsa.jpg"
    },
    {
      name: "Coca Cola",
      logo: "/cola.jpg"
    },
    {
      name: "Youth Enterprise",
      logo: "/youth.jpg"
    },
    {
      name: "SPM BUZZ",
      logo: "/spm.png"
    },
    {
      name: "KCC",
      logo: "/kcc.png"
    },
    {
      name: "Le Capture Studios",
      logo: "/lecapture.jpg"
    },
    {
      name: "KFCB",
      logo: "/kfcb.jpg"
    },
    {
      name: "Sanaa Academy",
      logo: "/academy.jpg"
    },
    {
      name: "Post Bank",
      logo: "/postbank.jpg"
    },
    {
      name: "Tropical Heat",
      logo: "/tropical.jpg"
    },
    {
      name: "Afrostreet",
      logo: "/afrostreet.jpg"
    },
    {
      name: "Blue Lilac Tours And Travel",
      logo: "/lilac.jpeg"
    },
    {
      name: "AASU",
      logo: "/aasu.webp"
    },
    
    {
      name: "Sanaa Post",
      logo: "/post.png"
    },
    {
        name: "Kaka Empire",
        logo: "/kaka.jpg"
      },
      
      {
        name: "KITFIT",
        logo: "/kitfit.svg"
      }

  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Partners:
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