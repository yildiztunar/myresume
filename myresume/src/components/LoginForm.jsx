import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

const formDataInitial={
    username:"",
    password:""
}

const LoginForm = () => {
const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

  const {register, handleSubmit, formState: {errors, isValid}} = 
  useForm({defaultValues: formDataInitial, mode: "all"});
  
  const [formData, setFormData] = useState(formDataInitial);

  const inputChangeHandler = (e) => {
    const {name, value} = e.target;

    setFormData({
        ...formData,
        [name]: value,
    })
  }

  const onFormSubmit = (formData) => {
    console.log("form submitted: ", formData)
  }


    return (
        <div>
        
            <div
            className={`flex flex-col px-32 py-16 gap-x-32 ${theme === 'light' ? 'bg-whitebg' : 'bg-darkpurplebg'}`}
            >
        
                <div
                className={`text-5xl font-bold text-left ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}
                >
                {t('loginTitle')}
                </div>

                <div className={`flex flex-col py-16 text-2xl text-left font-semibold  ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className='flex flex-col gap-y-8'>
                    <div className='flex flex-col gap-y-2'>
                    <label>{t('username')}</label>
                    <input className='text-black border-gray border-2 rounded-xl w-6/12' type="email" {...register("username")}/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                    <label>{t('password')}</label>
                    <input className='text-black border-gray border-2 rounded-xl w-6/12' type="password" {...register("password")}/>
                    </div>
                    <button className={`text-2xl text-left font-bold w-6/12 ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}>{t('submit')}</button>
                </div>
                </form>
                </div>

            </div>

        </div>
    );
  };
  
  export default LoginForm;
  

