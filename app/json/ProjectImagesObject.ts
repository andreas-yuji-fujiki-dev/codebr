interface ProjectImage {
  name?: string
  src: string;
  alt?: string;
}

interface ProjectImagesObjectTypes {
  // general
  CodeLogo: ProjectImage;
  CodeStudioDemo: ProjectImage;
  HeroWaves: ProjectImage;

  // project creation steps
  ProjectCreationSteps: {
    stepOne: ProjectImage;
    stepTwo: ProjectImage;
    stepThree: ProjectImage
  }

  // templates carousel
  ProjectTemplates: {
    contactPage: ProjectImage;
    eCommerce: ProjectImage;
    landingPage: ProjectImage;
    portfolio: ProjectImage
  }
}

export const ProjectImagesObject: ProjectImagesObjectTypes = {
  // general
  CodeLogo: {
    src: "/logos/full-logo.svg",
    alt: "Logo da plataforma Code",
  },
  CodeStudioDemo: {
    src: "/studio-images/studio.png",
    alt: "Imagem demonstrativa do Code Studio, que possibilita a edição do código de um lado da tela, e a visualização do resultado na direita."
  },
  HeroWaves: {
    src: "/shapes/hero-waves.svg"
  },

  // project creation steps
  ProjectCreationSteps: {
    stepOne: {
      src: "/studio-images/studio-bordered.svg",
      alt: "Imagem demonstrativa do Code Studio, que possibilita a edição do código de um lado da tela, e a visualização do resultado na direita."
    },
    stepTwo: {
      src: "/studio-images/table-creation.svg",
      alt: "Imagem demonstrativa da aba no painel que possibilita a criação de tabelas no banco de dados."
    },
    stepThree: {
      src: "/studio-images/deploy.svg",
      alt: "Imagem demonstrativa de um projeto lançado e sendo visualizado."
    }
  },

  // templates 
  ProjectTemplates: {
    contactPage: {
      name: "Página p/ Contato", 
      src: "/templates-carousel/contact-page.svg",
      alt: "Imagem demonstrativa de um template de página de contato."
    },
    eCommerce: {
      name: "E-commerce",
      src: "/templates-carousel/e-commerce.svg",
      alt: "Imagem demonstrativa de um template de página de e-commerce."
    },
    landingPage: {
      name: "Landing Page",
      src: "/templates-carousel/landing-page.svg",
      alt: "Imagem demonstrativa de um template de landing page."
    },
    portfolio: {
      name: "Portfolio",
      src: "/templates-carousel/portfolio.svg",
      alt: "Imagem demonstrativa de um template de página de portfolio."
    }
  }
};
