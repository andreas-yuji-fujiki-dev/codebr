import type { Route } from "./+types/home";
import { HomePage } from "~/pages/Home.page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Code BR" },
    { name: "description", content: "Seja bem vindo ao code.com.br!" },
  ];
}

export default function Home() {
  return <HomePage />
}
