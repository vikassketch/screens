import Page1 from "./components/Page1";
import Testing from "./components/Testing";
import Page2 from './components/Page2';

import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/successstories' element={<Page2/>}/>
      </Routes>
      {/* <Testing/> */}
       
       
     
    </div>
    </BrowserRouter>
  );
}

export default App;
