import PublicLayout from "../../layout/public";

import facebook from "@assets/images/icon/facebook.svg";
import instagram from "@assets/images/icon/instagram.svg";
import whatsapp from "@assets/images/icon/whatsapp.svg";

const About: React.FC = () => {
  return (
    <PublicLayout>
      <section className="pt-40 min-h-screen">
        <h1 className="font-heading text-3xl font-bold my-8">About</h1>

        <div className="mt-5 font-body text-lg max-w-96 text-justify">
          <p>
            Giwapedia adalah SMM panel dengan 1000 layanan lebih. Termukan
            berbagai kebutuhan untuk menunjang sosial media kamu hanya di
            giwapedia.
          </p>
        </div>

        <div className="mt-5">
          <h1 className="font-heading text-xl font-bold my-8">Ikuti kami</h1>
          <div className="flex gap-6">
            <a href="#">
              <img src={facebook} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="#">
              <img src={instagram} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="#">
              <img src={whatsapp} alt="Facebook" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;
