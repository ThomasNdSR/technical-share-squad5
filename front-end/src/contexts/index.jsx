import { DatabaseContext } from "./DatabaseContext";

export const Contexts = ({ children }) => {
  return <DatabaseContext>{children}</DatabaseContext>;
};
