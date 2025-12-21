interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectImagesObjectTypes {
  CodeLogo: ProjectImage;
}

export const ProjectImagesObject: ProjectImagesObjectTypes = {
  CodeLogo: {
    src: "/app-logo.svg",
    alt: "Logo da plataforma Code",
  },
};
