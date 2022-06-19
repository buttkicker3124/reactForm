import './App.css';

function Login(){
    return (
        <div className="Login">
               <div className="login" id="login">
           <div className="form-control">
            <label htmlFor="fullname">
              Enter your name : 
             </label>
             <input type="text" name="fullname" />
            </div>
            <div className="form-control">
            <label htmlFor="email">
              Enter your Email : 
             </label>
             <input type="email" name="email" />
            </div>
            <div className="form-control">
            <label htmlFor="fullname">
              Enter your password : 
             </label>
             <input type="password" name="password" />
            </div>
            <div className="form-control">
            <label htmlFor="fullname">
              Confirm password : 
             </label>
             <input type="password" name="Cpassword" />
            </div>
            <div className="container-btn">
              <input type="submit" name="submit" className="btn-submit" />
            </div>

           </div>
        </div>
    )
}

export default Login;