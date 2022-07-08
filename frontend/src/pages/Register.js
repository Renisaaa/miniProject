import React, {useState , useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"

const Register = () => {

    const [user, setUser] =useState({
        "username": "",
        "Email":"",
        "Section":"",
        "batch":"",
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



    const register =() =>{
        const { username, Email, batch, Section,password} = user
        console.log(username);
        if ( username && Email && batch && Section && password ){
        axios.post("http://localhost:9002/Register", user)
        .then(res => console.log(res))
        } else {
          alert("invalid input")
        }}

    return (
       <>
         <section className="homePageWrapper">
            <div className="formWrapper">
               <div className="register">
                  {console.log("User", user)}
                    <div className="form">
                        <h2 className="mainLabel">Sign Up</h2>
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
                                type="emaild" 
                                className='inputBox'
                                 placeholder='EMAIL ID'
                                 autoComplete="off"
                                 onChange={handleChange}
                                 value={user.Email}
                                 name="Email"
                                 
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

                            <div className="inputGroup">
                            <input 
                                type="Section" 
                                className='inputBox'
                                 placeholder='SECTION'
                                 autoComplete="off"
                                 onChange={handleChange}
                                 value={user.Section}
                                 name="Section"
                            />  
                            </div>



                            <div className="inputGroup">
                            <input 
                                type="batch" 
                                className='inputBox'
                                 placeholder='BATCH'
                                 autoComplete="off"
                                 onChange={(e) => handleChange(e)}
                                 value={user.batch}
                                 name="batch"
                                 
                            />     
                            </div>

                            <div className="btn submitbtn" onClick={register}>
                               <input type="Submit" name="signup"  className="formsubmit"
                                value="Sign Up"
                                />

                            </div>

                            <span className='createInfo'>
                                 Already Have An Account &nbsp;
                                 <NavLink to="/Login" className='createNewBtn' >
                                   < br />Log In
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
export default Register