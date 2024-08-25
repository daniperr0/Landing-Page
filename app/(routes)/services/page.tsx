import TransitionPage from "@/components/transition-Page";
import Link from "next/link";

const ServicePage = () => {
    return ( 

        <>
        <TransitionPage />
        <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20 pt-20">
            <div className="max-w-[450px]">
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                    Mis{" "}
                    <span className="font-bold text-secondary">
                    servicios.
                    </span>
                </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Ofrezco mis servicios de desarrollo frontend especializados en la creacion de sitios wev y aplicaciones atractivas y funcionales Utilizando las ultimas tecnologias como React.js, next.js, TypeSript, tailwindCSS y bootstrap, sin obviar el uso de las fundamentales como lo son HTML, CSS y JavaScript.
                    </p>
                    <Link className=" px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65" href={"https://wa.me/qr/V5T7NKA2T6GXH1"}>Contacta conmigo</Link>

            </div>
            <div>

            </div>

        </div>
        </>
     );
}
 
export default ServicePage;