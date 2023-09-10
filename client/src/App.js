import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import { useState } from "react";
function App() {
  const [user, setUser] = useState([]);

  console.log(user);

  return (
    <div className="App">
      <Routes>
        {!user.length > 0 ? (
          <Route path="/" element={<Landing setUser={setUser} user={user} />} />
        ) : (
          <Route
            path="/home"
            element={<Home setUser={setUser} user={user} />}
          />
        )}
        <Route path="/home" element={<Home setUser={setUser} user={user} />} />
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
