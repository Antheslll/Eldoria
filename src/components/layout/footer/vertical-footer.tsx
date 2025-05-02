import InstagramIcon, {
  DiscordIcon,
  GmailIcon,
} from "../../../icon/footer-contact-assets";
import ContactList from "./contact-list";

const VerticalFooter = () => {
  return (
    <footer className="w-full sm:h-[clamp(400px,60vh,800px)] h-[clamp(400px,50vh,700px)] grid grid-rows-2 footer-background">
      <div className="w-full flex justify-center items-center">
        <img
          src="/assets/eldoria-logo-assets/Eldoria Logo.png"
          className="w-[30vw] sm:w-[20vw] "
        />
      </div>
      <div className="w-full grid grid-cols-2">
        <div className="w-[80%]  text-white pt-[2vh] pl-[5vw]">
          <h3 className="text-[3vw]">Hubungi Sang Penjaga</h3>
          <h5 className="text-[1.5vw]">
            Untuk pertanyaan, ajakan kolaborasi atau bisikan dari dunia luar...
          </h5>

          <ul className="text-white list-none grid grid-rows-[3vh_3vh_3vh] sm:grid-rows-[9vh_9vh_9vh] mt-[1vh] ">
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
        <div className="w-[90%] text-white pt-[2vh] pl-[5vw]">
          <h3 className="text-[3vw]">Hak & Ritual Hukum</h3>
          <h5 className="text-[1.5vw]">
            Semua elemen visual dan naratif dilindungi oleh mantra kuno dan
            hukum manusia...
          </h5>

          <ul className="text-white list-none mt-[1vh]">
            <li className="text-[0.9vw]">Hak Cipta © Eldoria 2025</li>
            <li className="text-[0.9vw]">Kebijakan Privasi</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default VerticalFooter;
