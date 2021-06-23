import Comment from '../Comment/Comment'
import React from 'react'

function Comments ({comments}) {    

    return (     
                    <div className="Comments" >
                       {comments.map(comment =>
                        {
                                return <Comment comment={comment.comment} author={comment.author} created_utc={comment.created_utc}/>
                        }
                        )}
                    </div>
            )
}
export default Comments