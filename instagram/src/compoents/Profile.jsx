import React from 'react'
import '../App.css'

const Profile = () => {
    return (
        <div className="profile" style={{width:'650px' , margin:'40px auto'}}>

            <div className="main_container_profile">
                <div>
                  <img src="https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                   alt="" style={{width:"160px" , height:"160px" , borderRadius:'100px'}}  />
                </div>
                <div className="main_follower">
                 <h4>Surifstack</h4>
                 <div className="post_followers">
                     <h6>40Post</h6>
                     <h6>20Followers</h6>
                     <h6>2Following</h6>
                 </div>
                </div>
            </div>
            <hr />

            <div className="gallery">
            <img src="https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="items" alt=""/>
            <img src="https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="items" alt=""/>
            <img src="https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="items" alt=""/>
            <img src="https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="items" alt=""/>
            <img src="https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="items" alt=""/>
            <img src="https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="items" alt=""/>
            
             </div>
            
        </div>
    )
}

export default Profile
