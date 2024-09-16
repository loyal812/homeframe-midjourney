import TestView from './views/test';
import Header from './layouts/header';
import Footer from './layouts/footer';
import { Provider } from 'react-redux';
import {store} from './redux/store.js';

function App() {
  return (
    <div className="flex flex-col gap-y-6 App">
      <Provider store={store}>
        <Header />
        <TestView />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
