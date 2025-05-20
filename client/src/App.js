
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import Edit from './edit/Edit';
import Read from './read/Read';
import Create from './create/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/read/:id' element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
