import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import { useSelector } from "react-redux";
import About from "./views/About/About";
import CreatePokemon from "./views/CreatePokemon/CreatePokemon";
function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Routes>
        {!user.length > 0 ? (
          <Route path="/" element={<Landing />} />
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/createPokemon" element={<CreatePokemon />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
