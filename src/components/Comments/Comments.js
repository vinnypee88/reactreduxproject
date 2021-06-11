
import Comment from '../Comment/Comment'
import React from 'react'

function Comments ({comments}) {    

    return (     
                    <div className="Comments" >
                       {comments.map(comment =>
                        {
                                return <Comment comment={comment.comment} author={comment.author}/>
                        }
                        )}
                    </div>
            )
}
export default Comments