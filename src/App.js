import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Header from './components/Header/Header'
import Post from './components/Post/Post'
import { getData, selectPosts } from './features/popularPost/popularPostSlice'

function App() {

const arrayOfPosts = useSelector(selectPosts) // import the arrays of posts using useSelector
const dispatch = useDispatch()

// default loading topic is 'popular'.
const [currentTopic, setCurrentTopic] = useState('sports')
  
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
      <h2>No Results</h2>
      <button onClick={home}>Return to Homepage</button>
    </div>)

} else {
  return(
    arrayOfPosts.map(post => {
        return <Post 
        key={post.id} 
        id={post.id} 
        name={post.title} 
        url={post.url} 
        author={post.author} 
        permalink={post.permalink} 
        comments={post.comments}
        num_comments={post.num_comments}
        redditVid={post.redditVid}
        post_hint={post.post_hint}
        created_utc={post.created_utc}
        />
      }))
    }
  }   

//for the return home button when no search results
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
        <h2>SubReddits</h2>
        <button onClick = {handleClick} value='sports'>&#127962;</button>
        <button onClick = {handleClick} value='football'>&#9917;</button>
        <button onClick = {handleClick} value='tennis'>&#127934;</button>
        <button onClick = {handleClick} value='rugbyunion'>&#127945;</button>
        <button onClick = {handleClick} value='basketball'>&#127936;</button>
        <button onClick = {handleClick} value='golf'>&#127948;</button>
      </aside>
    </div>
  );
}

export default App;
