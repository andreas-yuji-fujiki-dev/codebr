import { FaCode } from "react-icons/fa";
import { LiaTableSolid } from "react-icons/lia";
import { FaShareAltSquare } from "react-icons/fa";

import { ProjectImagesObject } from "~/json/ProjectImagesObject";

export const projectCreationSteps = [
  {
    icon: <FaCode fill="white" size={30} />,
    iconBackgroundColor: "#007BFF",
    title: "1: Codificação",
    description: "Uma IDE online conecta com diversos recursos e deploy instantâneo.",
    image: ProjectImagesObject.ProjectCreationSteps.stepOne.src,
    imageAlt: ProjectImagesObject.ProjectCreationSteps.stepOne.alt
  },
  {
    icon: <LiaTableSolid fill="white" size={30} />,
    iconBackgroundColor: "#6F3FFF",
    title: "2: Tabelas",
    description: "Crie tabelas, filtros e formulários de forma simples, sincronizada instantaneamente com seu front-end.",
    image: ProjectImagesObject.ProjectCreationSteps.stepTwo.src,
    imageAlt: ProjectImagesObject.ProjectCreationSteps.stepTwo.alt
  },
  {
    icon: <FaShareAltSquare fill="white" size={30} />,
    iconBackgroundColor: "#E001FF",
    title: "3: Compartilhe",
    description: "Compartilhe projetos públicos ou privados; adicione restrições e permissões aos seus usuários.",
    image: ProjectImagesObject.ProjectCreationSteps.stepThree.src,
    imageAlt: ProjectImagesObject.ProjectCreationSteps.stepThree.alt
  }
]