import * as React from 'react';
import { observer } from "mobx-react"
import Header from './components/Heder';
import Card from './components/Card';
import {products, user} from '../../store';
import styles from './Main.module.css';
import {useRootStore, useProductsStore} from "../../store";


const Main = () => {
  const rootStore = useRootStore();
  const productsStore = useProductsStore();

  React.useEffect(() => {
    rootStore.init();
  }, [])

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.mainContainer}>
        {productsStore.isLoading ? 'Загрузка...': (
          <>
            {productsStore.products.map(entity => <Card className={styles.mainCard} key={entity.id} {...entity}/>)}
          </>
        )}
      </div>
    </div>
  );
}

export default observer(Main);