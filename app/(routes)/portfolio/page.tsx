import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-Page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
    return ( 

        <ContainerPage>
            <TransitionPage/>

            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Mis ultimos <span className="text-secondary font-bold">
                        
                        Proyectos realizados
                        </span>
                </h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-3 ">
                    {dataPortfolio.map((data)=> (
                        <PortfolioBox key={data.id} data={data}/>

                    ))}

                </div>

            </div>
        </ContainerPage>
     );
}
 
export default PortfolioPage;