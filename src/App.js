import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation'
import {LanguageProvider} from './LanguageContext'

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Navigation />
        <Footer />
      </LanguageProvider>

    </div>
  );
}

export default App;
