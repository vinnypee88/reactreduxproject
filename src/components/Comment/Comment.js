import React from 'react'

function Comment ({comment, author}) {

    return (
                    <div>
                        <p>{comment}</p>
                        <p>{author}</p>
                    </div>
                )
}

export default Comment