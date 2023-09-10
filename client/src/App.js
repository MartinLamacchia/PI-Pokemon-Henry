import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import { useState } from "react";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Routes>
        {!user.length > 0 ? (
          <Route path="/" element={<Landing />} />
        ) : (
          <Route path="/home" element={<Home />} />
        )}
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

// const allPokemones = useSelector((state) => state.allPokemones);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllPokemon());
//   }, [dispatch]);

//   console.log(allPokemones);
