import React from 'react'
import './Post.css'


function Post ({name, media, author}) {

    return (
                    <div className="Post">
                       <h2>{name}</h2>
                     
                       <img className='woman' src={media} alt="woman"/>
                       <p>{author}</p>
                    </div>
                )
}
export default Post