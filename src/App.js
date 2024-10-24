import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage'
import ViewPage from './Pages/ViewPage'
import CreatePage from './Pages/CreatePage'
import DeletePage from './Pages/DeletePage'
import UpdatePage from './Pages/UpdatePage'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/view' element = {<ViewPage/>}/>
        <Route path = '/create' element = {<CreatePage/>}/>
        <Route path = '/delete' element = {<DeletePage/>}/>
        <Route path = '/update' element = {<UpdatePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
