import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/About-Me/AboutMe';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
  );
}

export default App;
