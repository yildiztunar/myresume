import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { setUser } from '../store/actions/userActions';

const formDataInitial = {
  username: "",
  password: ""
}

const LoginForm = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: formDataInitial,
    mode: "onChange"
  });

  const onFormSubmit = (formData) => {
    axios.get("https://669617e40312447373c10664.mockapi.io/api/v1/users", {
      params: {
        username: formData.username,
        password: formData.password
      }
    })
    .then(res => {
      const user = res.data[0];
      if (user) {
        dispatch(setUser(user));
        console.log(user);
        history.push("/resume");
      } else {
        setErrorMessage(t('invalidCredentials'));
      }
    })
    .catch(error => {
      setErrorMessage(t('invalidCredentials'));
    });
  };

  return (
    <div>
      <div className={`flex flex-col px-32 py-16 gap-x-32 ${theme === 'light' ? 'bg-whitebg' : 'bg-darkpurplebg'}`}>
        <div className={`text-5xl font-bold text-left ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}>
          {t('loginTitle')}
        </div>

        <div className={`flex flex-col py-16 text-2xl text-left font-semibold ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className='flex flex-col gap-y-8'>
              <div className='flex flex-col gap-y-2'>
                <label htmlFor='username'>{t('username')}</label>
                <input className='text-black border-gray border-2 rounded-md w-6/12' type="text" {...register("username", {
                  required: t('usernameRequired'),
                  minLength: { value: 6, message: t('requiredUsername') }
                })} />
                {errors.username && (<div className='text-red-500 text-xl'> {errors.username.message}</div>)}
              </div>
              <div className='flex flex-col gap-y-2'>
                <label htmlFor='password'>{t('password')}</label>
                <input className='text-black border-gray border-2 rounded-md w-6/12' type="password" {...register("password", {
                  required: t('passwordRequired'),
                  minLength: { value: 8, message: t('requiredPassword') }
                })} />
                {errors.password && (<div className='text-red-500 text-xl'> {errors.password.message}</div>)}
              </div>
              <button disabled={!isValid} type="submit" className={`rounded-md px-6 py-2 w-6/12 font-semibold ${theme === 'light' ? 'bg-white text-buttontext border-buttonborder border' : 'bg-darkgreenbg text-white border-white border'}`}>{t('submit')}</button>
            </div>
          </form>
          {errorMessage && (<div className='text-red-500 text-xl mt-4'>{errorMessage}</div>)}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
