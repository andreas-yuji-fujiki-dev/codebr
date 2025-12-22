// core
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

// objects
import { ProjectSectionHashes } from "../../json/ProjectSectionHashes";
import { ProjectImagesObject } from "~/json/ProjectImagesObject";
import { ProjectLinksObject } from "~/json/ProjectLinksObject";

// icons
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

// component function
export default function AppHeader() {
  const location = useLocation();
  const [activeLocationHash, setActiveLocationHash] = useState<string | undefined>(ProjectSectionHashes[0].url);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  // scroll spy
  useEffect(() => {
    const sections = ProjectSectionHashes
      .map(item => document.getElementById(item.url))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    let currentHash = "";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;

          // evita loop / updates desnecessários
          if (currentHash === id) return;

          currentHash = id;

          setActiveLocationHash(id);

          // Atualiza URL SEM criar histórico novo
          window.history.replaceState(null, "", `#${id}`);
        });
      },
      {
        root: null,
        rootMargin: "-300px 0px -50% 0px", // header + sensibilidade
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Efeito para rolar para o hash ao carregar a página
  useEffect(() => {
    // Se já rolou, não faz nada
    if (hasScrolled) return;
    
    // Se tem hash na URL, rola para ele
    if (location.hash) {
      const hashWithoutHash = location.hash.substring(1); // Remove o #
      const element = document.getElementById(hashWithoutHash);
      
      if (element) {
        // Pequeno delay para garantir que o DOM está pronto
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } 
    // Se não tem hash, rola para a primeira seção
    else {
      const firstSection = ProjectSectionHashes[0]?.url;
      const element = document.getElementById(firstSection);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          // Adiciona o hash da primeira seção à URL
          window.history.replaceState(null, '', `#${firstSection}`);
        }, 100);
      }
    }
    
    setHasScrolled(true);
  }, [location.hash, hasScrolled]);

  // active hash handler
  useEffect(() => {
  const hash = location.hash.replace("#", "").trim().toLowerCase();

  const targetHash =
    hash ||
    ProjectSectionHashes.find((item) => item.label === "Comece Agora")?.url;

  if (!targetHash) return;

  setActiveLocationHash(targetHash);

  // Aguarda o DOM renderizar antes de rolar
  requestAnimationFrame(() => {
    const element = document.getElementById(targetHash);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}, [location.hash]);

  // Handler para clique nos links de âncora
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    // Previne o comportamento padrão
    e.preventDefault();
    
    // Cria o hash com # na frente
    const hash = `#${url}`;
    const elementId = url;
    
    // Rola para o elemento
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Atualiza a URL no navegador
      window.history.pushState(null, '', hash);
      
      // Atualiza o estado do hash ativo
      setActiveLocationHash(url.toLowerCase());
    }
  };

  return (
    <header className="sticky top-0 z-300 bg-black flex justify-between items-center p-5  md:p-10">
      {/* left */}
      <a href={ProjectLinksObject.Home.path}>
        <img
          className="w-28 md:w-45"
          src={ProjectImagesObject.CodeLogo.src}
          alt={ProjectImagesObject.CodeLogo.alt}
        />
      </a>

      {/* nav */}
      <nav>
        <ul className="gap-7 hidden lg:flex">
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
                <a 
                  href={`#${item.url}`}
                  onClick={(e) => handleAnchorClick(e, item.url)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* right */}
      <div className="flex items-center gap-3 md:gap-7">
        <a
          className="font-extrabold hidden lg:block" 
          href={ProjectLinksObject.AppLogin.path}
        >
          Entrar
        </a>
        <a 
          className="rounded-full py-2 px-5 bg-white text-black hidden lg:block"
          href={ProjectLinksObject.AppRegister.path}
        >
          <span>
            Cadastre-se, é grátis!
          </span>
        </a>

        {/* mobile menu trigger */}
        <button
          className="block lg:hidden cursor-pointer"
          onClick={()=> setMobileMenuOpen(true)}
        >
          <CiMenuFries size={28} fill="white" />
        </button>
      </div>

      {/* mobile menu */}
      {mobileMenuOpen && (
        <div>
            <div 
              className="absolute bg-black top-0 left-0 w-screen h-screen opacity-60"
              onClick={()=> setMobileMenuOpen(false)}
            >
            </div>
            <div className="absolute top-0 right-0 w-12/12 bg-black border border-t-0 border-white px-5 py-10 rounded-md rounded-t-none">
            {/* header */}
            <div className="flex items-center justify-between mb-10">
              <span className="font-bold text-xl">
                Navegação
              </span>
              <button 
                className="cursor-pointer"
                onClick={()=> setMobileMenuOpen(false)}
              >
                <IoMdClose size={28} className="-mt-1" />
              </button>
            </div>

            {/* navigation */}
            <nav className="mb-10">
              <ul className="flex flex-col gap-5">
                {ProjectSectionHashes.map((item) => {
                  const itemHash = item.url.trim().toLowerCase();
                  const isActive = activeLocationHash === itemHash;

                  return (
                    <li
                      key={item.url}
                      onClick={()=> setMobileMenuOpen(false)}
                      className={`
                        font-bold 
                        ${isActive 
                          ? "opacity-60 underline decoration-[#007bff] underline-offset-4 before:content-['>'] before:mr-2 before:text-[#007bff]" 
                          : "ml-4"}
                      `}
                    >
                      <a 
                        href={`#${item.url}`}
                        onClick={(e) => handleAnchorClick(e, item.url)}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* login and register */}
            <div className="flex flex-col gap-2">
              <a 
                className="text-center rounded-full py-2 px-5 bg-white text-black block"
                href={ProjectLinksObject.AppRegister.path}
              >
                <span>
                  Cadastre-se, é grátis!
                </span>
              </a>

              <a 
                className="text-center rounded-full py-2 px-5 border border-white"
                href={ProjectLinksObject.AppLogin.path}
              >
                <span>
                  Entrar
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}