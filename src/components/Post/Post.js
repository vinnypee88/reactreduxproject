import React from 'react'
import './Post.css'

class Post extends React.Component {
    
    render() {
        return (
            <div className="Post">
               <h2>Title of Post</h2>
               <img className='woman' src="/staff3.jpg" alt="woman"/>
               <p>Post caption</p>
                
               
            </div>
        )
    }
}
export default Post

