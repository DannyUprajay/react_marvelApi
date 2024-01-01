import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import Marvel from "./components/Marvel";

function App() {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<Main/>}/>
              <Route path={'/:id'} element={<Marvel/>}/>
          </Routes>

      </>
  );
}

export default App;
