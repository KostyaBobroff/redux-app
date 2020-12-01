import * as React from 'react';
import {Provider} from 'react-mobx';
import Main from './pages/Main';

import stores from './store';

const App = () => (
  <Provider {...stores}>
    <Main />
  </Provider>
)

export default App;