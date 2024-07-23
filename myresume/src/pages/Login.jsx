import LoginForm from '../components/LoginForm'
import Language from "../components/Language";
import Theme from "../components/Theme";
import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import loginImg from "../assets/loginImg.jpg";

function Login() {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);


  return (
   <div className="flex flex-row text-left ">
    
    <div className={`flex flex-col w-7/12 pl-2 md:pl-32 pb-2 md:pb-32 gap-y-2 md:gap-y-32 ${theme === 'light' ? 'bg-purplebg' : 'bg-bluebg'}`}>
      <div className="flex flex-col">
        <div className="flex justify-end">
          <Language />
        </div>
        <div className="text-tiny text-greentext font-semibold lg:text-4xl">
          yıldız
        </div>
      </div>

      <div className="flex flex-col gap-y-9 w-8/12">
        <div className="text-2xl text-greentext font-semibold leading-none lg:text-6xl">
          {t('meTitle')}
        </div>
        <div className="text-tiny text-whitetext leading-none lg:text-xl">
          {t('meInformation')}
        </div>
        <div className="flex flex-row gap-2 text-tiny md:text-base lg:text-lg">
          <div className={`rounded-md px-6 py-2 font-semibold ${theme === 'light' ? 'bg-white hover:bg-purplebg hover:text-whitetext hover:border-white text-buttontext border-buttonborder border' : 'bg-darkgreenbg text-white border-white border hover:bg-whitebg hover:text-darkgraytext'}`}>
          <a href="https://github.com/yildiztunar" target="_blank" rel="noopener noreferrer" >
          GitHub</a>
          </div>
          <div className={`rounded-md px-6 py-2 font-semibold ${theme === 'light' ? 'bg-white hover:bg-purplebg hover:text-whitetext hover:border-white text-buttontext border-buttonborder border' : 'bg-darkgreenbg text-white border-white border hover:bg-whitebg hover:text-darkgraytext'}`}>
          <a href="https://www.linkedin.com/in/yildiz-ozdemir/" target="_blank" rel="noopener noreferrer">
          LinkedIn</a>
          </div>
        </div>
      </div>

    </div>

    <div className={`flex flex-col w-5/12 pb-16 ${theme === 'light' ? 'bg-greenbg' : 'bg-darkgreenbg'}`}>
        <div>
          <Theme />
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <LoginForm/>
        </div>
      </div>
            

  </div>
  );
}

export default Login
