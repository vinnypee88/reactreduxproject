import React from 'react'
import './Comment.css'

function Comment ({comment, author}) {

    return (
                    <div className='comment-container'>
                        <p className='comment'>{comment}</p>
                        <p className='author'>{author}</p>
                        <br></br>
                    </div>
                )
}

export default Comment