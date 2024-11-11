import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <section className=" background-section">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl text-center pt-3 ">
            La Lune French Bistro
          </h1>
          <div className="text-center flex items-center justify-center min-h-screen flex-col">
            <h1 className="text-white text-center text-6xl mb-5">
              A Taste of Paris
            </h1>
            <button className="bg-white rounded px-3 py-2 mx-auto  hover:bg-gray-100 active:bg-gray-200 mb-32">
              Dine With Us
            </button>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}

      <section className="grid mt-10 md:grid-cols-2 min-h-screen container mx-auto">
        <div className=" mx-auto md:ml-5  md:flex md:flex-col xl:grid md:justify-center md:items-center md:w-full md:place-items-center place-items-center  xl:gap-5 w-4/5  xl:grid-cols-2 xl:w-full ">
          <div className="">
            <img
              className="xl:mb-10 rounded object-cover"
              src="\src\assets\wallpaperflare.com_wallpaper (1).jpg"
              alt=""
            />
          </div>
          <div className="xl:mt-10 rounded mt-5">
            <img
              className="rounded object-cover"
              src="src\assets\wallpaperflare.com_wallpaper.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="md:ml-10 mx-5 md:flex md:flex-col md:items-center md:justify-center">
          <h1 className="text-3xl md:text-5xl md:text-left text-center font-semibold mb-4 lg:text-left">
            A French Fling
          </h1>
          <p className="md:text-xl">
            La Lune French Bistro was born from a love of all things Paris. Our
            founder and chef Ingrid Correa spent three amazing years in the City
            of Love, training under the industry's best. She brought home
            everything she learned - the flavors, the feelings, the family-style
            cafe - so that you can get a taste of Paris, too.
          </p>
          <button className="bg-black mt-5 md:text-xl text-white py-1 px-2 rounded-lg block mx-auto">
            Book Now
          </button>
        </div>
      </section>

      {/* THIRD SECTION */}

      <section className="min-h-screen lg:flex lg:items-center  mx-auto ">
        <div className="mt-10 lg:flex  mx-auto   ">
          <div className="lg:w-1/3 lg:h-96 mx-5  ">
            <h1 className="text-center font-semibold lg:text-4xl text-3xl">
              FLAVORS OF FRANCE
            </h1>
            <p className="mb-2 text-center lg:text-xl">
              Paris is a melting pot, as our food can attest. Take a bite and
              savor la vie délicieuse!
            </p>
          </div>

          <div className="w-96 lg:w-full mx-auto grid lg:grid-cols-3 lg:gap-10 lg:mr-5 ">
            <div className="">
              <img
                className="rounded-md  w-96 h-96 object-cover"
                src="\src\assets\wallpaperflare.com_wallpaper (1).jpg"
                alt=""
              />
              <p className="text-center underline uppercase">
                Mouthwatering appetizers
              </p>
            </div>
            <div>
              <img
                className="rounded-md  w-96 h-96
          object-cover"
                src="\src\assets\wallpaperflare.com_wallpaper.jpg"
                alt=""
              />
              <p className="text-center underline uppercase">Wholesome Mains</p>
            </div>
            <div>
              <img
                className="rounded-md  w-96 h-96 object-cover"
                src="\src\assets\wesual-click-rsWZ-P9FbQ4-unsplash.jpg"
                alt=""
              />
              <p className="text-center underline uppercase">Sweet endings</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOURTH SECTION */}

      <section className="bg-black text-white min-h-screen ">
        
        <h1 className="text-center pt-5 text-2xl md:text-3xl lg:text-4xl font-semibold  ">LOVE FOR LA LUNE</h1>
        

        <div className="md:flex md:items-center md:mx-5 h-screen md:pb-20 md:text-lg lg:text-xl">
          <div className="w-96 mx-auto mt-10 ">
            <i class="fa-solid fa-quote-left text-3xl"></i>
            <h1 className="mt-5">Transported to Paris</h1>
            <p className="mt-3">
              One bite and I felt like I was back in France. Chef Ingrid and her
              team have outdone themselves!
            </p>
            <p className="mt-3">- Teddy, Entrepreneur</p>
          </div>
          <div className="w-96 mx-auto mt-10">
            <i class="fa-solid fa-quote-left text-3xl"></i>
            <h1 className="mt-5">Lovely Bistro</h1>
            <p className="mt-3">
            The ambience was great - and the food even better! Simple recipes done well, with top-notch ingredients. Will be back!
            </p>
            <p className="mt-3">- Dani, Mother</p>
          </div>
          <div className="w-96 mx-auto mt-10">
            <i class="fa-solid fa-quote-left text-3xl"></i>
            <h1 className="mt-5">Transported to Paris</h1>
            <p className="mt-3">
            Eating here made me miss Paris so much. What a treat! I will be bringing my client meetings here. 

            </p>
            <p className="mt-3">- Carly, Entrepreneur</p>
          </div>
        </div>
       
      </section>

      {/* FIFTH SECTION */}

      <section className="min-h-screen">
        <div className="md:flex md:flex-row-reverse ">
          <div className="md:w-1/2  mb-8 ">
            <h1 className="text-4xl lg:text-5xl md:text-5xl md:mt-  text-center mt-8">SEE YOU SOON</h1>
            <div className="text-2xl ml-10  md:my-auto ">
            <p className="mt-8 mb-2 font-semibold">Phone Number</p>
            <p>(123) 456-7890</p>
            <p className="mt-8 mb-2 font-semibold">Email Address</p>
            <p>hello@reallygreatsite.com</p>
            <p className="mt-8 mb-2 font-semibold">Restaurant</p>
            <p className="">123 Anywhere St. Any City, ST 12345</p>
            </div>
          </div>
          
          <div className="md:w-1/2  min-h-screen ">
            <img className="md:w-full md:h-full  object-cover " src="\src\assets\pexels-marta-dzedyshko-1042863-2067430.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
