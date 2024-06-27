import React from 'react';
import { useForm } from 'react-hook-form';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useAuth } from '../../hooks/useAuth';
import classes from './ChangePassword.module.css'; // Importing CSS module

export default function ChangePassword() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const { changePassword } = useAuth();
  const submit = passwords => {
    changePassword(passwords);
  };

  return (
    <div className={classes.container}> {/* Applying CSS classes */}
      <Title title="Change Password" />
      <form onSubmit={handleSubmit(submit)} className={classes.form}> {/* Applying form CSS classes */}
        <Input
          type="password"
          label="Current Password"
          {...register('currentPassword', {
            required: true,
          })}
          error={errors.currentPassword}
        />

        <Input
          type="password"
          label="New Password"
          {...register('newPassword', {
            required: true,
            minLength: 5,
          })}
          error={errors.newPassword}
        />

        <Input
          type="password"
          label="Confirm Password"
          {...register('confirmNewPassword', {
            required: true,
            validate: value =>
              value !== getValues('newPassword')
                ? 'Passwords Do Not Match'
                : true,
          })}
          error={errors.confirmNewPassword}
        />

        <Button type="submit" text="Change" className={classes.button} /> 
      </form>
    </div>
  );
}
