import React , {useState} from 'react'
import '../App.css'
import {Link } from 'react-router-dom'

//import axios from 'axios'

const SignUp = () => {

    const [value , setValue] = useState({

        name : '',
        email : '',
        password : '',
        phone : ''
    });
    const onChangeInput = (e) =>{

        const {name , value} = e.target;
        setValue((preVal) =>{

            return {
                ...preVal ,
            [name] :value

            }
            
        })
    }

    const formSubmit = async (e) =>{
        e.preventDefault();

        try{

            // const headers = {
            
            //     'Content-Type': 'application/json',
            //     'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRmMmZhNThhNWExMDBlOGY4YTYzZTMiLCJpYXQiOjE2MDg0NjY1MTl9.TsQWR4S54Hjkxxzlm8EVKe_H4hTCK0WQt5LAcxEny7E'
            //   }
              
            //  const user = await axios.post("/signup", setValue, {
            //       headers: headers
            //     });
            //     if(user){
    
            //         console.log(user);
            //     }else{
            //         console.log('eror Not Registed')
            //     }

         const user = await   fetch("/signup" , {
               method : "post",
               headers : {
                'Content-Type': 'application/json',
                'authorization': "Beare " .localStorage.getItem("jwt")
              
               },
               body : JSON.stringify(value)
           });

           if(user.status === 200){
        
          console.log(user);
            
           }

        }catch(err){

            console.log(err);
        }

      
   
    }

  

    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>Instagram</h2>

                <form onSubmit={formSubmit}>
                <input type="text" onInput={onChangeInput} value={value.phone} placeholder="Enter phone" name="phone" />
                <input type="text" onInput={onChangeInput} value={value.name} placeholder="Enter Name" name="name" />
                <input type="text" onInput={onChangeInput} value={value.email}  placeholder="Enter Email" name="email" />
                <input type="password" onInput={onChangeInput} value={value.password}  placeholder="Enter Password" name="password" />
                <button className="btn waves-effect waves-light signIn_btn" type="submit" name="action">
                    Sign Up
 
               </button>
               <h5>
                   <Link to="/signin">Already Account</Link>
               </h5>
               </form>
       
        
      </div>
        </div>
    )
}

export default SignUp

