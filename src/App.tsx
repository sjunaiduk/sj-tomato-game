import { SimpleGrid } from "@chakra-ui/react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Links } from "./constants/Links";

function App() {
  return (
    <SimpleGrid columns={1}>
      <Navbar links={Links} />
      {<Outlet />}
    </SimpleGrid>
  );
}

export default App;
