// objects
import { plansDetails } from "./plansDetails";
import { ProjectSectionHashes } from "~/json/ProjectSectionHashes";

// icons
import { CiCircleCheck } from "react-icons/ci";

// component function
export default function PricingSection() {
  const pricingSectionHashId =
    ProjectSectionHashes.find((item) => item.label === "Planos")?.url;

  return (
    <section id={pricingSectionHashId} className="mt-20 scroll-mt-70">
      <h2 className="text-6xl text-center mb-12">
        Planos
      </h2>

      {/* cards map */}
      <div className="grid lg:grid-cols-3 flex-wrap justify-center items-center gap-15 lg:px-20">
        {plansDetails.map((plan, index)=>(
          <div 
            key={index}
            className={`
              border-2 rounded-xl p-10
              ${plan.highlited ? "border-[#007BFF]" : "border-[#1F1F1F]"}
            `}
          >
            {/* card header */}
            <div>
              {/* title and observation */}
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-3xl font-bold">
                  {plan.title}
                </h3>
                <span 
                  className={`
                    ${plan.highlited 
                      ? "opacity-100 border border-[#007BFF] py-4 px-6 rounded-full" 
                      : "opacity-70"
                    }
                  `}
                >
                  {plan.observation}
                </span>
              </div>
              
              {/* description */}
              <p className="mb-15 text-xl opacity-80">
                {plan.description}
              </p>
            </div>

            {/* plan features */}
            <ul className="flex flex-col gap-6 mb-15">
              {plan.features.map((feature, index)=>(
                <li key={index} className="flex items-center gap-3 text-xl">
                  <CiCircleCheck fill="white" size={30} className="-mb-1" /> 
                  <span className="opacity-85">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* card footer */}
            <div>
              {/* price */}
              <div className="mb-15">
                <span className="text-3xl">
                  {plan.price}
                </span>
              </div>

              {/* start button */}
              <a href={plan.redirectButtonLink}>
                <button className={`
                    text-3xl border rounded-2xl py-4 px-9 cursor-pointer

                    hover:transition-all hover:duration-500 hover:scale-105
                    ${plan.highlited 
                      ? "bg-[#007BFF] border-[#007BFF]" 
                      : "bg-transparent hover:bg-[#007BFF] hover:border-[#007BFF]"}
                  `}
                >
                  Iniciar
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}