
import { FaWhatsapp } from "react-icons/fa";
import { BookText, CodeSquare, HomeIcon, Linkedin } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/danilo-pirela/",
    },
    {
        id: 2,
        logo: <FaWhatsapp size={30} strokeWidth={1} />,
        src: "https://wa.me/qr/V5T7NKA2T6GXH1",
    }

    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Gym One Page",
        image: "/image-1.png",
        urlGithub: "https://github.com/daniperr0/One-page-gym.git",
        urlDemo: "https://one-page-gym.vercel.app",
    },
    {
        id: 2,
        title: "Online Store Dashboard",
        image: "/image-2.png",
        urlGithub: "https://github.com/daniperr0/dashboard-onlineStore-v1.git",
        urlDemo: "https://dashboard-online-store-v1.vercel.app",
    },
    {
        id: 3,
        title: "Online Web Store",
        image: "/image-3.png",
        urlGithub: "https://github.com/daniperr0/WebStore-Basic.git",
        urlDemo: "https://majestic-sherbet-6044ce.netlify.app",
    }
];
