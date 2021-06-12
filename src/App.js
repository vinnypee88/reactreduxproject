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

  const [current, setCurrent] = useState('popular')

  useEffect(() => {
    dispatch(getData(current));
  }, [current, dispatch]);

 
const handleClick = (e) =>{
 setCurrent(e.target.value)
}

  return (
    <div className="App"> 
    
      <Header className='Header'/>       
      
      <main>

        {arrayOfPosts.map(post => {
          return <Post key={post.id} 
          id={post.id} 
          name={post.title} 
          media={post.media} 
          author={post.author} 
          permalink={post.permalink} 
          comments={post.comments}
          num_comments={post.num_comments}
         video={post.video}
          />
        })}

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
