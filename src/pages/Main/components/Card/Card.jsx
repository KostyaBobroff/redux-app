import * as React from 'react';
import styles from './Card.module.css';
import {observer} from 'react-mobx';
import cn from 'classnames';

const Card = ({className, img, title, description, price}) => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.cardImg} style={{
        backgroundImage: `url(${img})`
      }}/>
      <h3>{title}</h3>
      <div className={styles.cardText}> {description}</div>
      <div className={styles.cardPrice}>{price}</div>
    </div>
  )
}

export default observer(Card);