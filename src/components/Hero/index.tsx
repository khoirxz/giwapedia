import { ArrowRightIcon } from "@heroicons/react/24/solid";

import heroImg from "@assets/images/hero.png";
import profile1 from "@assets/images/profile/profile1.png";
import profile2 from "@assets/images/profile/profile2.png";
import profile3 from "@assets/images/profile/profile3.png";

type Profile = {
  img: string;
  alt: string;
  bg: string;
}[];

const profile: Profile = [
  { img: profile1, alt: "profile1", bg: "bg-yellow-500" },
  { img: profile2, alt: "profile1", bg: "bg-red-500" },
  { img: profile3, alt: "profile1", bg: "bg-blue-500" },
];

const Hero: React.FC = () => {
  return (
    <header>
      <div className="grid grid-rows-1 grid-flow-dense md:grid-cols-2 items-center mb-6 pt-12 md:pt-36">
        <div className="order-last md:order-first">
          <div className="flex flex-col gap-1">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary leading-snug text-center md:text-left">
                Layanan terbaik dan terpecaya sosmed kamu.
              </h1>
            </div>
            <div>
              <p className="font-body text-secondary leading-9 text-center md:text-left">
                Jelajahi layanan untuk peningkatan sosial media anda dengan
                layanan cepat dan aman tanpa takut kantong kering.
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-5 my-8">
              <button className="font-heading font-bold py-3 px-5 bg-blue-700 text-white rounded-3xl">
                Mulai sekarang
              </button>
              <a
                href="#"
                className="font-heading font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Hubungi admin <ArrowRightIcon className="h-6 w-6" />
              </a>
            </div>

            <div className="my-4">
              <div className="flex gap-5 mb-3 justify-center md:justify-start">
                {profile.map((item, i) => (
                  <img
                    key={i}
                    src={item.img}
                    alt={item.alt}
                    className={`h-16 w-h-16 rounded-full border-2 border-white ${item.bg}`}
                  />
                ))}
              </div>
              <p className="font-body text-sm text-center md:text-left">
                Mereka sudah membuktikannya dengan giwapedia aman, mudah, dan
                terpecaya.
              </p>
            </div>
          </div>
        </div>
        {/* Hero image */}
        <div>
          <img src={heroImg} className="max-w-[550px] w-full mx-auto" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
