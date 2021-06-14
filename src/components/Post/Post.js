import React, { useState } from 'react'
import './Post.css'
import { useDispatch} from "react-redux";
import { getComments } from '../../features/popularPost/popularPostSlice'
import Comments from '../Comments/Comments'

function Post ({name, url, author, permalink, comments, num_comments, video, is_video, redditVid}) {

    const [showResults, setShowResults] = useState(false)

    const dispatch=useDispatch()
   
    const handleClick = async () => {
        setShowResults(!showResults)
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
      <video controls><source src={redditVid.reddit_video.fallback_url}></source></video>
      )
    }
    if (video) {
      return (
      <div className="container" >
        <iframe className="responsive-iframe" src={'//www.youtube.com/embed/' + getId(url)} frameBorder="0" allowFullScreen></iframe>
      </div>
      )
    }
    else {
      return (
      <img src={url} alt='link' />
      )
    }
    }
  
    return (
                    <div className="Post" >
                       <h2 >{name}</h2>
                        {getTag()}
                        <div className='author-comments'>
                       <p className='post-author'>{author}</p>
                       <button className="comments-button" onClick ={handleClick} permalink={permalink}><i className="fa fa-bullhorn"></i> {num_comments}</button>
                             </div>
                             { showResults ? <Comments comments={comments}/> : null }
                    </div>
                )
}
export default Post
