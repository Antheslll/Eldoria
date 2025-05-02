import useWindowSize from "../../../hooks/useWindowSize";
import "../../../styles/footer.css";

import HorizontalFooter from "./horizontal-footer";
import VerticalFooter from "./vertical-footer";

interface FooterProps {
  page: string;
}

const Footer = ({ page }: FooterProps) => {
  const { width } = useWindowSize();

  console.log(width);
  if (page !== "/storypage") {
    return width < 768 ? <VerticalFooter /> : <HorizontalFooter />;
  } else {
    return null;
  }
};

export default Footer;
