import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import { Links } from "./constants/Links";
function App() {
  return (
    <>
      <Navbar links={Links} />
    </>
  );
}

export default App;
