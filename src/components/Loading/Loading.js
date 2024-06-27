import React from 'react';
import { useLoading } from '../../hooks/useLoading';
import classes from './loading.module.css';

export default function Loading() {
  const { isLoading } = useLoading();
  if (!isLoading) return null;

  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
    </div>
  );
}
