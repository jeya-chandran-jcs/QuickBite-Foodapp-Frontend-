import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import classes from './dashboard.module.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        {allItems
          .filter(item => user.isAdmin || !item.forAdmin)
          .map(item => (
            <Link
              key={item.title}
              to={item.url}
              className={classes.menuItem}
            >
              <div className={classes.iconWrapper}>
                <img src={item.imageUrl} alt={item.title} className={classes.icon} />
              </div>
              <h2 className={classes.title}>{item.title}</h2>
            </Link>
          ))}
      </div>
    </div>
  );
}

const allItems = [
  {
    title: 'Orders',
    imageUrl: '/icons/orders.svg',
    url: '/orders',
  },
  {
    title: 'Profile',
    imageUrl: '/icons/profile.svg',
    url: '/profile',
  },
  {
    title: 'Users',
    imageUrl: '/icons/users.svg',
    url: '/admin/users',
    forAdmin: true,
  },
  {
    title: 'Foods',
    imageUrl: '/icons/foods.svg',
    url: '/admin/foods',
    forAdmin: true,
  },
];
