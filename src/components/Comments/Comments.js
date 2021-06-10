
import { useSelector } from 'react-redux'
import { selectComments } from '../../features/comments/commentsSlice'
import Comment from '../Comment/Comment'
import React, { useEffect } from 'react'


function Comments ({id}) {

    const comments = useSelector(selectComments)

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