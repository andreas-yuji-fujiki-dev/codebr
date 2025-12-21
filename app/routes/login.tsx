import type { Route } from "./+types/login";
import LoginPage from "~/pages/Login.page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Code - Login" },
    {
      name: "description",
      content: "Faça login na plataforma Code para usufruir de nossos serviços!",
    },
  ];
}

export default function LoginRoute() {
  return <LoginPage />;
}
