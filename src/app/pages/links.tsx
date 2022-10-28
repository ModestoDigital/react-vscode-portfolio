import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneSquare,
  FaWhatsappSquare,
  FaFileDownload,
} from "react-icons/fa";

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/ModestoDigital",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/daniel-modesto-66628aa0/?locale=en_US",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mailto:digital.modesto@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Contact me via Phone",
    href: "tel:+5547996325454",
    icon: <FaPhoneSquare />,
  },
  {
    index: 4,
    title: "Contact me via WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5547996325454&text=Hi%20Daniel,%20I%20saw%20your%20developer%20portfolio...",
    icon: <FaWhatsappSquare />,
  },
  {
    index: 5,
    title: "Download My CV",
    href: "https://drive.google.com/uc?id=1WcroFlaR8zaCN2ooV2t0TJ3ZRmS_m_ju&export=download",
    icon: <FaFileDownload />,
  },
];
