import * as React from 'react';
import {observer} from 'react-mobx';
import styles from './Header.module.css';
import {useUserStore} from "../../../../store";

const Header = () => {
  const userStore = useUserStore();

  return (
    <div className={styles.header}>
      <h2 className={styles.headerLogo}>Магазин на диване</h2>
      <div className={styles.headerUser}>
        <div className={styles.headerUserImg} style={{
          backgroundImage: `url(${userStore.img})`
        }} />
        <div className={styles.headerUserText}>{userStore.name}</div>
        <div className={styles.headerUserText}>{userStore.email}</div>
      </div>
    </div>
  );
}

export default observer(Header);