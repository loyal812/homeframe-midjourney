import TestView from './views/test';
import Header from './layouts/header';
import Footer from './layouts/footer';


function App() {
  return (
    <div className="flex flex-col gap-y-6 App">
      <Header />
      <TestView />
      <Footer />
    </div>
  );
}

export default App;
