import React from 'react'
import { useDispatch } from 'react-redux';
import { setNameTrainerGlobal } from '../../store/slices/nameTrainer.slice';
import "./styles/Header.css"

const Header = () => {

const dispatch = useDispatch ()

  const handleClickLogOut = () => {
    dispatch(setNameTrainerGlobal(""))
  }
    return (
      <header className="header">
        <img className='header__img' src="/images/image 11.png" alt="" />
        <div className="header__bottom">       
        </div>
        <div className="header__circle">
          <div className="header__circle-int"> 
          </div>
        </div>
      </header>
    );
  };
  
    

export default Header