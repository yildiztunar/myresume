import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TwitterIcon from '../assets/twitter.svg';
import CodepenIcon from '../assets/codepen.svg';
import AtSignIcon from '../assets/at-sign.svg';
import InstagramIcon from '../assets/instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    const theme = useSelector((store) => store.theme);
    

    return (
        <div className={`flex flex-col w-screen items-center py-2 md:py-16 gap-y-5 ${theme === 'light' ? 'bg-whitebg' : 'bg-darkpurplebg'}`}
        >

        <div className={`text-2xl lg:text-5xl font-bold max-w-lg ${theme === 'light' ? 'text-purpletext' : 'text-footerlilactext'}`}>{t('contactTitle')}</div>
        <div className={`text-tiny lg:text-2xl max-w-lg ${theme === 'light' ? 'text-linktext' : 'text-whitetext'}`}>{t('contactTitleInformation')}</div>
        <div className={`text-tiny lg:text-2xl ${theme === 'light' ? 'text-emailtext' : 'text-footerlilactext'}`}>{t('email')}</div>

        <div className={`flex flex-row gap-x-5 text-2xl lg:text-4.5xl ${theme === 'light' ? 'text-purpletext' : 'text-footerlilactext'}`}>
        <img src={TwitterIcon} alt='Twitter' />
        <img src={CodepenIcon} alt="Codepen" />
        <img src={AtSignIcon} alt="AtSign" />
        <img src={InstagramIcon} alt="Instagram" />
        </div>
        <Link to="/login">
        <div className={`rounded-md text-tiny lg:text-xl px-6 py-2 font-semibold ${theme === 'light' ? 'bg-white text-buttontext border-buttonborder border-2  hover:bg-purplebg hover:text-whitetext hover:border-white' : 'bg-darkgreenbg text-white border-white border  hover:bg-whitebg hover:text-darkgraytext'}`}>
            {t('moreInfo')}
        </div>
        </Link>
        </div>
    )

}

export default Footer