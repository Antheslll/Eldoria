import InstagramIcon, {
  DiscordIcon,
  GmailIcon,
} from "../../../icon/footer-contact-assets";
import ContactList from "./contact-list";

const HorizontalFooter = () => {
  return (
    <>
      <footer className="w-full xl:h-[clamp(350px,50vh,500px)] lg:h-[clamp(300px,50vh,500px)] md:h-[clamp(200px,20vh,500px)] grid lg:grid-cols-[30%_35%_35%] md:grid-cols-[30%_35%_35%] footer-background">
        <div className=" flex justify-center items-center">
          <img
            src="/assets/eldoria-logo-assets/Eldoria Logo.png"
            className="lg:w-[20vw] md:w-[20vw]"
          />
        </div>
        <div className="w-[80%] text-white xl:pt-[8vh] lg:pt-[8vh] md:pt-[2vh]">
          <h3 className="lg:text-[2vw] md:text-[2vw]">Hubungi Sang Penjaga</h3>
          <h5 className="lg:text-[1vw] md:text-[1vw]">
            Untuk pertanyaan, ajakan kolaborasi atau bisikan dari dunia luar...
          </h5>

          <ul className="text-white list-none grid lg:grid-rows-[7vh_7vh_7vh] md:grid-rows-[3vh_3vh_3vh] md:gap-[clamp(7px,2vh,8px)] lg:mt-[2vh] md:mt-[1vh] ">
            <ContactList
              icon={<GmailIcon />}
              contactText="Email: relics@eldoria.realm"
            />
            <ContactList
              icon={<InstagramIcon />}
              contactText="Instagram: @eldoria.official"
            />
            <ContactList
              icon={<DiscordIcon />}
              contactText="Discord Portal: Eldoria Sanctum"
            />
          </ul>
        </div>
        <div className="w-[90%] text-white xl:pt-[8vh] lg:pt-[8vh] md:pt-[2vh]">
          <h3 className="lg:text-[2vw] md:text-[2vw]">Hak & Ritual Hukum</h3>
          <h5 className="lg:text-[1vw] md:text-[1vw]">
            Semua elemen visual dan naratif dilindungi oleh mantra kuno dan
            hukum manusia...
          </h5>

          <ul className="text-white list-none lg:mt-[2vh] md:mt-[1vh]">
            <li className="lg:text-[0.9vw] md:text-[0.9vw]">
              Hak Cipta © Eldoria 2025
            </li>
            <li className="lg:text-[0.9vw] md:text-[0.9vw]">
              Kebijakan Privasi
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default HorizontalFooter;
