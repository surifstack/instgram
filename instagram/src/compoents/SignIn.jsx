import React , {useState} from 'react'
import '../App.css'
import axios from 'axios'
//import  { Redirect } from 'react-router-dom'
import {Link , useHistory} from 'react-router-dom'

const SignIn = () => {
    let history = useHistory();

    const [data , setData] = useState({
        email : '',
        password : ''
    })
    const inputFiled = (e) =>{

        const {name , value} = e.target;
        setData ((preVal) =>{
            return {
                ...preVal,
                [name] : value
            }
        })
    }
    const onSubmitForm = async (e) =>{     
          e.preventDefault();

    

        const user = await    axios.post('/login', {
                headers: {
                    'Content-Type': 'application/json',
                    
                }, setData

            });

            console.log(user);
        }   

            // const User = await fetch("/login" , {
            //     method : "post",
            //     headers : {
            //       'Content-Type': 'application/json',
                 
                
            //     },
            //     body : JSON.stringify(data)
            // });
  
            // if(User.status === 200){ 
            //    //console.log(User.status);
            //    localStorage.setItem("jwt" , User.token);
            //    localStorage.setItem("user" , JSON.stringify(User.user));
            //    console.log(User);
            //    console.log(User.data);
             
            //    // history.push('/')
            // }else{

            //     console.log(User);
            // }

                  
         
    
  
    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>Instagram</h2>
                <form onSubmit={onSubmitForm} id="form">
                <input type="text" onInput={inputFiled} placeholder="Enter Email" value={data.email} name="email" />
                <input type="password" onInput={inputFiled} placeholder="Enter Password" value={data.password} name="password" />
                <button className="btn waves-effect waves-light signIn_btn" type="submit" name="action">
                    Sign In
 
               </button>
               <h6>
                   <Link to="/signup">You Dont't Have Account</Link>
               </h6>
               </form>
       
        
      </div>
        </div>
    )
}

export default SignIn
