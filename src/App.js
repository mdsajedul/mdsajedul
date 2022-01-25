import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from 'swiper';
import AboutMe from './components/About-Me/AboutMe';
import Header from './components/Header/Header';
import LeftPanel from './components/Left-Panel/LeftPanel';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
     <div>
          <div className='row'>
              <div className="col-lg-3">
                  <LeftPanel></LeftPanel>
              </div>
              <div className="col-lg-9">
                <AboutMe></AboutMe>
              </div>
          </div>
     </div>
    </div>
  );
}

export default App;
