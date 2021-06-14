import React from 'react'
import './Comment.css'

function Comment ({comment, author}) {

    return (
                    <div>
                        <p className='comment'>{comment}</p>
                        <p className='author'>{author}</p>
                    </div>
                )
}

export default Comment