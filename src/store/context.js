import { MobXProviderContext } from 'mobx-react';

const useStores = () => {
  return useContext(MobXProviderContext);
};

export const useRootStore = () => {
  return useStores().rootStore;
}

export const useUserStore = () => {
  return useRootStore().userStore;
}

export const useProductsStore = () => {
  return useRootStore().productStore
}

