import Header  from './components/Header';
import Page  from './components/Page';
// import PageContent  from './components/PageContent';
import Footer  from './components/Footer';
// import Class  from './components/Class';
// import State  from './components/State';
import './styles.min.css';

function App() {
  return (
    <div className="App">
     <Header />
   
        <Page></Page>
        {/* <Class></Class> */}
        {/* <State></State> */}

     <Footer />
    </div>
  );
}

export default App;
