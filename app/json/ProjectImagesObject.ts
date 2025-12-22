interface ProjectImage {
  src: string;
  alt?: string;
}

interface ProjectImagesObjectTypes {
  CodeLogo: ProjectImage;
  CodeStudioDemo: ProjectImage;
  HeroWaves: ProjectImage;
}

export const ProjectImagesObject: ProjectImagesObjectTypes = {
  CodeLogo: {
    src: "/app-logo.svg",
    alt: "Logo da plataforma Code",
  },
  CodeStudioDemo: {
    src: "/studio-img.png",
    alt: "Imagem demonstrativa do Code Studio, que possibilita a edição do código de um lado da tela, e a visualização do resultado na direita."
  },
  HeroWaves: {
    src: "/hero-waves.svg"
  }
};
