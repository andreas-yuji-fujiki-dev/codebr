import type { Route } from "./+types/home";
import LoginPage from "~/pages/Login.page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Code - Login" },
    { name: "description", content: "Faça login na plataforma code para usufruir de nossos serviços!" },
  ];
}

export default function Home() {
  return <LoginPage />
}
