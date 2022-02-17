import { FC } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import styles from './MainLayout.module.scss';

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className={styles['main-layout']}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default MainLayout;