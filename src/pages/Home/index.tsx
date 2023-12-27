import { Disclosure, Transition } from "@headlessui/react";
import {
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

import PublicLayout from "../../layout/public";

import Facebook from "@assets/images/social/facebook.svg";
import Instagram from "@assets/images/social/Instagram.svg";
import TikTok from "@assets/images/social/TikTok.svg";
import YouTube from "@assets/images/social/YouTube.svg";
import Netflix from "@assets/images/social/Netflix.svg";
import Spotify from "@assets/images/social/Spotify.svg";
import { Hero } from "../../components";

type SocialIcon = {
  img: string;
  alt: string;
}[];

const socialIcon: SocialIcon = [
  {
    img: Facebook,
    alt: "Facebook",
  },
  {
    img: Instagram,
    alt: "Instagram",
  },
  {
    img: TikTok,
    alt: "TikTok",
  },
  {
    img: YouTube,
    alt: "Youtube",
  },
  {
    img: Netflix,
    alt: "Netflix",
  },
  {
    img: Spotify,
    alt: "Spotify",
  },
];

const Home: React.FC = () => {
  return (
    <PublicLayout>
      <Hero />

      <section className="my-8">
        {/* Payment */}
        <h5 className="text-sm font-body text-secondary my-5">
          Layanan terpopuler
        </h5>

        <div className="flex flex-wrap justify-between items-center gap-8 my-9">
          {socialIcon.map((item, i) => (
            <img
              key={i}
              src={item.img}
              alt={item.alt}
              className="h-7 w-auto grayscale hover:grayscale-0 cursor-pointer transition-all"
            />
          ))}
        </div>
        <p className="text-sm font-body text-secondary my-5 text-center">
          Lihat semua
        </p>
      </section>

      <section className="mt-20 max-w-[800px] mx-auto">
        <h1 className="font-heading text-3xl font-bold my-8">
          Kenapa di Giwapedia?
        </h1>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="h-6 w-6" />
              <h3 className="font-body text-secondary my-3 font-bold text-xl">
                Jaminan uang kembali
              </h3>
            </div>
            <p className="font-body text-secondary">
              Tidak usah khawatir, terjadi sesuai kami akan mengambalikan uang
              anda!
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <BoltIcon className="h-6 w-6" />
              <h3 className="font-body text-secondary my-3 font-bold text-xl">
                Kecepatan
              </h3>
            </div>
            <p className="font-body text-secondary">
              Prosesn instant, pesanan kamu akan diproses dengan cepat oleh tim
              kami.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <WrenchScrewdriverIcon className="h-6 w-6" />
              <h3 className="font-body text-secondary my-3 font-bold text-xl">
                Pelayaan 24 jam
              </h3>
            </div>
            <p className="font-body text-secondary">
              Ada masalah ? Tim kami siap selalu sigap membantu anda dengan suka
              hati.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <BanknotesIcon className="h-6 w-6" />
              <h3 className="font-body text-secondary my-3 font-bold text-xl">
                Pembayaran mudah
              </h3>
            </div>
            <p className="font-body text-secondary">
              Kami menyediakan berbagai layanan pembayaran, jadi kamu tidak
              perlu khawatir.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 max-w-[700px] mx-auto">
        <div className="flex flex-col items-start h-full justify-center">
          <h2 className="font-heading font-bold text-2xl my-5">
            Frequently asked questions
          </h2>
          <Disclosure>
            <Disclosure.Button className="py-2 font-body font-bold border-b-2 w-full text-left">
              Apakah aman ?
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform -translate-y-6 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform -translate-y-6 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 font-body text-sm my-2">
                Ya! Tentu saja, kami hanya butuh username/link akun mu jadi
                tidak usah khawatir tentang akun kamu.
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="py-2 font-body font-bold border-b-2 w-full text-left">
              Bergaransi ?
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform -translate-y-6 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform -translate-y-6 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 font-body text-sm my-2">
                Layanan di Jasa All Sosmed bergaransi 7 hari sejak pesanan
                selesai diproses. dengan syarat dan ketentuan berlaku.
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="py-2 font-body font-bold border-b-2 w-full text-left">
              Apakah layanan lainya ada ?
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform -translate-y-6 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform -translate-y-6 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 font-body text-sm my-2">
                Kami memiliki 1000++ layanan, kamu bisa memilih atau bisa
                request ke CS kami ya.
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
      </section>

      <section className="mt-20 mx-auto">
        <div className="bg-blue-500 text-white max-w-[800px] mx-auto text-center p-10 rounded-xl">
          <div className="font-heading font-bold">
            <h1 className="text-2xl">Ayo tunggu apa lagi ?</h1>
            <h1 className="text-2xl">Tingkatkan Sosial Media kamu sekarang</h1>
          </div>
          <div className="mt-5">
            <button className="font-heading font-bold py-3 px-5 bg-white text-blue-500 rounded-3xl">
              Beli sekarang
            </button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Home;
