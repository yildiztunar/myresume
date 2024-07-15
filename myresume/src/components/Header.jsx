import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import bannerImg from "../assets/bannerImg.png";
import Theme from "./Theme";
import Language from "./Language";


function Header() {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);


  return (
   <div className="flex flex-row text-left ">
    
    <div className={`flex flex-col w-4/6 pl-32 pb-32 gap-y-32 ${theme === 'light' ? 'bg-purplebg' : 'bg-bluebg'}`}>
      <div className="flex flex-col">
        <div className="flex justify-end">
          <Language />
        </div>
        <div className="text-4xl text-greentext font-semibold">
          yıldız
        </div>
      </div>

      <div className="flex flex-col gap-y-9 w-8/12">
        <div className="text-6xl text-greentext font-semibold leading-none">
          {t('meTitle')}
        </div>
        <div className="text-xl text-whitetext leading-none">
          {t('meInformation')}
        </div>
        <div className="flex flex-row gap-1.5">
          <button className="text-lg text-buttontext rounded-md">
            GitHub
          </button>
          <button className="text-lg text-buttontext rounded-md">
            Linkedin
          </button>
        </div>
      </div>

    </div>

    <div className={`flex flex-col pb-16 w-2/6 ${theme === 'light' ? 'bg-greenbg' : 'bg-darkgreenbg'}`}>
        <div>
          <Theme />
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <div className="relative w-4/5 ml-[-400px]">
            <img src={bannerImg} className="rounded-2xl" />
          </div>
        </div>
      </div>
            

  </div>
  );
}

export default Header;
