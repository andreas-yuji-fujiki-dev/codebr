// core
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

// objects
import { ProjectSectionHashes } from "../../json/ProjectSectionHashes";
import { ProjectImagesObject } from "~/json/ProjectImagesObject";
import { ProjectLinksObject } from "~/json/ProjectLinksObject";

export default function AppHeader() {
  const location = useLocation();
  const [activeLocationHash, setActiveLocationHash] = useState<string | undefined>(ProjectSectionHashes[0].url);
  const [hasScrolled, setHasScrolled] = useState(false);

  // scroll spy
  useEffect(() => {
  const sections = ProjectSectionHashes
    .map(item => document.getElementById(item.url))
    .filter(Boolean) as HTMLElement[];

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLocationHash(entry.target.id);
        }
      });
    },
    {
      root: null, // viewport
      rootMargin: "-300px 0px -50% 0px",
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
    <header className="sticky top-0 z-300 bg-black flex justify-between items-center p-10">
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