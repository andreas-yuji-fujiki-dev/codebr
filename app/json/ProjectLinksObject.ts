export interface LinkItem {
  label: string;
  path: string;
}

export interface ProjectLinksObjectTypes {
  Home: LinkItem;
  AppLogin: LinkItem;
  AppRegister: LinkItem;
}

export const ProjectLinksObject: ProjectLinksObjectTypes = {
  Home: {
    label: "Home",
    path: "/"
  },
  AppLogin: {
    label: "Login",
    path: "/login",
  },
  AppRegister: {
    label: "Registrar",
    path: "/register",
  },
};
