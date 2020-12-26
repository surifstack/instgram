import React , {useState} from 'react'
import '../App.css'


const Createpost = () => {

    const [data , setData] = useState({
        title : '',
        body : ''
    });

    const [image , setImage] = useState("");

    const postdetail = async () =>{

        const data = new FormData();
        data.append("file" , image);
        data.append("upload_preset" , "insta-clone")
        data.append("cloud_name" , "dvjqn8tgg")

       
    const img = await  fetch("https://api.cloudinary.com/v1_1/dvjqn8tgg/image/upload" ,{
            method : "post",
            body : data
        })
       console.log(img);
    }

    const chageInput = (e) =>{

        const {name , value } = e.target;
      
        setData((preVal) =>{
            return {
                ...preVal,
                [name] : value
            }
        })
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        try{

            console.log(data);

        }catch(err){
            console.log(err)
        }
    }
    const {title , body } = data
    return (
        <div className="post">
        <div className="card input-filed">
            <h2>Instagram</h2>
            <form onSubmit={formSubmit}>
            <input type="text" onInput={chageInput} placeholder="Enter Title" value={title}  name="title" />
            <input type="text" onInput={chageInput}  placeholder="body" name="body" value={body} />
            <div className="file-field input-field" >
                <div className="btn">
                    <span>Upload Image </span>
                    <input type="file" name="image" onChange={(e) =>setImage(e.target.files)}  />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" onInput={chageInput}  type="text" />
                </div>
    </div>
    <button className="btn waves-effect waves-light" type="submit" name="action"
    onClick={() => postdetail()}
    >
                   Submit Post
 
               </button>
               </form>

            
        </div>
        </div>
    )
}

export default Createpost
