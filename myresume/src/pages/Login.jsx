import LoginForm from '../components/LoginForm'
import Language from "../components/Language";
import Theme from "../components/Theme";
import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


function Login() {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);


  return (
   <div className="flex flex-col items-center w-screen h-screen text-left md:flex-row">
    
    <div className={`flex flex-col w-screen h-1/2 md:w-7/12 md:h-screen pl-12 md:pl-32 pb-12 md:pb-32 gap-y-2 md:gap-y-16 ${theme === 'light' ? 'bg-purplebg' : 'bg-bluebg'}`}>
      <div className="flex flex-col ">
        <div className="flex justify-end ">
          <Language />
        </div>
        <div className="text-base text-greentext font-semibold lg:text-4xl pt-2">
          yıldız
        </div>
      </div>

      <div className="flex flex-col justify-center h-full gap-y-9 w-10/12">
        <div className="text-2xl text-greentext font-semibold leading-none lg:text-6xl">
          {t('meTitle')}
        </div>
        <div className="text-tiny text-whitetext leading-none lg:text-xl">
          {t('meInformation')}
        </div>
        <div className="flex flex-row gap-2 text-tiny md:text-base lg:text-lg">
          <div className={`rounded-md px-2 md:px-6 py-2 font-semibold ${theme === 'light' ? 'bg-white hover:bg-purplebg hover:text-whitetext hover:border-white text-buttontext border-buttonborder border' : 'bg-darkgreenbg text-white border-white border hover:bg-whitebg hover:text-darkgraytext'}`}>
          <a href="https://github.com/yildiztunar" target="_blank" rel="noopener noreferrer" >
          GitHub</a>
          </div>
          <div className={`rounded-md px-2 md:px-6 py-2 font-semibold ${theme === 'light' ? 'bg-white hover:bg-purplebg hover:text-whitetext hover:border-white text-buttontext border-buttonborder border' : 'bg-darkgreenbg text-white border-white border hover:bg-whitebg hover:text-darkgraytext'}`}>
          <a href="https://www.linkedin.com/in/yildiz-ozdemir/" target="_blank" rel="noopener noreferrer">
          LinkedIn</a>
          </div>
        </div>
      </div>

    </div>

    <div className={`flex flex-col w-screen h-1/2 md:w-5/12 md:h-screen ${theme === 'light' ? 'bg-greenbg' : 'bg-darkgreenbg'}`}>
        <div>
          <Theme />
        </div>
        
        <div className="flex flex-col items-center justify-center h-full">
          <div className={`text-2xl lg:text-5xl font-bold text-left ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}>
            {t('loginTitle')}
          </div>
          <div>
            <LoginForm/>
          </div>
        </div>
    </div>

  </div>
  );
}

export default Login
