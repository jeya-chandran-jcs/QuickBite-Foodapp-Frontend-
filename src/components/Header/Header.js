import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Dropdown, Badge } from 'antd';
import {
  ShoppingCartOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import classes from './header.module.css';

const { Header } = Layout;

export default function CustomHeader() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <Header className={`${classes.header} header`}>
      <div className={classes.container}>
        <div className={classes.left}>
          {!user ? (
            <Link to="/login" className={classes.loginLink}>
              Login
            </Link>
          ) : (
            <div className={classes.profile}>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="dashboard">
                      <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="profile">
                      <Link to="/profile">Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="orders">
                      <Link to="/orders">Orders</Link>
                    </Menu.Item>
                    <Menu.Item key="logout">
                      <Button type="text" onClick={logout}>
                        Logout
                      </Button>
                    </Menu.Item>
                  </Menu>
                }
                trigger={['click']}
              >
                <Button type="dashed" icon={<MenuOutlined />} style={{ left: "0px" }} />
              </Dropdown>
              <Link to="/dashboard" className={classes.profileLink}>
                {user.name}
              </Link>
            </div>
          )}
        </div>

        <Link to="/" className={`${classes.logo} logo`}>
          QuickBite
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li style={{ marginLeft: '19rem' }}>
              <Link to="/cart">
                <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                {cart.totalCount > 0 && (
                  <Badge count={cart.totalCount} overflowCount={9} />
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  );
}
