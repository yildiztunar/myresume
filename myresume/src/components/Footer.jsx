import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TwitterIcon from '../assets/twitter.svg';
import CodepenIcon from '../assets/codepen.svg';
import AtSignIcon from '../assets/at-sign.svg';
import InstagramIcon from '../assets/instagram.svg';

const Footer = () => {
    const { t } = useTranslation();
    const theme = useSelector((state) => state.theme);
    

    return (
        <div className={`flex flex-col items-center py-16 gap-y-5 ${theme === 'light' ? 'bg-whitebg' : 'bg-darkpurplebg'}`}
        >

        <div className={`text-5xl font-bold max-w-lg ${theme === 'light' ? 'text-purpletext' : 'text-footerlilactext'}`}>{t('contactTitle')}</div>
        <div className={`text-2xl max-w-lg ${theme === 'light' ? 'text-linktext' : 'text-whitetext'}`}>{t('contactTitleInformation')}</div>
        <div className={`text-2xl ${theme === 'light' ? 'text-emailtext' : 'text-footerlilactext'}`}>{t('email')}</div>

        <div className={`flex flex-row gap-x-5 text-4.5xl ${theme === 'light' ? 'text-purpletext' : 'text-footerlilactext'}`}>
        <img src={TwitterIcon} alt='Twitter' />
        <img src={CodepenIcon} alt="Codepen" />
        <img src={AtSignIcon} alt="AtSign" />
        <img src={InstagramIcon} alt="Instagram" />
        </div>
        </div>
    )

}

export default Footer