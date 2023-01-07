import React from "react";
import { useDispatch } from "react-redux";
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice";
import "./styles/FormHome.css";

const FormHome = () => {
  const dispatch = useDispatch();

  const handleSubbit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value.trim();
    dispatch(setNameTrainerGlobal(nameTrainer));
  };

  return (
    <form onSubmit={handleSubbit} className="home___form">
      <input
        className="home__inpt"
        type="text"
        id="nameTrainer"
        placeholder="Youre name"
      />
      <button className="home__btn">Start</button>
    </form>
  );
};

export default FormHome;
