// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Main from './Main';
import Vid from './Login_Signup/Login';
// import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='Login' element={<Vid />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
