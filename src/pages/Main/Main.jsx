import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from './components/Heder';
import Card from './components/Card';
import {products, user} from '../../store';
import styles from './Main.module.css';



const Main = () => {
  const dispatch = useDispatch()
  const productsInfo = useSelector(products.getProducts);

  React.useEffect(() => {

    const  init = async () => {
      await Promise.all([
        dispatch(user.actions.fetchUser()),
        dispatch(products.actions.fetchProducts())
      ]);
    }

    init();
  }, [])

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.mainContainer}>
        {productsInfo.isLoading ? 'Загрузка...': (
          <>
            {productsInfo.order.map(id => <Card className={styles.mainCard} key={id} {...productsInfo.entities[id]}/>)}
          </>
        )}
      </div>
    </div>
  );
}

export default Main;