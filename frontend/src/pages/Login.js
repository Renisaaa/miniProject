import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [user, setUser] =useState({
        "username": "",
        "password":""
        
    });

    useEffect(() => {
        console.log(user);
    })

    const handleChange = e => {
        const {name, value } = e.target
        setUser({
            ...user,
            [name]: value
           
        })
        
    }

    const Login =() => {
        axios.post("http://localhost:9002/Login", user)
        .then(res => console.log(res))
    
            }

    return (
       <>
         <section className="homePageWrapper">
            <div className="formWrapper">
                <div className="content">
                    <div className="form">
                      <div className="login100-pic js-tilt" data-tilt>
					   <img src="images/img-01.png" alt="IMG"></img>
				      </div>
                        <h2 className="mainLabel">Sign In</h2>
                        <form className="register-form" id="register-form">

                            <div className="inputGroup">
                            <input 
                               type="text" 
                               className='inputBox'
                                placeholder='USERNAME'
                                autoComplete="off"
                                onChange={handleChange}
                                value={user.username}
                                name="username"
                                 
                            />     
                            </div>
                              
                            <div className="inputGroup">
                            <input 
                               type="password" 
                               className='inputBox'
                                placeholder='PASSWORD'
                                autoComplete="off"
                                onChange={handleChange}
                                value={user.password}
                                name="password"
                                />
                            </div>

                            <div className="btn submitbtn">
                               <input type="Submit" name="signup" onClick={Login}  className="formsubmit"
                                value="Log In"
                                />

                            </div>

                            <span className='createInfo'>
                                 Create A New Account &nbsp;
                                 <NavLink to="/Home" className='createNewBtn' >
                                   < br />Sign Up
                                </NavLink>
                            </span>
                        </form>
                        <footer>
              <h4> Built with 💛 by RENISA</h4>

           </footer>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Login