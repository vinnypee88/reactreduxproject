import React, { useEffect, useState } from 'react'
import './Post.css'
import { useDispatch} from "react-redux";
import { getComments, loadingScreen } from '../../features/comments/commentsSlice'
import Comments from '../Comments/Comments'


function Post ({name, media, author, permalink, id}) {

    const [showResults, setShowResults] = useState(false)

    const dispatch=useDispatch()
   

    const handleClick = async () => {
        setShowResults(!showResults)
        dispatch(loadingScreen())
        const apiRoot = 'https://www.reddit.com'
        const fetchCommentsLink = apiRoot + permalink + '.json'
        await dispatch(getComments(fetchCommentsLink))
    }
    useEffect(()=>{
        setShowResults(showResults)
    }, [showResults])

 
    
    return (
                    <div className="Post" >
                       <h2 >{name}</h2>
                       <img className='woman' src={media} alt="woman" />
                       <p>{author}</p>
                       <button  onClick ={handleClick} permalink={permalink}>comments</button>
                       
                             { showResults ? <Comments id={id}/> : null }
                        
                    </div>
                )
}
export default Post