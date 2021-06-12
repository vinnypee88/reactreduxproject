import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Post from './components/Post/Post'
import { useDispatch } from "react-redux";
import { getData } from './features/popularPost/popularPostSlice'
import { useSelector } from 'react-redux'
import { selectPosts } from './features/popularPost/popularPostSlice'

function App() {

  const arrayOfPosts = useSelector(selectPosts) // import the arrays of posts using useSelector
  const dispatch = useDispatch()

  // default loading topic is 'popular'.
  const [currentTopic, setCurrentTopic] = useState('popular')
  
  useEffect(() => {
    dispatch(getData(currentTopic));
  }, [currentTopic, dispatch]);

 
const handleClick = (e) =>{
 setCurrentTopic(e.target.value)
}

//If there are no results, the No results component will show, else the posts will be mapped and rendered. 
const display = () => {
  if (arrayOfPosts.length === 0) {
    return (
      <div>
        {console.log(arrayOfPosts)}
    <h2>No Results</h2>
    <button onClick={home}>Return to Homepage</button>
     </div>
    )
  } else {
    return(
    arrayOfPosts.map(post => {
      return <Post key={post.id} 
      id={post.id} 
      name={post.title} 
      url={post.url} 
      author={post.author} 
      permalink={post.permalink} 
      comments={post.comments}
      num_comments={post.num_comments}
      video={post.video}
      is_video={post.is_video}
      redditVid={post.redditVid}
      />
    }))

  }
}

//for the return hom button when no search results
const home = () => {
  window.location = '/'; 
}

  return (
    <div className="App"> 
    
      <Header className='Header'/>       
      
      <main>
        {display()}
      </main>
      <aside>
        <p>Topics</p>
        <button onClick = {handleClick} value='popular'>popular</button><br></br>
        <button onClick = {handleClick} value='football'>football</button><br></br>
        <button onClick = {handleClick} value='tennis'>tennis</button><br></br>
        <button onClick = {handleClick} value='rugbyunion'>rugby union</button><br></br>
        <button onClick = {handleClick} value='golf'>golf</button><br></br>
        <button onClick = {handleClick} value='videos'>Videos</button><br></br>
      </aside>
        


      
    </div>
  );
}

export default App;
