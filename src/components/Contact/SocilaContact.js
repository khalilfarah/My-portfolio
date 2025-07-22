import { Facebook, Linkedin, Twitter, Phone, Mail, Icon } from "lucide-react";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const style =
  "bg-white text-purple-950 hover:text-white hover:bg-purple-950 border-white border-1  rounded-full m-2 p-2 hover:duration-300 hover:transition hover:scale-[1.1] hover:-rotate-10";
const SocialContact = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/khalilfarah464",
    icon: Facebook,
    size: 50,
    target: "_blank",
    style: style,
  },
  {
    id: 2,
    name: "X/Twitter",
    link: "https://x.com/khalilfarah464",
    icon: Twitter,
    size: 50,
    target: "_blank",
    style: style,
  },
  {
    id: 3,
    name: "Linkedin",
    link: "https://www.Linkedin.com/in/khalilfarah464",
    icon: Linkedin,
    size: 50,
    target: "_blank",
    style: style,
  },

  {
    id: 4,
    name: "Gmail",
    link: "mailto:khalilfarah464@gmail.com",
    icon: Mail,
    size: 50,
    target: "_blank",
    style: style,
  },
  {
    id: 5,
    name: "Phone",
    link: "tel:+963991132008",
    icon: Phone,
    size: 50,
    target: "_blank",
    style: style,
  },
  {
    id: 6,
    name: "Whatsapp",
    link: "https://wa.me/+963991132008",
    icon: faWhatsapp,
    size: 50,
    target: "_blank",
    style: style,
  },
];

export default SocialContact;
