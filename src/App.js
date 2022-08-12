import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NewItem from './Component/NewItem';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import List from './Component/List'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<List/>} />
          <Route exact path='/new' element={<NewItem/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
