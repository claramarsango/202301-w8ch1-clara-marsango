import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <footer className={styles.footer} data-testid="footer">
        <p>Made by Clari</p>
      </footer>
    </>
  );
};

export default MainLayout;
