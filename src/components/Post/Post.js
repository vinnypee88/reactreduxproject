import React, { useState } from 'react'
import './Post.css'
import { useDispatch} from "react-redux";
// import { getComments, loadingScreen } from '../../features/comments/commentsSlice'
import { getComments } from '../../features/popularPost/popularPostSlice'
import Comments from '../Comments/Comments'

function Post ({name, url, author, permalink, comments, num_comments, video, is_video, redditVid}) {

    const [showResults, setShowResults] = useState(false)

    const dispatch=useDispatch()
   
    const handleClick = async () => {
        setShowResults(!showResults)
        // dispatch(loadingScreen())
        const apiRoot = 'https://www.reddit.com'
        const fetchCommentsLink = apiRoot + permalink + '.json'
        await dispatch(getComments(fetchCommentsLink))
    }
    // this function is to convert youtube link to the embed version
    function getId(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
  
      const videoId = (match && match[2].length === 11)
        ? match[2]
        : null;
      return videoId
  }

  const getTag = () => {
    if (is_video) {
      return (
      <video src={redditVid.reddit_video.fallback_url} autoplay controls></video>
      )
    }
    if (video) {
      return (
      <div class="container" >
        <iframe class="responsive-iframe" src={'//www.youtube.com/embed/' + getId(url)} frameborder="0" allowfullscreen></iframe>
      </div>
      )
    }
    else {
      return (
      <img className='woman' src={url} alt="woman" />
      )
    }
    }
  
    return (
                    <div className="Post" >
                       <h2 >{name}</h2>
                        {getTag()}
                       <p>{author}</p>
                       <button  onClick ={handleClick} permalink={permalink}>comments ({num_comments})</button>
                             { showResults ? <Comments comments={comments}/> : null }
                    </div>
                )
}
export default Post
