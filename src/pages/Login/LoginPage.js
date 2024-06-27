import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { EMAIL } from '../../constants/patterns';
import classes from './loginPage.module.css';

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');

  useEffect(() => {
    if (user) {
      navigate(returnUrl || '/');
    }
  }, [user, navigate, returnUrl]);

  const onSubmit = async ({ email, password }) => {
    await login(email, password);
  };

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <Title title="Login" />

        <form onSubmit={handleSubmit(onSubmit)} noValidate className={classes.form}>
          <Input
            type="email"
            label="Email"
            {...register('email', {
              required: true,
              pattern: EMAIL,
            })}
            error={errors.email}
          />

          <Input
            type="password"
            label="Password"
            {...register('password', {
              required: true,
            })}
            error={errors.password}
          />

          <Button type="submit" text="Login" />

          <div className={classes.register}>
            New user? &nbsp;
            <Link to={`/register${returnUrl ? `?returnUrl=${returnUrl}` : ''}`}>Register here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
