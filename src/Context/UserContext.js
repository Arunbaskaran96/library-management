import { createContext } from "react";

const Usercontext = createContext();

export const UserProvider = ({ children }) => {
  <Usercontext.Provider>{children}</Usercontext.Provider>;
};

export default Usercontext;
