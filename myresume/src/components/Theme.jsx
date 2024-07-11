import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../store/actions/themeActions';

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <button
      className={`bg-${theme === 'light' ? 'white' : 'black'} text-3xl font-bold underline text-${theme === 'light' ? 'black' : 'white'}`}
      onClick={changeTheme}
    >
      {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
    </button>
  );
};

export default Theme;