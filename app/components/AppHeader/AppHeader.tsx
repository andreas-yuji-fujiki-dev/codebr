// core
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

// objects
import { ProjectSectionHashes } from "../../json/ProjectSectionHashes";
import { ProjectImagesObject } from "~/json/ProjectImagesObject";
import { ProjectLinksObject } from "~/json/ProjectLinksObject";

export default function AppHeader() {
  const location = useLocation();
  const [ activeLocationHash, setActiveLocationHash ] = useState<string | undefined>("");

  // active hash handler
  useEffect(() => {
    setActiveLocationHash(
      location.hash?.trim().toLowerCase() || // if there is an active hash
      ProjectSectionHashes.find((item) => item.label === "Comece Agora")?.url // fallback to home
    );
  }, [location.hash]);

  return (
    <header className="sticky top-0  z-300 bg-black flex justify-between items-center p-10">
      {/* left */}
      <a href={ProjectLinksObject.Home.path}>
        <img
          className="w-45"
          src={ProjectImagesObject.CodeLogo.src}
          alt={ProjectImagesObject.CodeLogo.alt}
        />
      </a>

      {/* nav */}
      <nav>
        <ul className="flex gap-7">
          {ProjectSectionHashes.map((item) => {
            const itemHash = item.url.trim().toLowerCase();
            const isActive = activeLocationHash === itemHash;

            return (
              <li
                key={item.url}
                className={`
                  font-bold 
                  ${isActive 
                    ? "opacity-60 underline decoration-[#007bff] underline-offset-4 before:content-['>'] before:mr-2 before:text-[#007bff]" 
                    : ""}
                `}
              >
                <a href={item.url}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* right */}
      <div className="flex items-center gap-7">
        <a
          className="font-extrabold" 
          href={ProjectLinksObject.AppLogin.path}
        >
          Entrar
        </a>
        <a 
          className="rounded-full py-2 px-6 bg-white text-black"
          href={ProjectLinksObject.AppRegister.path}
        >
          Cadastre-se, é grátis!
        </a>
      </div>
    </header>
  );
}
