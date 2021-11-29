import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/About-Me/AboutMe';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
