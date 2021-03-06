import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <button className="signupbutton">
        <NavLink to="/signup">Sign Up</NavLink>
        </button>
      </>
    );
  }

  return (

    <div className="navbar">
    <h1 className="fitness">fitnessoverflow</h1>
    <input className="searchbar" type="text" placeholder="Search"></input>
    <ul>
      <li>

        {isLoaded && sessionLinks}
      </li>
    </ul>

    </div>

  );
}

export default Navigation;
