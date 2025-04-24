import "../../../styles/footer.css";
import ContactList from "./contact-list";
import InstagramIcon, {
  DiscordIcon,
  GmailIcon,
} from "../../../icon/footer-contact-assets";

interface FooterProps {
  page: string;
}

const Footer = ({ page }: FooterProps) => {
  if (page !== "/storypage") {
    return (
      <footer className="w-full h-[250px] grid grid-cols-[30%_35%_35%] footer-background">
        <div className=" border-white flex justify-center items-center">
          <img
            src="/assets/eldoria-logo-assets/Eldoria Logo.png"
            className="w-[200px]"
          />
        </div>
        <div className="w-[80%] border-white text-white pt-[40px]">
          <h3 className="text-[20px]">Hubungi Sang Penjaga</h3>
          <h5 className="text-[12px]">
            Untuk pertanyaan, ajakan kolaborasi atau bisikan dari dunia luar...
          </h5>

          <ul className="text-white list-none grid grid-rows-[35px_35px_35px] mt-[10px] ">
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
        <div className="w-[90%] text-white pt-[40px]">
          <h3 className="text-[20px]">Hak & Ritual Hukum</h3>
          <h5 className="text-[12px]">
            Semua elemen visual dan naratif dilindungi oleh mantra kuno dan
            hukum manusia...
          </h5>

          <ul className="text-white list-none mt-[20px]">
            <li className="text-[10px]">Hak Cipta © Eldoria 2025</li>
            <li className="text-[10px]">Kebijakan Privasi</li>
          </ul>
        </div>
      </footer>
    );
  } else {
    return null;
  }
};

export default Footer;
