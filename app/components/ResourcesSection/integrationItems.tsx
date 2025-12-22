// icons
import { FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiGooglesheets } from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
import { AiOutlineOpenAI } from "react-icons/ai";

// array
export const integrationItems = [
  {
    icon: <FaBootstrap fill="white" className="size-12 md:size-16 lg:size-20" />,
    label: "Bootstrap"
  },
  {
    icon: <FaDatabase fill="white" className="size-10 md:size-16 lg:size-20" />,
    label: "MySQL"
  },
  {
    icon: <DiMaterializecss fill="white" className="size-12 md:size-16 lg:size-20" />,
    label: "Materialize"
  },
  {
    icon: <AiOutlineOpenAI fill="white" className="size-12 md:size-16 lg:size-20" />,
    label: "ChatGPT"
  },
  {
    icon: <SiGooglesheets fill="white" className="size-12 md:size-16 lg:size-20" />,
    label: "Google Sheets"
  }
]