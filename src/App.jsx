import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/layout/Footer";

import HomeProtected from "./components/HomeProtected";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Pokdedex from "./pages/Pokdedex";
import Pokemon from "./pages/Pokemon";

function App() {

  const nameTrainer = useSelector(state => state.nameTrainer)

  useEffect(()=> {
    localStorage.setItem("nameTrainer", nameTrainer)
  },[nameTrainer])

  return (
    <div className="App">
      <Routes>
        <Route element={<HomeProtected />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokdedex />} />
          <Route path="/pokedex/:id" element={<Pokemon />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
