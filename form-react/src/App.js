// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Registration from './Registration';

function App() {
  return (
    <div className="App">
          
         <form className='Form-container'> 
         <div className="container">
             <h3>
             Confirm User
             </h3>
          </div>
          <div className="container page-control">
            <button onClick={Login} className="btn-page-control" >
                Login
            </button>
            <button onClick={Registration} className="btn-page-control">
              Registration
            </button>
          </div>
          <div>
                <Login />
                <Registration />
          </div>
  
         </form>
    </div>
  );
}

export default App;
