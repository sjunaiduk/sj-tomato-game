import { SimpleGrid } from "@chakra-ui/react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Links } from "./constants/Links";
import NavBarLink from "./models/NavBarLink";
import { useContext } from "react";
import { authContext } from "./context/AuthenticationContext";
import Footer from "./components/General/Footer";

function App() {
  const { user } = useContext(authContext);
  const computedLinks: NavBarLink[] = user
    ? [
        ...Links,
        { name: "Play", path: "/game", type: "Play" },
        { name: "Logout", path: "/login", type: "Logout" },
      ]
    : [...Links, { name: "Login", path: "/login", type: "Login" }];
  return (
    <SimpleGrid columns={1} height={"100vh"}>
      <Navbar links={computedLinks} />
      {<Outlet />}
      <Footer />
    </SimpleGrid>
  );
}

export default App;
