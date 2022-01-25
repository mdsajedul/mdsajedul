import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from 'swiper';
import AboutMe from './components/About-Me/AboutMe';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import LeftPanel from './components/Left-Panel/LeftPanel';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <div>
                <div className='row gx-0'>
                    <div className="col-lg-3 gx-0">
                        <LeftPanel></LeftPanel>
                    </div>
                    <div className="col-lg-9 gx-0">
                        <Routes>
                            <Route path="/" element={<Home/>}> </Route>
                        </Routes>
                    </div>
                </div>
            </div>
          
      </BrowserRouter>
     {/* <div>
          <div className='row gx-0'>
              <div className="col-lg-3 gx-0">
                  <LeftPanel></LeftPanel>
              </div>
              <div className="col-lg-9 gx-0">
                <Banner></Banner>
                <AboutMe></AboutMe>
              </div>
          </div>
     </div> */}
    </div>
  );
}

export default App;
