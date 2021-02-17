import './App.css';
import Navigation from './components/Navigation'
import {LanguageProvider} from './LanguageContext'

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Navigation />
      </LanguageProvider>

    </div>
  );
}

export default App;
