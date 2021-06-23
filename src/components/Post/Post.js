import React, { useState } from 'react'
import './Post.css'
import { useDispatch, useSelector} from "react-redux";
import { getComments, selectIsLoading, toggleIsLoading } from '../../features/popularPost/popularPostSlice'
import Comments from '../Comments/Comments'

function Post ({name, url, author, permalink, comments, num_comments, redditVid, post_hint, created_utc, thumbnail}) {

  const [showResults, setShowResults] = useState(false)

  const dispatch=useDispatch()

  const loading = useSelector(selectIsLoading)

  const roundTime = t => {
        var unixTimestamp = t;
        var data = new Date(unixTimestamp * 1000);
        var hours = data.getHours();
        if (hours >= 24) {
            return data.getDay() + ' days';
        } else if (hours >= 1) {
            return hours + ' hours';
        } else {
            return data.getMinutes() + ' minutes';
        }
    }
   
  const handleClick = async () => {
      toggleIsLoading()
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
    if (post_hint === "link") {
      return <a href={url}><img src={thumbnail} alt={name}/></a>
    }
    if (post_hint === "rich:video") {
      return (
      <div className="container" >
        <iframe title={name} className="responsive-iframe" src={'//www.youtube.com/embed/' + getId(url)} frameBorder="0" allowFullScreen></iframe>
      </div>
      )
    }
    if (post_hint ==="hosted:video") {
      return <video controls><source src={redditVid.reddit_video.fallback_url}></source></video>
    }
    if (post_hint ==="image") {
      return <img src={url} alt='link' />
    }
    else {
      return 
    }
  }
    return (
              <div className="Post" >
                  <h2 >{name}</h2>
                    {getTag()}
                    <div className='author-comments'>
                      <p className='post-author'>{author} - {roundTime(created_utc)} ago</p>
                      {loading? <p>LOADING</p> : <p></p>}
                      <button id="comments-button" className="comments-button" onClick ={handleClick} permalink={permalink}><i className="fa fa-bullhorn"></i> {num_comments}</button>
                    </div>
                    { showResults ? <Comments comments={comments}/> : null }
              </div>
                )
}
export default Post
