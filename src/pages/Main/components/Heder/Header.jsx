import * as React from 'react';
import { useSelector} from "react-redux";
import { user} from '../../../../store'
import styles from './Header.module.css';

const Header = () => {
  const userEntity = useSelector(user.getUser);

  return (
    <div className={styles.header}>
      <h2 className={styles.headerLogo}>Магазин на диване</h2>
      <div className={styles.headerUser}>
        <div className={styles.headerUserImg} style={{
          backgroundImage: `url(${userEntity.img})`
        }} />
        <div className={styles.headerUserText}>{userEntity.name}</div>
        <div className={styles.headerUserText}>{userEntity.email}</div>
      </div>
    </div>
  );
}

export default Header;