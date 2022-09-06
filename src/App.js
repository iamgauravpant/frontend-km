import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import EditDetails from "./pages/editDetails";
import {Routes,BrowserRouter as Router,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import { AuthProvider, useAuth } from './components/Context/auth';
import PrivateRoute  from './components/PrivateRoute/PrivateRoute';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">

    <AuthProvider>
      <ToastContainer position='top-center'/>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<PrivateRoute/>}> */}
          <Route exact path='/' element={<PrivateRoute Component={Dashboard}/>}/>
          {/* </Route> */}
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path='/edit-details' element={<PrivateRoute Component={EditDetails}/>}/>
        </Routes>
      </Router>
    </AuthProvider>
    </div>

  );
}

export default App;
