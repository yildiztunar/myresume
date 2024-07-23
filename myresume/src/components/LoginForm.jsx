import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { setUser } from '../store/actions/userActions';
import {Bounce, ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  

const formDataInitial = {
  username: "",
  password: ""
}


const LoginForm = () => {
  const { t } = useTranslation();
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const location=useLocation();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: formDataInitial,
    mode: "onChange"
  });

  const onFormSubmit = (formData) => {
    axios.get(`https://669617e40312447373c10664.mockapi.io/api/v1/users`, {
      params: {
        username: formData.username,
        password: formData.password
      }
    })
    .then(res => {
      console.log("Response data:", res.data[0]);

      const user = res.data[0];

      console.log("Form data:", formData);
      console.log("User data:", user);

      if (user && user.username === formData.username && user.password === formData.password) {
        dispatch(setUser(user));
        toast.success(t('loginSuccess'), {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        history.push('/resume');
      } else {
        setErrorMessage(t('invalidCredentials'));
        toast.error(t('loginFail'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    })
    .catch(error => {
      console.error("Error:", error); // Hata durumunu kontrol edin
      setErrorMessage(t('invalidCredentials'));
      toast.error(t('loginFail'), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
  };


  return (
    
        <div>
        <div className={`text-2xl lg:text-5xl font-bold text-left ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}>
          {t('loginTitle')}
        </div>

        <div className={`flex flex-col py-16 text-lg lg:text-2xl text-left font-semibold ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className='flex flex-col gap-y-8'>
              <div className='flex flex-col gap-y-2'>
                <label htmlFor='username'>{t('username')}</label>
                <input className='text-black border-gray border-2 rounded-md w-auto' type="text" {...register("username", {
                  required: t('requiredUsername'),
                  minLength: { value: 6, message: t('requiredUsername') }
                })} />
                {errors.username && (<div className='text-red-500 text-tiny lg:text-xl'> {errors.username.message}</div>)}
              </div>
              <div className='flex flex-col gap-y-2'>
                <label htmlFor='password'>{t('password')}</label>
                <input className='text-black border-gray border-2 rounded-md w-auto' type="password" {...register("password", {
                  required: t('requiredPassword'),
                  minLength: { value: 8, message: t('requiredPassword') }
                })} />
                {errors.password && (<div className='text-red-500  text-tiny lg:text-xl'> {errors.password.message}</div>)}
              </div>
              <button disabled={!isValid} type="submit" className={`rounded-md px-6 py-2 w-auto font-semibold  ${theme === 'light' ? 'bg-white hover:bg-purplebg hover:text-whitetext hover:border-white text-buttontext border-buttonborder border' : 'bg-darkgreenbg text-white border-white border hover:bg-whitebg hover:text-darkgraytext'}`}>{t('submit')}</button>
              </div>
          </form>
          {errorMessage && (<div className='text-red-500  text-tiny lg:text-xl mt-4'>{errorMessage}</div>)}
        </div>
      </div>
  );
};

export default LoginForm;
