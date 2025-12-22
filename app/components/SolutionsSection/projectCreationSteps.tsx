import { FaCode } from "react-icons/fa";
import { LiaTableSolid } from "react-icons/lia";
import { FaShareAltSquare } from "react-icons/fa";

export const projectCreationSteps = [
  {
    icon: <FaCode fill="white" size={30} />,
    iconBackgroundColor: "#007BFF",
    title: "1: Codificação",
    description: "Uma IDE online conecta com diversos recursos e deploy instantâneo.",
    image: "/studio-img.png",
    imageAlt: "Demonstração de codificação pelo Code Studio"
  },
  {
    icon: <LiaTableSolid fill="white" size={30} />,
    iconBackgroundColor: "#6F3FFF",
    title: "2: Tabelas",
    description: "Crie tabelas, filtros e formulários de forma simples, sincronizada instantaneamente com seu front-end.",
    image: "/tablesStep.png",
    imageAlt: "Demonstração de codificação pelo Code Studio"
  },
  {
    icon: <FaShareAltSquare fill="white" size={30} />,
    iconBackgroundColor: "#E001FF",
    title: "3: Compartilhe",
    description: "Compartilhe projetos públicos ou privados; adicione restrições e permissões aos seus usuários.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwC9hA-fvDUMPyYL6h2iNdZUdk55pv73b_1g&s",
    imageAlt: "Demonstração de codificação pelo Code Studio"
  }
]